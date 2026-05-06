---
title: Building a wasm-compiled RF propagation toolkit
date: '2026-05-04T12:34:13'
---

When I was trying to plan out the talks I was goign to attend at SCALE 23x this
year, I saw that there was a workshop on [Meshtastic](https://meshtastic.org/),
an off-grid communications network that uses Long Range (LoRa) radio.

## Meshtastic Crash Course

Meshtastic uses a LoRa radio (similar to ham radio, or your cell phone) to send
texts and other digital data to other people. The effective communication range
can be a few km to a few _hundred_ km, making this an awesome tool for staying
connected off-grid. Meshtastic LoRa radios are made in a number of different
form factors:

![4 meshtastic radio devices](./nodes.webp)

These radios can be extremely energy efficient, allowing you to get _weeks_ of
uptime on a single charge in the right conditions. Some models (like the Lowmesh
Pocket S) even come with builtin solar panels for indefinite uptime.

Each one of these devices can connect to your phone via bluetooth. Using the
Meshtastic app, your phone can then send text and other digital data over the
LoRa to anyone else carrying one of these devices. But even though the range of
these devices can be long, they can still be obstructed by mountains, buildings,
or other terrain. That's where the rest of the network comes in: other
Meshtastic LoRa radios can retransmit messages to extend the reach of nearby
radios.

![A diagram showing phones connected to meshtastic radios, which communicate
over LoRa](./meshtastic-schema.png)

This happens automatically, and if there are enough devices on the network, you
can get extremely good coverage even in mountainous or obstructed terrain.
Messages are encrypted, so even if other radios repeat your message, they can't
read it.

### Radio Placement Matters

Even though Meshtastic networks have the potential to propagate messages a long
distance, the position of any given radio on the network really matters,
especially if there aren't many radios nearby. Networks with only a few radios
radios will have difficulty propagating messages from one radio to the next,
making it more likely that messages never reach their intended destination.

This is where the [Meshtastic Site Planner](https://site.meshtastic.org/) (MSP)
comes in handy. The site allows you to pick the location of a transmitter, enter
in your transmitter power and a few other parameters, and then simulate the
propagation of radio frequencies to get a map of the usable coverage of the
transmitter.

![A view of the Meshtastic Site Planner site showing a coverage
map](./meshtastic-site-planner.webp)

Very cool, and very useful. I was playing around with this tool for a little
while, but got frustrated with how slow it was. I wanted to know more about why
it took so long to produce a coverage map, and happily, [the code is up on
GitHub](https://github.com/meshtastic/meshtastic-site-planner), so I decided to
look into making it go faster.

### Architecture of the Meshtastic Site Planner

Here's what happens when a coverage prediction request is made by a user of the
MSP:

1. The user sends a request to the MSP webserver
2. The MSP webserver, a FastAPI app, creates a new prediction request in a redis
   queue
3. A python process pulls predictions requests off the queue one-by-one. For
   each request, the python process first generates a bunch of input files
   needed to generate a coverage prediction.
4. The webserver pulls the ground topography data for the region of interest from
   an S3 bucket
5. The python process then uses a subprocess to call an RF simulation engine
   called [SPLAT](https://github.com/jmcmellen/splat) to generate the prediction
6. The python process then does some postprocessing on the output files
7. A coverage prediction map is sent back to the user

The architectural choices have some major disadvantages:

- It relies on a webserver for predictions. That's a bottleneck if many users
  make requests at once, because there's just a single queue of prediction
  requests here, and a single python process chugging away at them. If we want
  computations to be fast, we need a big webserver which costs a lot of money to
  keep available.
- Someone has to manage the infrastructure.
- Network latency adds up from the user making the prediction request, the
  webserver grabbing the ground topography data from the S3 bucket, and then
  returning the response to the user.
- The user gets no progress information about the computation.

If I had to guess, the architecture of this server was probably made this
way because the RF simulation engine, SPLAT, is a standalone binary. How else
are you supposed to call it?

### Wasm compiling for speed

One alternative is to do everything client-side, without any backend at all.

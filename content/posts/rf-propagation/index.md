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

This is where the [Meshtastic Site Planner](https://site.meshtastic.org/) comes
in handy. The site allows you to pick the location of a transmitter, enter in
your transmitter power and a few other parameters, and then simulate the
propagation of radio frequencies to get a map of the usable coverage of the
transmitter.

![A view of the Meshtastic Site Planner site showing a coverage
map](./meshtastic-site-planner.webp)

Very cool, and very useful. I was playing around with this tool for a little
while, but got frustrated with how slow it was. I wanted to know more about why
it took so long to produce a coverage map, and happily, [the code is up on
GitHub](https://github.com/meshtastic/meshtastic-site-planner), so I decided to
look into making it go faster.

### Rebuilding for speed

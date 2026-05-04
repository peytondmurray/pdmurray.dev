---
title: Building a wasm-compiled RF propagation toolkit
date: '2026-05-04T12:34:13'
---


## SCALE 23x

Recently I attended the Southern California Linux Expo (SCALE 23x). On the whole
it was a mixed experience. The conference was pretty cool in some ways: it was
well-attended, and held in a great location (Pasadena Convention Center). There
was a variety of different talks, so there was something there for everyone,
whether you care about networking or security or anything else. But there were a
few things that weren't so great, too.

I imagine that the linux conferences of decades past were pretty different than
this. Massive vendors showed up, and almost all of them were peddling enterprise
services: tools for tracking agents operating on production databases (yikes),
enterprise VPN networking services, AI devops frameworks, etc. Where is all the
software that people actually use on the regular to get work done? Are we all
just building enterprise crapware now?

There weren't a lot of talks focused on kernel development or coreutils or any
of the small programs we all use all the time. Understandable because this is
often the work that goes unnoticed, and anyway it's hard to give speaking time
to small devs when big sponsorship take priority.

Also I get why Microsoft showed up but it was still weird to see them with a
booth.

## Meshtastic

When I was trying to plan out the talks I'd attend at SCALE, I saw that there
was a workshop on [Meshtastic](https://meshtastic.org/), an off-grid
communications

---
title: Undervolting drastically reduces CPU power draw
date: '2019-07-27T18:37:01-0800'
---

I've spent a decent amount of time overclocking my computers in the past. I'm definitely no expert,
but it's fun to fiddle with the CPU voltages and frequencies, trying to squeeze every last bit of
performance out of the CPU. As the CPU frequency is raised beyond the manufacturers default setting,
system performance, power draw, and heat produced will increase; at some point the system becomes
unstable and will crash or refuse to boot. At this point, overclockers will often raise the CPU
voltage, which tends to make the system more stable, at the cost of additional heat production. If
your only concern is maximizing performance, you can fight the increased temperatures with a better
CPU cooler. Underclocking, by contrast, is the pursuit of _lower_ clocks to minimize power draw and
thermal loading. At lower clock frequencies, it may be possible to reduce the CPU voltage, i.e.
_undervolt_, way below the default setting without compromising the system stability, allowing for
exceptionally low temperatures and power consumption.

Generally speaking the factory settings for CPU voltage and frequency tend to be conservative. If
you're not interested in overclocking, this means you can often stand to reduce the CPU voltage a
little bit without reducing the CPU clock - essentially reducing the CPU temperature and power
consumption without sacrificing any performance at all. While the overclocking community is much
bigger, there are a number of tools which make undervolting your CPU surprisingly easy.

I started off by installing both the [sysbench](https://github.com/akopytov/sysbench) (community)
benchmarking utility and [intel-undervolt](https://github.com/kitsunyan/intel-undervolt) (AUR),
which allows you to change the CPU voltage in real time without going into the BIOS, making the
process extremely fast. Start out by opening up a new terminal and entering `intel-undervolt measure`, to show a persistent display of the current CPU temperatures, frequencies, and power
consumption. The `intel-undervolt read` command is also useful here, and will display the current
_offset_ in the various CPU voltages. By default, it should show something like this:

```txt
CPU (0): 0.00 mV
GPU (1): 0.00 mV
CPU Cache (2): 0.00 mV
System Agent (3): 0.00 mV
Analog I/O (4): 0.00 mV
```

To undervolt the CPU, edit `/etc/intel-undervolt.conf`. By default there are a lot of lines
commented out - these seem to be advanced settings which you might want to change if, for example,
you wanted to change the CPU throttling temperature threshold. I didn't mess with any of these.
Instead, look for the following lines:

```txt
undervolt 0 'CPU' 0
undervolt 1 'GPU' 0
undervolt 2 'CPU Cache' 0
undervolt 3 'System Agent' 0
undervolt 4 'Analog I/O' 0
```

The values on the right hand side modify the default CPU and integrated GPU (NOT your graphics card)
voltages, and are given in units of mV. Start out by setting both the CPU and GPU voltages to -50 or
so. In reality it doesn't really matter what you set these to as long as you make sure the values
are negative (remember, we want to _undervolt_); if you undervolt too much the system won't be
damaged, it'll just crash and you'll have to reboot. I didn't bother messing with the `CPU Cache`,
`System Agent`, or `Analog I/O` voltages. Apply the new voltage setting by typing `intel-undervolt apply`. The effect might not be immediately obvious unless a benchmark is running - I tested a
number of different voltage settings with `sysbench cpu --threads=8 --time=300 run` running in the
background; this benchmark pins my CPU usage to 100%, so the change in power consumption should be
considered a best-case scenario here. On my i7-4770k, the reported power consumption decreased
substantially as the voltage was drastically reduced:

{{< svg class="center graph" src="voltage.svg" >}}

Unfortunately, the system wasn't stable below -100 mV, though I didn't do an exhaustive search.
Finally, I made the changes permanent by `systemctl enable intel-undervolt.service` and `systemctl start intel-undervolt.service`. For a few minutes work, I was able to reduce the CPU power
consumption by ~7 W, or ~16% (at 100% CPU load). In principle this should make the CPU less
susceptible to thermal throttling, too.

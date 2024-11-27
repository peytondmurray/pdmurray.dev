---
title: Projects
---

{{< addjs src="blackhole.js" >}}
{{< addjs src="worker.js" >}}

## Simulating an image of a black hole

What would it look like if we could take a picture of a black hole? As it turns
out, it looks like this.

![Direct image of the black hole at the core of Messier
87.](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/1920px-Black_hole_-_Messier_87_crop_max_res.jpg)

In 1977, nobody knew what these objects looked like. J-P Luminet was the first
to produce a simulated image of a black hole in a paper published that year:

![J-P Luminet's famous simulated image of a black hole from his 1977
paper.](luminet.png)

I have no idea what kind of computer was used to produce this image, but I'm
guessing Luminet used punch cards. With modern computers, how hard could it be
to recreate this result? As it turns out, it's pretty tricky. Here's my effort:

![My simulated image of a black hole.](https://raw.githubusercontent.com/peytondmurray/bhsim/main/blackhole.png)

Here I've recreated the stippling effect used in Luminet's original figure using
d3.js. I used rejection sampling to randomly place stipples, and then relaxed
them a bit by moving them toward the centers of the voronoi cells using weights
based on the brightness of the original image. To make it more performant
calculations are done on a web worker, but it still has a terrible impact on
this page's performance. It's also not anywhere near as pretty as the original.

<canvas id="canvas" />

[Check out my repository to learn more.](https://github.com/peytondmurray/bhsim)

---
title: Embedding HTML5 video in Github Pages
date: '2019-12-08T14:30:00-0800'
---

A while back, I wrote some a pair of longer posts about beautifully rendering scientific data using blender. For that
data I generated a number of short video clips showing how the magnetic moments in a material reorient themselves
when an external magnetic field is applied. Initially I had a lot of trouble embedding the video in the blog; uploading
to YouTube and embedding from there is bad because there's already native support for embedded videos with HTML5 - why
should I have to muck about with YouTube to display a simple video? Also, nobody likes it when another video starts
playing without being asked when the first is done, along with a bunch recommendations on what to watch next.

It took me a little while to figure out, but in short, `FFMPEG` is the ideal tool for the job. Equally important is the choice of compression, giving up as little as possible in terms of quality in exchange for smaller file size. I found the best compromise to be the following:

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -pix_fmt yuv420p -an output.mp4
```

Let's understand the arguments:

1. `-i input.mp4`: Specify the input file with `-i`.
2. `-c:v` is short for `-vcodec`, which itself is an alias for `-codec:v`. `libx264`, used to encode `H.264` video, was most commonly used when I published the posting before, and as I understand it there wasn't yet widespread support for `H.265`. However, `H.265` offers potentially large savings (up to ~50%!!) in terms of filesize for comparable video quality. As long as it's supported, use `libx265`.
3. `-preset slow`: This argument controls how quickly the video is encoded; the slower the encoding, the larger the compression ratio is. If the amount of time you spend encoding the video is no object, use `veryslow`. If, on the other hand, you're in a hurry to publish the video, use `ultrafast`. The compression ratio will be worse, but the video encoding will be quick.
4. `-pix_fmt yuv420p`: Correctly specifying the pixel format specifier, which controls how color image data is encoded, was critical for getting the embedded video to appear. `yuv420p` worked for me, but YMMV here - I'm pretty sure other options should work, but you need to make sure that the input video format has a pixel format compatible with the output.
5. `-an`: Don't encode any audio in the output file. If you need audio, use `-c:a <whatever audio codec>`.
6. `output.mp4`: At the end, specify the output file.

Finally, embed the resulting output in your webpage:

```html
<video
  autoplay="autoplay"
  loop="loop"
  width="800"
  height="450"
  codecs="h264"
  controls
>
  <source src=output.mp4" type="video/mp4">
</video>
```

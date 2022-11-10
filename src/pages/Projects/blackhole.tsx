import { useRef, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'
import Page from '../../components/Page'
import ProjectsMdx from './projects.mdx'
import components from '../../Theme/components'

import BhCropped from './blackhole_cropped.png'

import * as d3 from 'd3'

async function getImg(image: string) {
  const img = new Image()
  img.src = image
  img.crossOrigin = 'Anonymous'
  await img.decode()
  return img
}

async function loadImage(
  image: string,
  canvas: HTMLCanvasElement
): Promise<HTMLImageElement> {
  let img!: HTMLImageElement
  const loadPromise = new Promise((resolve) => {
    img = new Image()
    img.onload = resolve
    img.crossOrigin = 'Anonymous'
    img.src = image
  })
  await loadPromise
  return img
}

async function getLuminanceData(image: string) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const img = await loadImage(image, canvas)
  const { width, height } = img
  canvas.width = width
  canvas.height = height
  ctx?.drawImage(img, 0, 0, width, height)
  const { data: rgba } = ctx!.getImageData(0, 0, width, height)
  canvas.remove()

  const data = {
    width: width,
    height: height,
    values: new Float64Array(width * height),
  }
  for (let i = 0; i < rgba.length / 4; i++) {
    data.values[i] = Math.max(0, rgba[i * 4] / 255)
  }
  return data
}

async function generateStippledImage(
  image: string,
  ref: React.MutableRefObject<any>
) {
  const imageData = await getLuminanceData(image)
  const canvas: any = d3
    .select(ref.current)
    .attr('width', imageData.width)
    .attr('height', imageData.height)
    .node()
  const context = canvas.getContext('2d')
  const worker = new Worker(new URL('./worker.js', import.meta.url), {
    type: 'module',
  })

  async function messaged({
    data: { values, width, height },
  }: {
    data: {
      values: Float64Array
      width: number
      height: number
    }
  }) {
    context.fillStyle = '#101010'
    context.fillRect(0, 0, width, height)
    context.beginPath()
    const n = values.length
    for (let i = 0; i < n; i += 2) {
      const x = values[i]
      const y = values[i + 1]
      context.moveTo(x + 1.5, y)
      context.arc(x, y, 1, 0, 2 * Math.PI)
    }
    context.fillStyle = '#ffffff'
    context.fill()
  }

  worker.addEventListener('message', messaged)
  worker.postMessage(imageData)
}

export default function BlackHole(): JSX.Element {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      generateStippledImage(BhCropped, canvasRef)
    }
  }, [canvasRef.current])

  return <canvas id="canvas" ref={canvasRef} />
}

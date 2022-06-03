import { Heading } from '@chakra-ui/react'
import Page from '../../components/Page'
import ProjectsMdx from './projects.mdx'
import components from '../../Theme/components'

import * as d3 from 'd3'

async function getLuminanceData(image: string) {
    const img = new Image()
    img.src = image
    img.crossOrigin = 'Anonymous'
    await img.decode()
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx?.drawImage(img, img.width, img.height)
    const { data: rgba } = ctx!.getImageData(0, 0, img.width, img.height)
    const data = {
        width: img.width,
        height: img.height,
        values: new Float64Array(img.width * img.height),
    }
    rgba.filter((_, index) => index % 4 === 0).forEach((value, i) => {
        data.values[i] = Math.max(0, 1 - value / 255)
    })
    return data
}

async function generateStippledImage(image: string) {
    const imageData = await getLuminanceData(image)
    const worker = new Worker(new URL('./worker.js', import.meta.url), {
        type: 'module',
    })

    const canvas: any = d3.select('#container').append('canvas').node()
    // .attr("width", imageData.width)
    // .attr("height", imageData.height)
    const context = canvas.getContext('2d')!

    async function messaged({ data: { values, width, height } }: any) {
        context.fillStyle = '#ffffff'
        context.fillRect(0, 0, width, height)
        context.beginPath()
        const n = values.length
        for (let i = 0; i < n; i += 2) {
            const x = values[i]
            const y = values[i + 1]
            context.moveTo(x + 1.5, y)
            context.arc(x, y, 1.5, 0, 2 * Math.PI)
        }
        context.fillStyle = '#000000'
        context.fill()
    }

    worker.addEventListener('message', messaged)
    worker.postMessage(imageData)
    return context.canvas
}

// generateStippledImage('https://raw.githubusercontent.com/peytondmurray/bhsim/main/blackhole.png')
generateStippledImage(
    'https://static.observableusercontent.com/files/14959f050311f400368624031a7b9e4285f35c65ca4022f618f9250d7163ef4b0a0582de20f7d9790ed76b3442b4a77ebb96b86f641c1d8466f6544325144aed?response-content-disposition=attachment%3Bfilename*%3DUTF-8%27%27obama.png'
)

export default function Projects(): JSX.Element {
    return (
        <Page>
            <Heading as="h2" size="xl">
                Projects
            </Heading>
            <div id="container" />
            <ProjectsMdx components={components} />
        </Page>
    )
}

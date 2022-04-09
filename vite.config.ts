import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from 'remark-gfm'
import rehypeReact from 'rehype-react'

export default defineConfig({
    plugins: [
        react(),
        mdx({
            remarkPlugins: [
                remarkGfm,
                remarkFrontmatter,
                remarkMdxFrontmatter,
                remarkMath,
            ],
            rehypePlugins: [[rehypeKatex, { trust: true }], rehypePrism],
        }),
        svgrPlugin(),
    ],
    clearScreen: false,
    logLevel: 'info',
    resolve: {
        alias: {
            'react/jsx-runtime': 'react/jsx-runtime.js',
        },
    },
})

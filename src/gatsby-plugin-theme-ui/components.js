import React from 'react'
import TeX from '@matejmazur/react-katex'
import Prism from '@theme-ui/prism'

const settings = {
    trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
    macros: {
        '\\eqref': '\\href{###1}{(\\text{#1})}',
        '\\ref': '\\href{###1}{\\text{#1}}',
        '\\label': '\\htmlId{#1}{}',
    },
    strict: (errorCode) => (errorCode === 'htmlExtension' ? 'ignore' : 'warn'),
}

const components = {
    pre: (props) => props.children,
    code: Prism,
    div: (props) => {
        if (props?.className?.includes('math-display')) {
            return <TeX block math={props.children} settings={settings} />
        }
        return <div {...props} />
    },
    span: (props) => {
        if (props?.className?.includes('math-inline')) {
            return <TeX math={props.children} settings={settings} />
        }
        return <span {...props} />
    },
}
export default components

import React from 'react'
import styled from '@emotion/styled'

import HeroLink from '../../components/HeroLink'
import Page from '../../components/Page'

import Corner from './corner.png'
import OOPML from './OOPML.svg'
// import { ReactComponent as OOPML } from './OOPML.svg'
import About from './about_me_400x400px.jpg'

const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    > div:not(:first-of-type):not(:last-of-type) {
        margin: 0px 15px 0px 15px;
    }

    img {
        width: 100%;
    }
`

export default function MainPage(): JSX.Element {
    return (
        <Page>
            <HeroRow>
                <HeroLink title="Blog" href="/blog">
                    <img src={Corner} />
                </HeroLink>
                <HeroLink title="Research" href="/research">
                    <OOPML
                        sx={{
                            '#curve': {
                                stroke: (theme: any) =>
                                    `${theme.colors.primary} !important`,
                                strokeWidth: '0.3em !important',
                            },
                            '#labels': {
                                fill: (theme: any) =>
                                    `${theme.colors.secondary} !important`,
                            },
                            '#axes': {
                                path: {
                                    stroke: (theme: any) =>
                                        `${theme.colors.secondary} !important`,
                                    strokeWidth: '0.15em !important',
                                },
                            },
                        }}
                    />
                </HeroLink>
                <HeroLink title="About" href="/about">
                    <img src={About} />
                </HeroLink>
            </HeroRow>
        </Page>
    )
}

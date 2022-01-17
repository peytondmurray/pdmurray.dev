import React from 'react'
import styled from '@emotion/styled'

import { StaticImage } from 'gatsby-plugin-image'

import HeroLink from '../components/HeroLink'
import Page from '../components/Page'

const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    > div:not(:first-of-type):not(:last-of-type) {
        margin: 0px 15px 0px 15px;
    }
`

export default function IndexPage() {
    return (
        <main>
            <Page>
                <HeroRow>
                    <HeroLink title="Blog" to="/blog">
                        <StaticImage
                            src="../images/corner.png"
                            alt="A corner plot of some MCMC samples"
                            layout="fullWidth"
                        />
                    </HeroLink>
                    <HeroLink title="Research" to="/research">
                        <StaticImage
                            src="../images/OOP_ML.png"
                            alt="My research interests in condensed matter physics."
                            layout="fullWidth"
                        />
                    </HeroLink>
                    <HeroLink title="About" to="/about">
                        <StaticImage
                            src="../images/about_me_400x400px.jpg"
                            alt="A picture of me."
                            layout="fullWidth"
                        />
                    </HeroLink>
                </HeroRow>
            </Page>
        </main>
    )
}

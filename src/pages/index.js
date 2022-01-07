import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'

import HeroLink from '../components/HeroLink'

const pageStyles = {
    color: '#232129',
    padding: 96,
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    > div:not(:first-child):not(:last-child) {
        margin: 0px 15px 0px 15px;
    }
`

export default function IndexPage() {
    return (
        <main style={pageStyles}>
            <title>Home Page</title>
            <h1 style={headingStyles}>Peyton Murray</h1>
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
        </main>
    )
}

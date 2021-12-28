import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'

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

const TextImageLink = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
`

const ImageTitle = styled.h2`
    color: black;
    text-align: center;
`

export default function IndexPage() {
    return (
        <main style={pageStyles}>
            <title>Home Page</title>
            <h1 style={headingStyles}>Peyton Murray</h1>
            <HeroRow>
                <TextImageLink>
                    <StaticImage
                        src="../images/corner.png"
                        alt="A corner plot of some MCMC samples"
                        layout="fullWidth"
                    />
                    <ImageTitle>Blog</ImageTitle>
                </TextImageLink>
                <TextImageLink>
                    <StaticImage
                        src="../images/OOP_ML.png"
                        alt="My research interests in condensed matter physics."
                        layout="fullWidth"
                    />
                    <ImageTitle>Research</ImageTitle>
                </TextImageLink>
                <TextImageLink>
                    <StaticImage
                        src="../images/about_me_400x400px.jpg"
                        alt="A picture of me."
                        layout="fullWidth"
                    />
                    <ImageTitle>About</ImageTitle>
                </TextImageLink>
            </HeroRow>
        </main>
    )
}

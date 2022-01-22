import styled from '@emotion/styled'

import { StaticImage } from 'gatsby-plugin-image'

import HeroLink from '../components/HeroLink'
import Page from '../components/Page'

import OOPML from '../images/svgs/OOPML.svg'

const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    > div:not(:first-of-type):not(:last-of-type) {
        margin: 0px 15px 0px 15px;
    }
`

export default function MainPage(): JSX.Element {
    return (
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
                    <OOPML
                        alt="My research interests in condensed matter physics."
                        layout="fullWidth"
                        sx={{
                            fill: (theme) => `${theme.colors.accent} !important`,
                            stroke: (theme) => `${theme.colors.accent} !important`,
                            '#curve': {
                                stroke: (theme) => `${theme.colors.primary} !important`,
                            },
                            '#labels': {
                                fill: (theme) => `${theme.colors.accent} !important`,
                            },
                            '#axes': {
                                fill: (theme) => `${theme.colors.accent} !important`,
                                stroke: (theme) => `${theme.colors.accent} !important`,
                            }
                        }}
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
    )
}

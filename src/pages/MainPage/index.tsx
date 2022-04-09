import { Box, Image } from '@chakra-ui/react'

import HeroLink from '../../components/HeroLink'
import Page from '../../components/Page'

import Corner from './corner.png'
import { ReactComponent as Oopml } from './OOPML.svg'
import About from './about_me_400x400px.jpg'

export default function MainPage(): JSX.Element {
    return (
        <Page>
            <Box display="flex" flexDirection="row">
                <HeroLink title="Blog" href="/blog">
                    <Image src={Corner} width="100%" />
                </HeroLink>
                <HeroLink title="Research" href="/research">
                    <Box
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
                    >
                        <Oopml />
                    </Box>
                </HeroLink>
                <HeroLink title="About" href="/about">
                    <Image src={About} width="100%" />
                </HeroLink>
            </Box>
        </Page>
    )
}

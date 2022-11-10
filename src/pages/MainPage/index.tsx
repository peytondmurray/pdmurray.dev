import { Box, Image, Grid } from '@chakra-ui/react'

import HeroLink from '../../components/HeroLink'
import Page from '../../components/Page'

import Corner from './corner.avif'
import { ReactComponent as Oopml } from './OOPML.svg'
import About from './about_me_400x400px.avif'
import { ReactComponent as Blackhole } from './isoradials_80_deep_r.svg'

export default function MainPage(): JSX.Element {
  return (
    <Page>
      <Grid gridAutoFlow="column" gridAutoColumns="1fr" gap="1em">
        <HeroLink title="Blog" href="/blog">
          <Image src={Corner} width="100%" />
        </HeroLink>
        <HeroLink title="Research" href="/research">
          <Box
            sx={{
              '#curve': {
                stroke: (theme: any) => `${theme.colors.primary} !important`,
                strokeWidth: '0.3em !important',
              },
              '#labels': {
                fill: (theme: any) => `${theme.colors.secondary} !important`,
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
        <HeroLink title="Projects" href="/projects">
          <Box
            sx={{
              svg: {
                fill: '#00000000',
              },
            }}
          >
            <Blackhole />
          </Box>
        </HeroLink>
      </Grid>
    </Page>
  )
}

import { Link, Image, Text } from '@chakra-ui/react'

import Page from '../../components/Page'
import Nicoo from './NiCoO_r1_reduced_cropped.jpg'

export default function AboutPage(): JSX.Element {
    return (
        <Page>
            <Image src={Nicoo} marginBottom="3em" />
            <Text textAlign="justify">
                Hi! I'm Peyton. Currently I work for{' '}
                <Link href="https://www.quansight.com/">Quansight</Link> where I
                build open source software; sometimes I do contracting work
                through my company. Before I was a programmer, I studied
                nanoscale magnetism as a postdoc at the &nbsp;{' '}
                <Link href="https://www.tuni.fi/en/about-us/computational-physics">
                    {' '}
                    Computational Physics Laboratory{' '}
                </Link>{' '}
                &nbsp; at Tampere University. At UC Davis I studied nanoscale
                magnetism from an experimental perspective as part of the{' '}
                <Link href="http://kailiu.georgetown.domains/research/">
                    {' '}
                    Liu Lab{' '}
                </Link>{' '}
                - which has since moved to Georgetown University. In my free
                time I like to write software for science, and am an active
                contributor to several open source projects. I'm driven by the
                desire to make computational power more accessible to more
                people around the world - especially in support of scientific
                research.
            </Text>
        </Page>
    )
}

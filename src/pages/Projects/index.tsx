import { Heading } from '@chakra-ui/react'
import Page from '../../components/Page'
import ProjectsMdx from './projects.mdx'
import components from '../../Theme/components'

export default function Projects(): JSX.Element {
    return (
        <Page>
            <Heading as="h2" size="xl">
                Projects
            </Heading>
            <ProjectsMdx components={components} />
        </Page>
    )
}

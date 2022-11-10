import { Heading } from '@chakra-ui/react'
import Page from '../../components/Page'

export default function PostLayout({
  title = '',
  children,
}: {
  title?: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <Page>
      <Heading as="h2" size="xl" marginBottom="0.5em">
        {title}
      </Heading>
      {children}
    </Page>
  )
}

import { Heading, Box, Link } from '@chakra-ui/react'

export default function HeroLink({
  children,
  title,
  href,
}: {
  children: JSX.Element
  title: string
  href: string
}): JSX.Element {
  return (
    <Link href={href}>
      <Box display="block" flexDirection="column" height="100%">
        {children}
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
      </Box>
    </Link>
  )
}

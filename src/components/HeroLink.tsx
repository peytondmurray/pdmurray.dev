import React from 'react'
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
        <Box display="flex" flexDirection="column" flexBasis="100%">
            <Link href={href}>
                {children}
                <Heading as="h2" textAlign="center">
                    {title}
                </Heading>
            </Link>
        </Box>
    )
}

import { Heading, Link } from '@chakra-ui/react'

function PostLink({
    children,
    title,
    to,
    date,
    excerpt,
}: {
    children: JSX.Element | null
    title: string
    to: string
    date: string
    excerpt: string
}): JSX.Element {
    return (
        <Link href={to} textDecoration="none" color="primary">
            <Heading as="h2">
                {title} [{date}]
            </Heading>
            {children}
            <p>{excerpt}</p>
        </Link>
    )
}

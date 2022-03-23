import { Heading, Link } from '@chakra-ui/react'

export default function PostLink({
    title,
    to,
    date,
}: {
    title: string
    to: string
    date: string
}): JSX.Element {
    return (
        <Link href={to} textDecoration="none" color="primary">
            <Heading as="h3">
                {title} [{date}]
            </Heading>
        </Link>
    )
}

import { Heading, Link } from 'theme-ui'
import styled from '@emotion/styled'

import Page from '../components/Page'

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
        <Link
            href={to}
            sx={{
                textDecoration: 'none',
                color: 'primary',
            }}
        >
            <Heading as="h2">
                {title} [{date}]
            </Heading>
            {children}
            <p>{excerpt}</p>
        </Link>
    )
}

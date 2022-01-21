import styled from '@emotion/styled'

import { Link as GatsbyLink } from 'gatsby'
import { Link } from 'theme-ui'

const TextImageLink = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
`

const ImageTitle = styled.h2`
    text-align: center;
`

export default function HeroLink({
    children,
    title,
    to,
}: {
    children: JSX.Element
    title: string
    to: string
}): JSX.Element {
    return (
        <TextImageLink>
            <Link to={to} as={GatsbyLink}>
                {children}
                <ImageTitle>{title}</ImageTitle>
            </Link>
        </TextImageLink>
    )
}

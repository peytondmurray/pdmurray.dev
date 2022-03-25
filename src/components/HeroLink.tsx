import styled from '@emotion/styled'

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
    href,
}: {
    children: JSX.Element
    title: string
    href: string
}): JSX.Element {
    return (
        <TextImageLink>
            <Link href={href}>
                {children}
                <ImageTitle>{title}</ImageTitle>
            </Link>
        </TextImageLink>
    )
}

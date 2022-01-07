import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const TextImageLink = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
`

const ImageTitle = styled.h2`
    color: black;
    text-align: center;
`

export default function HeroLink({
    children,
    title,
    to,
}: {
    children: JSX.Element,
    title: string,
    to: string,
}): JSX.Element {

    return (
        <TextImageLink>
            <Link to={to}>
                {children}
                <ImageTitle>{title}</ImageTitle>
            </Link>
        </TextImageLink>
    )
}

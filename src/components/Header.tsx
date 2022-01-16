import { Link as GatsbyLink } from 'gatsby'
import { Link } from 'theme-ui'
import React from 'react'
import styled from '@emotion/styled'

const HeaderLayout = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 5em;
`

export default function Header(): JSX.Element {
    return (
        <HeaderLayout>
            <Link to="/" as={GatsbyLink}>
                <h1>Peyton Murray</h1>
            </Link>
        </HeaderLayout>
    )
}

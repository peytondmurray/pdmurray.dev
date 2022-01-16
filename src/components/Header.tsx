import { Link as GatsbyLink } from 'gatsby'
import { Link } from 'theme-ui'
import React from 'react'
import styled from '@emotion/styled'

const HeaderLayout = styled.div`
    display: flex;
    flex-direction: row;
`

export default function Header(): JSX.Element {
    return (
        <HeaderLayout>
            <Link to="/" as={GatsbyLink}>
                <h1>Test</h1>
            </Link>
        </HeaderLayout>
    )
}

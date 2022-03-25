import React from 'react'
import { Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const HeaderLayout = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0em 0em 0em 5em;
    margin: 0em 0em 1em 0em;
`

export default function Header(): JSX.Element {
    return (
        <HeaderLayout>
            <Link href="/" textDecoration="none">
                <h1>Peyton Murray</h1>
            </Link>
        </HeaderLayout>
    )
}

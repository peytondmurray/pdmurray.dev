import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderLayout = styled.div`
    display: flex;
    flex-direction: row;
`

const Home = styled.h1`
    color: #005500;
`

export default function Header(): JSX.Element {
    return (
        <HeaderLayout>
            <Link to='/'>
                <Home>Peyton Murray</Home>
            </Link>
        </HeaderLayout>
    )
}

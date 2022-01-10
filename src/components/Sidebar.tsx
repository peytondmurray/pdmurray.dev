import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const links = [
    {
        name: "peynmurray@gmail.com",
        to: "email:peynmurray@gmail.com",
        icon: ""
    },
    {
        name: "GitHub",
        to: "https://github.com/peytondmurray",
        icon: <StaticImage src='../images/icons/github.svg' alt="GitHub logo" />
    },
    {
        name: "Linkedin",
        to: "https://www.linkedin.com/in/peytondm/",
        icon: "",
    },
    {
        name: "ORCiD",
        to: "https://orcid.org/0000-0003-0389-0611",
        icon: ""
    },
    {
        name: "Google Scholar",
        to: "https://scholar.google.ca/citations?user=NXE8TDYAAAAJ&hl=en&oi=ao",
        icon: "",
    },
    {
        name: "ResearchGate",
        to: "https://www.researchgate.net/profile/Peyton-Murray",
        icon: ""
    },
    {
        name: "Stack Overflow",
        to: "https://stackoverflow.com/users/8100451/peytondmurray",
        icon: ""
    },
]

const SidebarLayout = styled.div`
    display: flex;
    flex-direction: column;
`

const IconTextLayout = styled.div`
    display: flex;
    flex-direction: row;
`

const Name = styled.div`

`

const Icon = styled.div`

`

export default function SidebarBase(): JSX.Element {
    return (
        <SidebarLayout>
            {links.map(({name, to, icon}) => {
                return (
                    <a href={to}>
                        <IconTextLayout>
                            <Icon>{icon}</Icon>
                            <Name>{name}</Name>
                        </IconTextLayout>
                    </a>
                )
            })}
        </SidebarLayout>
    )
}

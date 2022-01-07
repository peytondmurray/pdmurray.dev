import React from 'react'
import styled from 'styled-components'

const links = [
    {
        name: "Linkedin",
        to: "https://www.linkedin.com/in/peytondm/",
        icon: "",
    },
    {
        name: "peynmurray@gmail.com",
        to: "email:peynmurray@gmail.com",
        icon: ""
    },
    {
        name: "orcid",
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
    }
]

export default function Sidebar(): JSX.Element {
    return (
        <div>
            {links.map(({name, to, icon}) => {
                return (
                    <a href={to}>{name}</a>
                )
            })}
        </div>
    )
}

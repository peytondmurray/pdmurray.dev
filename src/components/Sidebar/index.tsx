import React from 'react'
import styled from '@emotion/styled'

import { Link } from 'theme-ui'

import AtIcon from './at-solid.svg'
import GithubIcon from './github.svg'
import GoogleScholarIcon from './google-scholar.svg'
import LinkedinIcon from './linkedin.svg'
import OrcidIcon from './orcid.svg'
import ResearchgateIcon from './researchgate.svg'
import StackoverflowIcon from './stackoverflow.svg'

const links = [
    {
        name: 'peynmurray@gmail.com',
        to: 'email:peynmurray@gmail.com',
        icon: <AtIcon />,
    },
    {
        name: 'GitHub',
        to: 'https://github.com/peytondmurray',
        icon: <GithubIcon />,
    },
    {
        name: 'Linkedin',
        to: 'https://www.linkedin.com/in/peytondm/',
        icon: <LinkedinIcon />,
    },
    {
        name: 'ORCiD',
        to: 'https://orcid.org/0000-0003-0389-0611',
        icon: <OrcidIcon />,
    },
    {
        name: 'Google Scholar',
        to: 'https://scholar.google.ca/citations?user=NXE8TDYAAAAJ&hl=en&oi=ao',
        icon: <GoogleScholarIcon />,
    },
    {
        name: 'ResearchGate',
        to: 'https://www.researchgate.net/profile/Peyton-Murray',
        icon: <ResearchgateIcon />,
    },
    {
        name: 'Stack Overflow',
        to: 'https://stackoverflow.com/users/8100451/peytondmurray',
        icon: <StackoverflowIcon />,
    },
]

const SidebarLayout = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1em;
    padding-right: 1em;

    a {
        :not(:first-of-type) {
            margin-top: 0.5em;
        }
        text-decoration: none;
    }
`

const IconTextLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Name = styled.div`
    margin: 0px 0px 5px 0px;
`

const Icon = styled.div`
    width: 1em;
    margin-right: 1em;
`

export default function SidebarBase(): JSX.Element {
    return (
        <SidebarLayout
            sx={{
                borderRight: (theme) => `0.1em solid ${theme?.colors?.accent}`,
            }}
        >
            {links.map(({ name, to, icon }) => {
                return (
                    <Link href={to} key={name}>
                        <IconTextLayout>
                            <Icon
                                sx={{
                                    fill: (theme: any) =>
                                        `${theme?.styles?.a?.color}`,
                                }}
                            >
                                {icon}
                            </Icon>
                            <Name>{name}</Name>
                        </IconTextLayout>
                    </Link>
                )
            })}
        </SidebarLayout>
    )
}

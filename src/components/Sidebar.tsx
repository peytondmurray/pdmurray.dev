import styled from '@emotion/styled'

import { Link } from 'theme-ui'

import AtIcon from '../images/icons/at-solid.svg'
import GithubIcon from '../images/icons/github.svg'
import GoogleScholarIcon from '../images/icons/google-scholar.svg'
import LinkedinIcon from '../images/icons/linkedin.svg'
import OrcidIcon from '../images/icons/orcid.svg'
import ResearchgateIcon from '../images/icons/researchgate.svg'
import StackoverflowIcon from '../images/icons/stackoverflow.svg'

const links = [
    {
        name: 'peynmurray@gmail.com',
        to: 'email:peynmurray@gmail.com',
        // icon: <AtIcon alt="at symbol" />,
        icon: <AtIcon alt="at symbol" />,
    },
    {
        name: 'GitHub',
        to: 'https://github.com/peytondmurray',
        icon: <GithubIcon alt="GitHub logo" />,
    },
    {
        name: 'Linkedin',
        to: 'https://www.linkedin.com/in/peytondm/',
        icon: <LinkedinIcon alt="LinkedIn logo" />,
    },
    {
        name: 'ORCiD',
        to: 'https://orcid.org/0000-0003-0389-0611',
        icon: <OrcidIcon alt="ORCiD logo" />,
    },
    {
        name: 'Google Scholar',
        to: 'https://scholar.google.ca/citations?user=NXE8TDYAAAAJ&hl=en&oi=ao',
        icon: <GoogleScholarIcon alt="Google Scholar logo" />,
    },
    {
        name: 'ResearchGate',
        to: 'https://www.researchgate.net/profile/Peyton-Murray',
        icon: <ResearchgateIcon alt="ResearchGate logo" />,
    },
    {
        name: 'Stack Overflow',
        to: 'https://stackoverflow.com/users/8100451/peytondmurray',
        icon: <StackoverflowIcon alt="Stack Overflow logo" />,
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
                borderRight: (theme) => `0.1em solid ${theme.colors.accent}`,
            }}
        >
            {links.map(({ name, to, icon }) => {
                return (
                    <Link href={to} key={name}>
                        <IconTextLayout>
                            <Icon
                                sx={{
                                    fill: (theme) => `${theme.styles.a.color}`,
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

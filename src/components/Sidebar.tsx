import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import { Link } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

import { getFilter } from '../util/colorFilter'

const links = [
    {
        name: 'peynmurray@gmail.com',
        to: 'email:peynmurray@gmail.com',
        icon: (
            <StaticImage
                src="../images/icons/at-solid.svg"
                alt="at symbol"
                style={{ fill: 'white' }}
            />
        ),
    },
    {
        name: 'GitHub',
        to: 'https://github.com/peytondmurray',
        icon: (
            <StaticImage src="../images/icons/github.svg" alt="GitHub logo" />
        ),
    },
    {
        name: 'Linkedin',
        to: 'https://www.linkedin.com/in/peytondm/',
        icon: (
            <StaticImage
                src="../images/icons/linkedin.svg"
                alt="LinkedIn logo"
            />
        ),
    },
    {
        name: 'ORCiD',
        to: 'https://orcid.org/0000-0003-0389-0611',
        icon: <StaticImage src="../images/icons/orcid.svg" alt="ORCiD logo" />,
    },
    {
        name: 'Google Scholar',
        to: 'https://scholar.google.ca/citations?user=NXE8TDYAAAAJ&hl=en&oi=ao',
        icon: (
            <StaticImage
                src="../images/icons/google-scholar.svg"
                alt="Google Scholar logo"
                imgStyle={{
                    filter: 'invert(1)',
                }}
            />
        ),
    },
    {
        name: 'ResearchGate',
        to: 'https://www.researchgate.net/profile/Peyton-Murray',
        icon: (
            <StaticImage
                src="../images/icons/researchgate.svg"
                alt="ResearchGate logo"
            />
        ),
    },
    {
        name: 'Stack Overflow',
        to: 'https://stackoverflow.com/users/8100451/peytondmurray',
        icon: (
            <StaticImage
                src="../images/icons/stackoverflow.svg"
                alt="Stack Overflow logo"
            />
        ),
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
    align-items: baseline;
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
                                    fill: 'red',
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

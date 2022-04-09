import { Box, Link, Icon, Flex } from '@chakra-ui/react'

import { ReactComponent as AtIcon } from './at-solid.svg'
import { ReactComponent as GithubIcon } from './github.svg'
import { ReactComponent as GoogleScholarIcon } from './google-scholar.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as OrcidIcon } from './orcid.svg'
import { ReactComponent as ResearchgateIcon } from './researchgate.svg'
import { ReactComponent as StackoverflowIcon } from './stackoverflow.svg'

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

export default function SidebarBase(): JSX.Element {
    return (
        <Flex
            borderRight="0.1em solid accent"
            flexDirection="column"
            marginRight="1em"
            paddingRight="1em"
        >
            {links.map(({ name, to, icon }) => {
                return (
                    <Link
                        href={to}
                        key={name}
                        _notFirst={{
                            marginTop: '0.5em',
                        }}
                        margin="0px 0px 5px 0px"
                    >
                        <Flex flexDirection="row" alignItems="center">
                            <Icon fill="a.color" width="2em">
                                {icon}
                            </Icon>
                            {name}
                        </Flex>
                    </Link>
                )
            })}
        </Flex>
    )
}

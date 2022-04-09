import { Link, Flex, Heading } from '@chakra-ui/react'

export default function Header(): JSX.Element {
    return (
        <Flex
            flex-direction="row"
            padding="0em 0em 0em 5em"
            margin="1em 0em 1em 0em"
        >
            <Link href="/" textDecoration="none">
                <Heading as="h1" size="2xl" fontFamily="Michroma">
                    PEYTON MURRAY
                </Heading>
            </Link>
        </Flex>
    )
}

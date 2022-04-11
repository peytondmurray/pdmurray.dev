import {
    Heading,
    Link,
    OrderedList,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'

const customComponents = {
    h1: (props: any) => <Heading as="h1" size="2xl" {...props} />,
    h2: (props: any) => <Heading as="h2" size="lg" {...props} />,
    h3: (props: any) => <Heading as="h3" size="md" {...props} />,
    h4: (props: any) => <Heading as="h4" size="sm" {...props} />,
    a: Link,
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
}

export default customComponents

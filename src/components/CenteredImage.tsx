import { Center, Image } from '@chakra-ui/react'

export default function CenterImage(props: any): JSX.Element {
  return (
    <Center>
      <Image {...props} />
    </Center>
  )
}

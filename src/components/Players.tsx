import ReactPlayer from 'react-player'
import { Center, Box } from '@chakra-ui/react'

export function CenteredReactPlayer(props: any): JSX.Element {
  return (
    <Center>
      <ReactPlayer {...props} />
    </Center>
  )
}

export function ResponsivePlayer(props: any): JSX.Element {
  return (
    <Box
      position="relative"
      paddingTop="56.25%"
      sx={{
        '.player': {
          position: 'absolute',
          top: 0,
          left: 0,
        },
      }}
    >
      <CenteredReactPlayer
        {...props}
        className="player"
        width="100%"
        height="100%"
      />
    </Box>
  )
}

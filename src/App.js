import {Flex, Heading} from '@chakra-ui/react'
import './styles.css'

const App = () => {
  return (
    <Flex
      pos = 'absolute'
      top = '0px'
      left = '0px'
      h = '100vh'
      w = '100vw'
      bg = 'rgb(240 240 240)'
    >
      <Heading
        position = 'absolute'
        left = '50vw'
      >
        Head
      </Heading>
      <Flex
        pos = 'absolute'
        top = '10vh'
        left = '5vw'
      >
        <Box className = 'tiles'
          borderStyle = 'solid'
          borderRadius = '30px'
          borderColor = 'rgb(255 160 0)'
          _hover = {{
            bg: 'rgb(255 160 0)',
            transition: '0.2s',
            cursor: 'pointer'}}
        >
      </Box>
      </Flex>
    </Flex>
  )
}

export default App
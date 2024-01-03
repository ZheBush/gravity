import {Flex, Heading, Grid} from '@chakra-ui/react'
import CustomBox from './components/Boxes'

const App = () => {
  return (
    <Flex
      pos = 'absolute'
      top = '0px'
      left = '0px'
      h = '100vh'
      w = '100vw'
      bgImage = "url('/textures/blue_wall.jpg')" 
      bgPosition = "center"
      bgRepeat = "no-repeat" > 
      <Heading
        position = 'absolute'
        top = '11vh'
        left = '44.5vw'
        color = 'rgb(150 150 150)'
        fontSize = '100px'
        textAlign = 'center' >
        Head
      </Heading>
      <Flex
        pos = 'absolute'
        top = '54vh'
        left = '5vw' >
        <Grid
          position = 'relative'
          left = '7vw'
          gap = '30px'
          gridTemplateColumns = 'repeat(3, 1fr)' >
          <CustomBox
            borderColor = 'rgb(248 237 7)'
            hoverColor = 'rgb(248 237 7)' />
          <CustomBox
            borderColor = 'rgb(250 11 27)'
            hoverColor = 'rgb(250 11 27)' />
          <CustomBox
            borderColor = 'rgb(0 215 250)'
            hoverColor = 'rgb(0 215 250)' />
        </Grid>
      </Flex>
    </Flex>
  )
}

export default App
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
      bg = 'rgb(40 40 40)'
    > 
      <Heading
        position = 'absolute'
        left = '50vw'
        color = 'rgb(240 240 240)'
      >
        Head
      </Heading>
      <Flex
        pos = 'absolute'
        top = '17vh'
        left = '5vw'
      >
        <Grid
          position = 'relative'
          left = '7vw'
          gap = '30px'
          gridTemplateColumns = 'repeat(3, 1fr)'
        >
          <CustomBox
            borderColor = 'rgb(250 160 0)'
            hoverColor = 'rgb(250 160 0)' 
            text = 'Полезные ссылки' />   
          <CustomBox
            borderColor = 'rgb(239 11 27)'
            hoverColor = 'rgb(239 11 27)' />
          <CustomBox
            borderColor = 'rgb(0 215 250)'
            hoverColor = 'rgb(0 215 250)' />    
          <CustomBox
            borderColor = 'rgb(2 201 42)'
            hoverColor = 'rgb(2 201 42)' />
          <CustomBox
            borderColor = 'rgb(31 31 121)'
            hoverColor = 'rgb(31 31 121)' />    
          <CustomBox
            borderColor = 'rgb(130 2 77)'
            hoverColor = 'rgb(130 2 77)' />
        </Grid>
      </Flex>
    </Flex>
  )
}

export default App
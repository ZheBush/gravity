import {Flex, Circle, Button} from '@chakra-ui/react'
import { useState } from 'react';

export default function App() {

  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(300)
  const [flagForMove, setFlagForMove] = useState(false)
  const [fields, setFields] = useState([])

  const changePosition = () => {
    const move = () => {
      setPositionX((prevState) => prevState + 1)
      setPositionY((prevState) => prevState + 0)
    }
    setTimeout(move, 100)
  }

  const changeItem = (event) => {
    if (event.buttons == 4) {
      setFlagForMove(!flagForMove) 
    }
    else if (event.buttons == 1) {
      createFild(event.clientX, event.clientY)
    }
    else if (event.buttons == 2) {
      deleteFild()
    }
  }

  const createFild = () => {
    const newField = {
      
    }
  }

  if (flagForMove) {
    changePosition()
  }

  return (
    <Flex
      h = '100vh'
      w = '100vw'
      backgroundColor = 'rgb(50, 50, 50)'
      position = 'absolute'
      top = '0px'
      left = '0px'
      onMouseDown= {(event) => changeItem(event)}
    >
      <Circle
        position = 'relative'
        top = {positionY + 'px'}
        left = {positionX + 'px'}
        h = '30px'
        w = '50px'
        backgroundColor = 'rgb(0, 220, 255)'
      >
      </Circle>
    </Flex>
  );
}
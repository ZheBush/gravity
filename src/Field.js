import {Circle} from '@chakra-ui/react'

const Field = (props) => {
    return (
        <Circle 
            position = 'relative'
            w = '20px'
            h = '20px'
            backgroundColor = 'rgb(255, 200, 0)'
            top = {props.positionY + 'px'}
            left = {props.positionX + 'px'}
        />
    )
}

export default Field
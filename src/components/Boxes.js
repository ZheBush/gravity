import {Box} from '@chakra-ui/react'

const CustomBox = (props) => {
    return (
        <Box
            pos = 'relative'
            h = '30vh'
            w = '25vw'
            bg = 'transparent'
            borderStyle = 'solid'
            borderRadius = '30px'   
            borderColor = {props.borderColor}
            color = 'rgb(255 255 255)'
            transition = '0.3s'
            _hover = {{
                h: '36vh',
                bg: props.hoverColor,
                transition: '0.3s',
                cursor: 'pointer'   
            }} >
            {props.text}
        </Box>
    )   
}

export default CustomBox
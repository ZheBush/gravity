import {Box} from '@chakra-ui/react'

const CustomBox = (props) => {
    return (
        <Box
            pos = 'relative'
            h = '30vh'
            w = '25vw'
            bg = 'rgb(40 40 40)'
            borderStyle = 'solid'
            borderRadius = '30px'
            borderColor = {props.borderColor}
            color = 'rgb(255 255 255)'
            _hover = {{
                h: '35vh',
                bg: props.hoverColor,
                transition: '0.5s'
            }}
        >
            {props.text}
        </Box>
    )
}

export default CustomBox
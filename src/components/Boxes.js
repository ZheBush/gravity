import {Box} from '@chakra-ui/react'

const CustomBox = (props) => {
    return (
        <Box
         pos = 'absolute'
         h = '28vh'
         w = '20vw'
         bg = {props.bgColor}
        >
        </Box>
    )
}

export default CustomBox
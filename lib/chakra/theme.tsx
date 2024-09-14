import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ChakraButtonStyle } from '@/components/Styles/ChakraButtonStyle'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ config,
    components: {
        Button: ChakraButtonStyle,
    }
 })

export default theme
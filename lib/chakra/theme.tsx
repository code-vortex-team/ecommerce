import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ChakraButtonStyle } from '@/components/Styles/ChakraButtonStyle'
import  BadgeStyleConfig  from '@/components/Styles/BadgeStyleConfig'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ config,
    components: {
        Button: ChakraButtonStyle,
        Badge : BadgeStyleConfig,
    }
 })

export default theme
import { chakraConfigInputStyle } from '@/components/styles/chakra.config.input'
import { extendTheme, Input, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ config, components:{
    Input: chakraConfigInputStyle
} })

export default theme
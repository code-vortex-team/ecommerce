import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import BadgeStyleConfig from '@/components/Style/BadgeConfigStyle'


const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ config, components : {Badge : BadgeStyleConfig} })

export default theme
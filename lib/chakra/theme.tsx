import BadgeStyleConfig from '@/components/Styles/BadgeConfigStyle'
import {extendTheme, type ThemeConfig, ThemeOverride} from '@chakra-ui/react'
import {color} from "@/components/colors";
import {ColorVariable, replaceDotsWithVar} from "@/components/styles/ChakraColorStyle";
import {Input} from "@/components/styles/ChakraInputStyle";
import {ChakraButtonStyle} from "@/components/styles/ChakraButtonStyle";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}


const ThemeConfig: ThemeOverride = {
    styles: {
        global: (props) => ({
            ...ColorVariable(props)
        }),
    },
    colors: {
        ...replaceDotsWithVar(color),
    },
    components: {
        Input,
        Badge: BadgeStyleConfig,
        Button: ChakraButtonStyle,

    }

}


const theme = extendTheme({config, ...ThemeConfig})


export default theme
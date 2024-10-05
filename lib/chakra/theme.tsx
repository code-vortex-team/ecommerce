import BadgeStyleConfig from '@/components/styles/BadgeConfigStyle'
import {extendTheme, type ThemeConfig, ThemeOverride} from '@chakra-ui/react'
import {color} from "@/components/colors";
import {ColorVariable, replaceDotsWithVar} from "@/components/styles/ChakraColorStyle";
import {Input} from "@/components/styles/ChakraInputStyle";
import {ChakraButtonStyle} from "@/components/styles/ChakraButtonStyle";
import {mode} from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}


const ThemeConfig: ThemeOverride = {
    styles: {
        global: (props) => ({
            ...ColorVariable(props),
            body: {
                backgroundColor: mode("#EEEFF1", "#0F0F10")(props)
            }
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
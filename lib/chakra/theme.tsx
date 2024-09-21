import {extendTheme, type ThemeConfig, ThemeOverride} from '@chakra-ui/react'
import {color} from "@/components/colors";
import {ColorVariable, replaceDotsWithVar} from "@/components/styles/ChakraColorStyle";

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

}


const theme = extendTheme({config, ...ThemeConfig})

export default theme
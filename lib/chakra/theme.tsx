import {extendTheme, type ThemeConfig, ThemeOverride} from '@chakra-ui/react'
import {color} from "@/components/colors";
import {ColorVariable, replaceDotsWithVar} from "@/components/styles/ChakraColorStyle";
import {Input} from "@/components/styles/ChakraInputStyle";

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
    components:{
        Input
    }

}


const theme = extendTheme({config, ...ThemeConfig})

export default theme
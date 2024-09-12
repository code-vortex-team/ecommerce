'use client'

import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme";

const ChakraProviderConfig = ({children}) => {

    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            {children}
        </ChakraProvider>
    )
}


export default ChakraProviderConfig;
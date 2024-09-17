'use client'

import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme";

const ChakraProviderConfig = ({children}) => {

    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}


export default ChakraProviderConfig;
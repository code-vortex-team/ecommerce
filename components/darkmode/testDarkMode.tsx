'use client'
import {Box, useColorMode} from "@chakra-ui/react";

const TestDarkMode = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    return (<>
        <Box h={"100px"} w={"200px"} bg={colorMode == "light" ? "red" : "blue"}>
            TestDarkMode
            <Box onClick={toggleColorMode}>click</Box>
        </Box>
    </>)
}

export default TestDarkMode;
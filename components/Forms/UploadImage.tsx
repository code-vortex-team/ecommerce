"use client"
import {Box, Center, Input, useColorModeValue} from "@chakra-ui/react";

const UploadImage = ({title = "آپلود عکس", ...reset}) => {

    return (<Box {...reset}>

        <label>
            <Input type={"file"} display={"none"}/>
            <Center
                borderRadius={"8px"}
                width={"100%"}
                bg={useColorModeValue("white", "#141516")}
                border={"1px dashed"}
                borderColor={useColorModeValue("#CED2D7", "#3e4042")}
                color={useColorModeValue("#58616c", "gray-400")}
                py={20}
            >
                {title}
            </Center>
        </label>
    </Box>)
}

export default UploadImage;
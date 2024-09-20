"use client"
import React from "react";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import {useRouter} from "next/navigation";

interface Interface {
    list:Array<{
        title:string
        pathName:string
        icon:React.ReactNode
    }>
}

const SideMenuMain:React.FC<Interface>= ({list}) =>{

    const {push} = useRouter()

    return (<Box  position={"relative"}>

        <Flex
            h={"100vh"}

            bg={useColorModeValue("white","black")}
            pt={"36px"}
            position={"fixed"}
            top={0} right={0}
            alignItems={"start"}
            gap={"64px"}
            flexDirection={"column"}
            sx={{
                _hover:{
                    ".title-menu": {
                        width:"150px"
                    }
                }
            }}
        >
            {list.map(item=>(<Flex key={item.pathName} alignItems={"center"}
                                   _hover={{
                                       bg:"rgba(219, 39, 119, 0.08)"
                                   }}
                                   w={"100%"}
                                   py={2}
                                   px={7}
                                   cursor={"pointer"}
                                   onClick={()=>{
                                       push(item.pathName)
                                   }}
            >
                <Box>
                    {item.icon}
                </Box>
                <Box transition={"all 0.6s"} className={"title-menu"} width={"0px"} whiteSpace={"nowrap"} overflow={"hidden"}>

                   <Box pr={3}>
                       {item.title}
                   </Box>
                </Box>


            </Flex>))}
        </Flex>

    </Box>)
}

export default SideMenuMain;
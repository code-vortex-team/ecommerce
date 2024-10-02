'use client';
import {Box, Flex, Menu, MenuButton, MenuItem, MenuList, useColorModeValue} from "@chakra-ui/react";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/navigation";
import {color} from "@/components/colors";

interface IDropDown {
    title: string;
    list: Array<{
        name: string;
        url: string;
    }>
}

const DropDown: React.FC<IDropDown> = ({title, list}) => {
    const router = useRouter();
    return (<>
        <Menu>
            {({isOpen}) => (
                <>
                    <MenuButton>
                        <Flex alignItems={"center"} gap={2}>
                            <Box sx={{
                                fontWeight: "400",
                                fontSize: "1rem",
                            }}>
                                {title}
                            </Box>
                            <Box transform={isOpen ? "rotate(180deg)" : ""} transition={"all 0.6s"}>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6666 0.999959L5.99996 5.66663L1.33329 0.999959"
                                          stroke={useColorModeValue("black", "white")}
                                          strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </Box>
                        </Flex>

                    </MenuButton>
                    <MenuList minWidth="10.5rem"
                              sx={{
                                  bgColor: color.base.side,
                                  borderColor: color.base.textFieldStroke,
                                  fontWeight: "400",
                                  fontSize: "1rem",
                                  button: {
                                      borderRadius: "0.25rem",
                                      fontWeight: "400",
                                      fontSize: "1rem",
                                      bg: color.base.side,
                                      color: color.text.primary,
                                      // _hover: {
                                      //     bgColor: color.primary.main, opacity: 0.08,
                                      //     color: color.primary.main,
                                      // },
                                  },
                              }}>

                        {list.map((item) => (
                            <MenuItem key={item.url} sx={{
                                width: "9.5625rem",
                                height: "2.3125rem",
                                paddingTop: "0.5rem",
                                paddingBottom: "0",
                                marginX: "0.5rem",
                                gap: "0.625rem",
                                borderRadius: "0.25rem 0 0 0",
                                opacity: 1,
                                transition: "all 0.3s",
                                _hover: {


                                    bgColor: useColorModeValue(color.primary.main, "rgba(219, 39, 119, 0.08)"),
                                    color: color.primary.main,
                                },
                            }} onClick={() => router.push(item.url)}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </MenuList>

                </>
            )}

        </Menu>
    </>)
}
export default DropDown;

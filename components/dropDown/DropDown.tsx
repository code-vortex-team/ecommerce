'use client';
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/menu";
import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/navigation";

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
                                fontSize: "16px",
                            }}>
                                {title}
                            </Box>
                            <Box transform={isOpen ? "rotate(180deg)" : ""} transition={"all 0.6s"}>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6666 0.999959L5.99996 5.66663L1.33329 0.999959" stroke="black"
                                          stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </Box>
                        </Flex>

                    </MenuButton>
                    <MenuList minWidth={123}
                              sx={{
                                  bgColor: "#151515",
                                  borderColor: "#3F4043",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                  button: {
                                      borderRadius: "4px",
                                      fontWeight: "400",
                                      fontSize: "16px",
                                      bg: "#151515",
                                      color: "#FFFFFF",
                                      _hover: {
                                          bgColor: "#3F4043",
                                          color: "#DB2777",
                                      },
                                  },
                              }}>

                        {list.map((item) => (
                            <MenuItem key={item.url} sx={{
                                width: "153px",
                                height: "37px",
                                paddingTop: "8px",
                                paddingBottom: "0px",
                                gap: "10px",
                                borderRadius: "4px 0 0 0",
                                opacity: 1,
                                transition: "all 0.3s",
                                _hover: {
                                    marginX: "8px",
                                    opacity: 1,
                                    bgColor: "#3F4043",
                                    color: "#DB2777",
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
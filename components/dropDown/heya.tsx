"use client";

import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/menu";
import {Box, useColorMode, useDisclosure} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import React from "react";

interface Interface {
    list: Array<{ name: string; url: string }>;
    title?: string; // Make title optional explicitly
}

const DropDown: React.FC<Interface> = ({list, title = "test"}) => {
    const {colorMode} = useColorMode();
    const router = useRouter();
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Menu>
            {({isOpen}) => (
                <>
                    <MenuButton isActive={isOpen} as={Box}>
                        {isOpen ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6666 9.99992L7.99996 5.33325L3.33329 9.99992"
                                      stroke={colorMode == "light" ? "black" : "white"}
                                      stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6666 5.99996L7.99996 10.6666L3.33329 5.99996"
                                      stroke={colorMode == "light" ? "black" : "white"}
                                      stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        )}
                    </MenuButton>
                    <MenuList
                        minWidth={123}
                        sx={{
                            bgColor: "#151515",
                            borderColor: "#3F4043",
                            fontWeight: "400",
                            fontSize: "16px",
                            button: {
                                borderRadius: "4px",
                                fontWeight: "400",
                                fontSize: "16px",
                                my: "9px",
                                bg: "#151515",
                                color: "#FFFFFF",
                                _hover: {
                                    bgColor: "#3F4043",
                                    color: "#DB2777",
                                },
                            },
                        }}
                    >
                        <MenuItem onClick={() => onClose()}>Download</MenuItem>
                        {list.map((item) => (
                            <MenuItem
                                key={item.url}
                                onClick={() => {
                                    router.push(item.url);
                                    onClose();
                                }}
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                    </MenuList>
                </>
            )}
        </Menu>
    );
};

export default DropDown;
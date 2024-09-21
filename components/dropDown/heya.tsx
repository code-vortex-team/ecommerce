'use client';
import React from 'react';
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/menu";
import {Box, useColorMode} from "@chakra-ui/react";
import {useRouter} from "next/router";

interface Interface {
    list: Array<{ name: string; url: string }>;
    title: string;
}

const DropDown: React.FC<Interface> = ({title, list}) => {
    const {colorMode} = useColorMode();
    const router = useRouter();

    return (
        <Menu>
            <MenuButton>
                <Box>
                    {title}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.6666 9.99992L7.99996 5.33325L3.33329 9.99992"
                            stroke={colorMode === "light" ? "black" : "white"}
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Box>
            </MenuButton>
            <MenuList minWidth="169px" bg="#151515">
                {list.map((item) => (
                    <MenuItem key={item.url} onClick={() => router.push(item.url)}>
                        {item.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default DropDown;

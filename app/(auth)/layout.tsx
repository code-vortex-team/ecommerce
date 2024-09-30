'use client';
import React from 'react';
import {Box, Grid, useColorMode} from "@chakra-ui/react";
import Image from "next/image";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    const {colorMode} = useColorMode();

    const imageSrc = colorMode === 'dark' ? "/images/loginDark.png" : "/images/loginLight.png";

    return (
        <Grid templateColumns="1fr 1fr" height="100vh">
            <Box p={5}>
                {children}
            </Box>
            <Box
                position="relative"
                sx={{
                    width: "65vw",
                    height: "100vh",
                    mt: "4rem",
                    ml: "4rem",
                    mr: "4rem",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                }}
            >

                <Image layout="fill" src={imageSrc} alt="login" objectFit="cover"/>
            </Box>
        </Grid>
    );
};

export default Layout;

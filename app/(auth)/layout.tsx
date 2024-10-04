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
            <Box p={5} pt={0} mt="4rem">
                {children}
            </Box>
            <Box
                position="relative"
                sx={{
                    width: "60vw",
                    height: "89vh",
                    mt: "4rem",
                    ml: "4rem",
                    mr: "4rem",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    img: {
                        width: "100%",
                        objectFit: "cover",
                        height: "100%",
                    }
                }}
            >

                <Image src={imageSrc} alt="login" objectFit="cover" width="1117" height="1073"/>
            </Box>
        </Grid>
    );
};

export default Layout;
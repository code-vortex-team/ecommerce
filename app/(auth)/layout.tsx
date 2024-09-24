import React from 'react';
import {Box, Grid} from "@chakra-ui/react";
import Image from "next/image";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <Grid templateColumns="1fr 1fr" height="100vh">
            <Box p={5}>
                {children}
            </Box>
            <Box position="relative">
                <Image layout="fill" src="/images/login.png" alt="login" objectFit="cover"/>
            </Box>
        </Grid>
    );
};

export default Layout;

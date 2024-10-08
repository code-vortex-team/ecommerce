import React from "react";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import { color } from "@/components/colors";

const LoadingPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={color.base.background}
    >
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor={color.primary.main}
          color='gray.200'
          size="xl"
        />
        <Text fontSize="xl" color={color.primary.main}>
          Loading...
        </Text>
      </VStack>
    </Box>
  );
};

export default LoadingPage;
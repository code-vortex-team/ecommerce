"use client";
import { Box, Text, useColorMode } from "@chakra-ui/react";

interface propsType {
  title: string;
  data: { title: string; value: number | string }[];
}

const ShopAddress = ({ title, data }: propsType) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box dir="rtl" width="28.594vw" h="fit-content">
      <Text
        color={colorMode === "light" ? "black" : "white"}
        mb="24px"
        fontSize="20px"
        fontWeight="500"
        lineHeight="32px"
      >
        {title}
      </Text>
      {data.map((item, index) => (
        <Box key={index} mb="16px">
          <Text
            display="inline"
            color="#DB2777"
            fontSize="16px"
            fontWeight="700"
            lineHeight="24px"
          >
            {item.title} :&nbsp;
          </Text>
          <Text
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            display="inline"
            color={colorMode === "light" ? "black" : "white"}
          >
            {item.value}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default ShopAddress;

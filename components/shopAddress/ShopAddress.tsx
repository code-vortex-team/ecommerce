"use client";
import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";

interface propsType {
  title: string;
  data: { title: string; value: number | string }[];
}

const ShopAddress = ({ title, data }: propsType) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box dir="rtl" width='28.594vw'>
      <Heading
        mb="24px"
        mr="1rem"
        as="h4"
        size="20px"
        fontWeight="500"
        lineHeight="32px"
      >
        {title}
      </Heading>
      <UnorderedList styleType='""'>
        {data.map((item, index) => (
          <ListItem key={index} mb="16px">
            <Text display="inline-block" color="#DB2777">
              {item.title} :&nbsp;
            </Text>
            <Text
              display="inline-block"
              color={colorMode === "light" ? "black" : "white"}
            >
              {item.value}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ShopAddress;

"use client";
import { Badge, Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { color } from "../colors";
import Like from "../like/Like";
import Link from "next/link";

interface productTypes {
  size: "small" | "large";
  name: string;
  price?: string;
  image?: string;
  _id : string
}

const Product: React.FC<productTypes> = ({ size, name, price, image, _id }) => {
  const productSize =
    size === "small"
      ? { maxWidth: "18.229vw", height: "33.6vh" }
      : { maxWidth: "21.042vw", height: "36.8vh" };

  return (
    <Flex {...productSize} gap="16px" flexDir="column">
      <Box height="88.1%" bg={color.grey._300} borderRadius="8px" pos="relative">
        <Image  src={image} alt={name} loading="eager" fit='cover' h='100%' w='100%' />
        <Box pos="absolute" top="12px" right="12px" w='16px' h='16px'>
          <Like></Like>
        </Box>
      </Box>

      <Flex as={Link} href={`/product/${_id}`} height="7.14%" justifyContent="space-between">
        <Text
          fontSize={size === "small" ? "16px" : "18px"}
          color={color.text.primary}
          fontWeight="400"
          lineHeight="24px"
        >
          {name}
        </Text>
        <Badge variant={size === "small" ? "pink" : "pinkLg"}>
          {price} تومان
        </Badge>
      </Flex>
    </Flex>
  );
};

export default Product;
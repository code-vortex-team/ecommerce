import {
  Badge,
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Like from "../like/Like";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { color } from "../colors";
import Link from "next/link";

interface ProductCardProps {
  imageAddress: string;
  _id: string;
  information: {
    name: string;
    price: string;
    content: string;
    category: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageAddress,
  information,
  _id,
}) => {
  return (
    <Flex
      width="384px"
      borderRadius="8px"
      flexDir="column"
      m="50px"
      bg={color.base.card}
    >
      <Box pos="relative">
        <Image
          height="170px"
          src={imageAddress}
          alt={information.name}
          objectFit="cover"
          width="384px"
          borderTopRadius="8px"
        />
        <Box pos="absolute" top="15px" right="15px">
          <Like></Like>
        </Box>
        <Box pos="absolute" bottom="15px" right="15px">
          <Badge variant="pinkLg" textTransform="none">
            {information.category}
          </Badge>
        </Box>
      </Box>

      <Box p="20px" h="177px">
        <Flex justifyContent="space-between" mb="8px">
          <Box>
            <Heading
              as="h5"
              fontSize="20px"
              fontWeight="400"
              color={color.text.primary}
            >
              {information.name}
            </Heading>
          </Box>
          <Box fontSize="16px" fontWeight="700">
            <Text color={color.primary.main}>{information.price} تومان</Text>
          </Box>
        </Flex>

        <Box
          h="48px"
          fontSize="16px"
          fontWeight="400"
          color={color.text.secondary}
        >
          <Text>{information.content}</Text>
        </Box>

        <Flex
          mt="12px"
          justifyContent="space-between"
          color={color.text.primary}
        >
          <Box>
            <Button
              variant="regularPinkButton"
              rightIcon={<FaArrowLeft />}
              fontSize="14px"
              fontWeight="400"
              as={Link}
              href={`product/${_id}`}
            >
              مشاهده بیشتر
            </Button>
          </Box>
          <Box
            fontSize="25px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor='pointer'
            // onClick={}
          >
            <AiOutlineShoppingCart />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductCard;

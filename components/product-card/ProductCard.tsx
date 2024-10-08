'use client'
import {
  Badge,
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import Like from "../like/Like";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { color } from "../colors";
import Link from "next/link";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addItem } from "@/lib/redux/features/Basket/basketSlice";

interface ProductCardProps {
  imageAddress: string;
  _id: string;
  name: string;
  price: string;
  content: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageAddress,
  _id,
  name,
  price,
  content,
  category,
}) => {


  const dispatch = useAppDispatch()
  const toast = useToast()

  return (
    <Flex width="20vw" borderRadius="8px" flexDir="column" bg={color.base.card}>
      <Box pos="relative">
        <Image
          height="17vh"
          src={imageAddress}
          alt={name}
          objectFit="cover"
          width="100%"
          borderTopRadius="8px"
        />
        <Box pos="absolute" top="15px" right="15px">
          <Like></Like>
        </Box>
        <Box pos="absolute" bottom="15px" right="15px">
          <Badge variant="pinkLg" textTransform="none">
            {category}
          </Badge>
        </Box>
      </Box>

      <Box p="20px" h="177px">
        <Flex
          justifyContent="space-between"
          mb="8px"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          <Box>
            <Heading
              as="h5"
              fontSize="20px"
              fontWeight="400"
              color={color.text.primary}
            >
              {name}
            </Heading>
          </Box>
          <Box fontSize="16px" fontWeight="700">
            <Text color={color.primary.main}>{price} تومان</Text>
          </Box>
        </Flex>

        <Box
          h="48px"
          fontSize="16px"
          fontWeight="400"
          color={color.text.secondary}
          noOfLines={2}
        >
          <Text>{content}</Text>
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
            onClick={()=>{dispatch(addItem({
              _id: _id,
              name: name,
              price: price,
              image: imageAddress
            })), toast({
              position: 'bottom-left',
              render: () => (
                <Box color='white' p={3} bg={color.primary.main}>
                  محصول با موفقیت به سبد خرید اضافه شد
                </Box>
              ),
            })}}
          >
            <AiOutlineShoppingCart />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductCard;

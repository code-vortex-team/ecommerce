"use client";
import { Box, Text, Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

interface propsType {
  payWay: string;
  address : string;
  prices: {
    subtotal: number;
    trackingFee: number;
    tax: number;
  };
}

const OrderDetails = ({payWay, address, prices}: propsType) => {

  const {colorMode, toggleColorMode} = useColorMode()

  return (

      <Flex justifyContent="space-between" borderRadius="8px" bg={colorMode === 'light' ? "#E6E8EB" : '#151515'}  h="17.6vh" alignItems='center' m='auto' mt='50px' dir="rtl" p='32px'>
        <Box h='fit-content' w='13.021vw'>
          <Heading color={colorMode === 'light' ? 'black' : "#FFFFFF"} as='h2' fontSize='24px' lineHeight='32px' fontWeight='500' display='block' mb='16px'>روش پرداخت</Heading>
          <Text display='inline' color={colorMode === 'light' ? "#'#58616C'" : '##9CA3AF'} fontSize='16px' lineHeight='24px' fontWeight='700'>روش :</Text>
          <Text display='inline' color={colorMode === 'light' ? 'black' : "#FFFFFF"} fontSize='16px' lineHeight='24px' fontWeight='400' mr='8px'>{payWay}</Text>
        </Box>

        <Box h='fit-content' w='18.229vw'>
          <Heading color={colorMode === 'light' ? 'black' : "#FFFFFF"} as='h2' fontSize='24px' lineHeight='32px' mb='16px' fontWeight='500' display='block'>روش پرداخت</Heading>
          <Text display='inline' color={colorMode === 'light' ? "#'#58616C'" : '##9CA3AF'} fontSize='16px' lineHeight='24px' fontWeight='700'>آدرس :</Text>
          <Text display='inline' color={colorMode === 'light' ? 'black' : "#FFFFFF"} fontSize='16px' lineHeight='24px' fontWeight='400' mr='8px'>{address}</Text>
        </Box>

        <Box h='fit-content' w='15.625vw'>
          <Box w='100%' justifyContent='space-between' display='flex' gap='4px'>
            <Text fontSize='16px' color={colorMode === 'light' ? "#'#58616C'" : '##9CA3AF'} fontWeight='700' align='right' lineHeight='24px'>قیمت محصولات :</Text>
            <Text fontSize='16px' fontWeight='400' lineHeight='24px' color={colorMode === 'light' ? 'black' : "#FFFFFF"} >{prices.subtotal.toLocaleString()} تومان</Text>
          </Box>

          <Box w='100%' justifyContent='space-between' display='flex' gap='4px'>
            <Text fontSize='16px' color={colorMode === 'light' ? "#'#58616C'" : '##9CA3AF'} fontWeight='700' align='right' lineHeight='24px'>هزینه ارسال :</Text>
            <Text fontSize='16px' fontWeight='400' lineHeight='24px' color={colorMode === 'light' ? 'black' : "#FFFFFF"} >{prices.trackingFee.toLocaleString()} تومان</Text>
          </Box>

          <Box w='100%' justifyContent='space-between' display='flex' gap='4px'>
            <Text fontSize='16px' color={colorMode === 'light' ? "#'#58616C'" : '##9CA3AF'} fontWeight='700' align='right' lineHeight='24px'>مالیات :</Text>
            <Text fontSize='16px' fontWeight='400' lineHeight='24px' color={colorMode === 'light' ? 'black' : "#FFFFFF"}>{prices.tax.toLocaleString()} تومان</Text>
          </Box>

          <Box w='100%' justifyContent='space-between' display='flex' gap='4px'>
            <Text fontSize='16px' color={colorMode === 'light' ? "#'#58616C'" : '##9CA3AF'} fontWeight='700' align='right' lineHeight='24px'>مبلغ نهایی :</Text>
            <Text fontSize='16px' fontWeight='400' lineHeight='24px' color={colorMode === 'light' ? 'black' : "#FFFFFF"}>{(prices.subtotal+prices.trackingFee+prices.tax).toLocaleString()} تومان</Text>
          </Box>
        </Box>
      </Flex>

  );
};

export default OrderDetails;
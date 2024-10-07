import {Box, Button, HStack, Text, VStack} from "@chakra-ui/react";
import {color} from "@/components/colors";
import Image from "next/image"
import React from "react";
import {Product} from "@/types/product"
import {convertToJalali} from "@/components/utility";
import {useRouter} from "next/navigation";


const Product: React.FC<Product> = ({image, _id, price, createdAt, description, name}) => {

    const {push} = useRouter()
    return (<Box bgColor={color.base.card} display={"flex"} p={".5rem"} mb={2} borderRadius={3}>
        <Box
            width={160} height={160}
            sx={{
                img: {
                    width: "full",
                    height: "full",
                    objectFit: "cover"
                }
            }}
        >
            <Image src={`${image}`} alt={name} width={160}
                   height={160}/>
        </Box>
        <VStack flex={1} height={"auto"} justifyContent={"space-between"} p={"1rem"}>
            <HStack alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
                <Text as="h2" color={color.text.primary} fontSize={20} fontWeight={500}>
                    {name}
                </Text>

                <Text color={color.text.secondary} fontSize={16} fontWeight={400}>
                    {convertToJalali(createdAt)}
                </Text>

            </HStack>
            <Box width={"100%"} color={color.text.secondary} fontSize={14} fontWeight={400}>
                {description}
            </Box>

            <HStack alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
                <Button

                    onClick={() => push(`/admin/product/edit/${_id}`)}
                    variant={"regularPinkButton"} rightIcon={
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <Box as="path" d="M13 5H1M1 5L5 1M1 5L5 9"
                             stroke={color.primary.lighter}
                             strokeWidth="2"
                             strokeLinecap="round"
                             strokeLinejoin="round"/>
                    </svg>
                }>
                    مشاهده بیشتر
                </Button>
                <Text color={color.text.primary} fontSize={16} fontWeight={400}>
                    {price}
                    {" تومان "}
                </Text>

            </HStack>
        </VStack>
    </Box>)
}

export default Product;
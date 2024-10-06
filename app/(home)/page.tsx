"use client"
import Carousel from "@/components/carousel/Carousel";
import { color } from "@/components/colors";
import Product from "@/components/product/Product";
import { ProductsApi } from "@/lib/openapi/apiClient";
import { Box, Button, Container, Flex, Grid, Text, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const productsInfo = [
    {
        size: "small",
        name: "Asus ROG Zephyrus",
        price: "10000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
    {
        size: "small",
        name: "Asus ROG Zephyrus 2",
        price: "11000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
    {
        size: "small",
        name: "Asus ROG Zephyrus 3",
        price: "12000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
    {
        size: "small",
        name: "Asus ROG Zephyrus 4",
        price: "13000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
    {
        size: "small",
        name: "Asus ROG Zephyrus",
        price: "12000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
    {
        size: "small",
        name: "Asus ROG Zephyrus",
        price: "12000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
    {
        size: "small",
        name: "Asus ROG Zephyrus",
        price: "12000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
    {
        size: "small",
        name: "Asus ROG Zephyrus",
        price: "12000",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/c21eaca05b81008db9ac584d53a650e9aad86a24_1704788292.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        _id: "54653232",
    },
];

export default async function Home() {

  const [data, setData] = useState([])
  useEffect(() => {
      new ProductsApi().apiProductsAllproductsGet().then((r: any) => {
        setData(r.data)
      })

  }, [])
  return (
    <main>
      <Box width={"100%"} px={1} paddingEnd={10} margin={"0 auto"} py={"1rem"}>
        {/* <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
          <Box></Box>
        </Grid> */}

        <SimpleGrid columns={{md: 12, base: 6}} spacing={10}>
          <GridItem colSpan={6}>
            <Box>
            
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {data.slice(0, 4).map((product, index) => (
                  <Product
                    key={index}
                    size="small"
                    name={product?.name}
                    price={product?.price}
                    _id={product?._id}
                    image={product?.image}
                  />
                ))}
              </Grid>
            </Box>
          </GridItem>
          <GridItem colSpan={6}>
            <Box >
              <Carousel products={data.slice(0, 4)} />
            </Box>
          </GridItem>
        </SimpleGrid>

                <Box
                    my={12}
                    justifyContent={"space-between"}
                    display={"flex"}
                    flexDirection={"row"}
                >
                    <Text fontSize="30px">محصولات ویژه</Text>
                    <Button
                        bg={color.primary.main}
                        color={color.text.button}
                        borderRadius={"full"}
                        padding={"8px 32px"}
                        _hover={{ bg: color.primary.light }}
                    >
                        فروشگاه
                    </Button>
                </Box>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {data.map((product, index) => (
            <Product
              key={index}
              size="large"
              name={product?.name}
              price={product?.price}
              _id={product?._id}
              image={product?.image}
            />
          ))}
        </Grid>
      </Box>
    </main>
  );
}

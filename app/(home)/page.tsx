import Carousel from "@/components/carousel/Carousel";
import { color } from "@/components/colors";
import Product from "@/components/product/Product";
import { Box, Button, Container, Flex, Grid, Text } from "@chakra-ui/react";

const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const productsInfo = [
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

export default function Home() {
    return (
        <main>
            <Container maxW="7xl" py={8}>
                <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        {productsInfo.slice(0, 4).map((product, index) => (
                            <Product
                                key={index}
                                size="small"
                                name={product.name}
                                price={product.price}
                                _id={product._id}
                                image={product.image}
                            />
                        ))}
                    </Grid>
                    <Box>
                        <Carousel images={images} />
                    </Box>
                </Grid>

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
                    {productsInfo.map((product, index) => (
                        <Product
                            key={index}
                            size="small"
                            name={product.name}
                            price={product.price}
                            _id={product._id}
                            image={product.image}
                        />
                    ))}
                </Grid>
            </Container>
        </main>
    );
}

'use client'
import { color } from "@/components/colors";
import FilterProducts from "@/components/filterCategory/FilterCategory";
import ProductCard from "@/components/product-card/ProductCard";
import { ProductsApi } from "@/lib/openapi/apiClient";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

interface itemProps {
  image: string;
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
}

const Page = async () => {
  const res: any = await new ProductsApi().apiProductsAllproductsGet();
  const products = res.data;
  return (
    <Box>
      <Container display="flex" m="32px" gap="64px">
        <Box>
          <Flex
            flexDir="column"
            w="13.75vw"
            gap="40px"
            h="81vh"
            bg={color.base.side}
          >
            <Box>
              <FilterProducts
                title={"فیلتر برند"}
                categories={[
                  { name: "Apple", active: false },
                  { name: "microsoft", active: false },
                ]}
              />
            </Box>
            <Box fontSize="16px">
              <FilterProducts title={"فیلتر قیمت"} categories={[]} />
              <Box p="20px">
                <Input fontSize="14px" placeholder="قیمت را وارد نمایید" />
              </Box>
              <Box pr="20px" pl="20px">
                <Button w="100%" variant="outline">
                  حذف فیلتر ها
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap="24px" w="100%">
          {products.map((item: itemProps) => {
            return (
              <GridItem key={item._id}>
                <ProductCard
                  imageAddress={item.image}
                  _id={item._id}
                  name={item.name}
                  price={item.price}
                  content={item.description}
                  category={'No category'}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Page;

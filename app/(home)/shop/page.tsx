"use client";
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
import { useEffect, useState } from "react";

interface itemProps {
  image: string;
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
}

const Page = () => {
  const [filter, setFilter] = useState<{
    categories: string[];
    price: string[];
  }>({
    categories: [],
    price: [],
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const res: any = new ProductsApi()
      .apiProductsFilteredPost(filter)
      .then((res: any) => {
        setProducts(res.data);
      });
  }, [filter]);

  const handelPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setTimeout(() => {
      setFilter((prevFilter) => ({ ...prevFilter, price: ["0", value] }));
    }, 500);
  };

  return (
    <Box>
      <Container display="flex" m="32px" gap="64px">
        <Box>
          <Flex
            flexDir="column"
            w="13.75vw"
            gap="40px"
            h="81vh"
            borderTopRadius="20px"
            bg={color.base.side}
            padding='15px'
          >
            <Box>
              <FilterProducts
                title={"فیلتر برند"}
                categories={[
                  {
                    name: "Apple",
                    active: false,
                    _id: "66f945636e4773b72e1d612f",
                  },
                  {
                    name: "Samsung",
                    active: false,
                    _id: "66f92780588ce18fe9110bdc",
                  },
                ]}
                onchange={(updateCategories) => {
                  setFilter((prevFilter) => ({
                    ...prevFilter,
                    categories: updateCategories
                      .filter((cat) => cat.active)
                      .map((cat) => cat._id),
                  }));
                }}
              />
            </Box>
            <Box fontSize="16px">
              <FilterProducts title={"فیلتر قیمت"} categories={[]} />
              <Box p="20px">
                <Input
                  fontSize="14px"
                  placeholder="قیمت را وارد نمایید"
                  onChange={handelPriceChange}
                />
              </Box>
              <Box pr="20px" pl="20px">
                <Button
                  w="100%"
                  variant="outline"
                  onClick={() => setFilter({ categories: [], price: [] })}
                >
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
                  category={item.category}
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

'use client'
import { color } from "@/components/colors";
import FilterProducts from "@/components/filterCategory/FilterCategory";
import ProductCard from "@/components/product-card/ProductCard";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

//  imageAddress: string;
// _id: string;
// information: {
//   name: string;
//   price: string;
//   content: string;
//   category: string;

const moreInfo = {
  imageAddress:
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDak01bFZZM0E3ZWhua1Y4cWFLVUtGUDhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXRPVnMvK0xjdWJSTGNZak9kenU3ZVZmY1BIbXdKdTZHQkJxQjU1d2E5aWtnPT0=&traceId=1",
  id: "1654adsf561fq654fq",
};

const information = {
  name: "Apple iphone 14",
  price: "100,000",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, accusantium.",
  category: "Apple",
};

const Page = async () => {
  // const res = new api

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
          <GridItem>
            <ProductCard
              information={information}
              _id={moreInfo.id}
              imageAddress={moreInfo.imageAddress}
            />
          </GridItem>
          <GridItem>
            <ProductCard
              information={information}
              _id={moreInfo.id}
              imageAddress={moreInfo.imageAddress}
            />
          </GridItem>
          <GridItem>
            <ProductCard
              information={information}
              _id={moreInfo.id}
              imageAddress={moreInfo.imageAddress}
            />
          </GridItem>
          <GridItem>
            <ProductCard
              information={information}
              _id={moreInfo.id}
              imageAddress={moreInfo.imageAddress}
            />
          </GridItem>
          <GridItem>
            <ProductCard
              information={information}
              _id={moreInfo.id}
              imageAddress={moreInfo.imageAddress}
            />
          </GridItem>
          <GridItem>
            <ProductCard
              information={information}
              _id={moreInfo.id}
              imageAddress={moreInfo.imageAddress}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page;

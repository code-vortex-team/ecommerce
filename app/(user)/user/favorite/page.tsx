import Product from "@/components/product/Product";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const Page = async () => {
  const imageSource =
    "https://media.wired.com/photos/60a7edc7a44d38b5b31ca92b/master/w_1920,c_limit/Gear-Review-iPad-Pro-Top.jpg";
  return (
    <Box pr="150px" pt="32px">
      <Grid templateColumns="repeat(3, 1fr)" gap="16px">
        <GridItem>
          <Product
            size={"large"}
            name={"Apple iPad Pro 12.9-inch"}
            _id={"1894fads841dfsa4"}
            image={imageSource}
            price="10.000"
          />
        </GridItem>
        <GridItem>
          <Product
            size={"large"}
            name={"Apple iPad Pro 12.9-inch"}
            _id={"1894fads841dfsa4"}
            image={imageSource}
            price="10.000"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Page;

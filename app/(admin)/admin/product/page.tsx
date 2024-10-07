"use client"
import {ProductsApi} from "@/lib/openapi/generated-client";
import {Product} from "@/types/product";
import {Container, GridItem, SimpleGrid} from "@chakra-ui/react";
import ProductCard from "@/components/UI/product/product";

const Page = async () => {
    const res: any = await new ProductsApi().apiProductsAllproductsGet()
    const data: Array<Product> = res.data

    return (<>
        <Container maxW={"100%"} px={{base: 3, md: "150px"}} pt={10}>
            <SimpleGrid columns={{base: 1, md: 2}} gap={3}>
                {data.map((item, index) => (
                    <GridItem key={index}>
                        <ProductCard {...item}/>
                    </GridItem>
                ))}
            </SimpleGrid>
        </Container>

    </>)
}

export default Page;
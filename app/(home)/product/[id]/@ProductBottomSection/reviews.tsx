import {Box, Flex, GridItem, HStack, SimpleGrid, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {ProductsApi} from "@/lib/openapi/generated-client";
import {color} from "@/components/colors";
import {timeAgo} from "@/components/utility";
import Rating from "@/components/Rating/Rating";


const Related = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        new ProductsApi().apiProductsIdGet(id.toString()).then((r: any) => {
            setData(r.data.reviews)
        })
    }, []);

    return (<>

        {/*"name": "user",*/}
        {/*"rating": 2,*/}
        {/*"comment": "recfrefce",*/}
        {/*"user": "67017ff640b282bd92cfda4e",*/}
        {/*"_id": "6702491f40b282bd92cfe1f3",*/}
        {/*"createdAt": "2024-10-06T08:23:59.965Z",*/}
        {/*"updatedAt": "2024-10-06T08:23:59.965Z"*/}
        <SimpleGrid gap={3} columns={1}>
            {data.length == 0 && <Box bg={color.base.side} p={"16px"} borderRadius={6} textAlign="center">
                <Text color={color.text.primary}>
                    هیچ نظری برای این محصول ثبت نشده است
                </Text>
            </Box>}
            {
                data.map(item => <GridItem bg={color.base.side} p={"16px"} borderRadius={6} display={"flex"}
                                           flexDirection="column" gap={3}>
                    <HStack justifyContent={"space-between"}>
                        <Box color={color.text.secondary} fontSize={14} fontWeight={400}>
                            {item.name}
                        </Box>
                        <Box color={color.text.secondary} fontSize={12} fontWeight={400}>
                            {timeAgo(item.createdAt)}
                        </Box>
                    </HStack>
                    <Box>
                        {item.comment}
                    </Box>
                    <Flex dir={"rtl"}>
                        <Rating defaultRating={item.rating} maxRating={5}/>
                    </Flex>

                </GridItem>)
            }


        </SimpleGrid>
    </>)
}

export default Related;
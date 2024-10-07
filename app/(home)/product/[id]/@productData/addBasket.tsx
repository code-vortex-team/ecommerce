"use client"
import {Box, Button, GridItem, Select, SimpleGrid, Text, useToast} from "@chakra-ui/react";
import {color} from "@/components/colors";
import Rating from "@/components/Rating/Rating";
import {useDispatch} from "react-redux";
import {addItem} from "@/lib/redux/features/Basket/basketSlice";
import {useState} from "react";

const AddBasket = ({data}) => {

    const [count, setCount] = useState(1)

    const dispatch = useDispatch()
    const toast = useToast()
    const submit = () => {
        for (let i = 0; i < count; i++) {
            dispatch(addItem(data))
        }
        toast({
            title: 'سبد خرید',
            description: `آیتم مورد نظر به سبد خرید اضافه شد`,
            status: 'info',
            duration: 3000,
            isClosable: false,
        })
    }
    return (<>
        <SimpleGrid columns={2} gap={5} py={50}>
            <GridItem>
                <Box display={"flex"} alignItems={"center"}>
                    <Text color={color.text.primary} fontSize={16} fontWeight={400}>
                        {data?.numReviews}
                        {" نظر "}
                    </Text>
                    <Box pr={3}>
                        <Rating defaultRating={data?.rating} maxRating={5}/>
                    </Box>
                </Box>
            </GridItem>
            <GridItem>
                <Box>
                    <Box display={"inline-block"} dir={"ltr"}>
                        <Select width="96px" onChange={e => setCount(parseInt(e.target.value))}>
                            <option value={1}>
                                1
                            </option>
                            <option value={2}>
                                2
                            </option>
                            <option value={3}>
                                3
                            </option>
                        </Select>
                    </Box>
                </Box>
            </GridItem>
        </SimpleGrid>
        <Button variant={"regularPinkButton"} onClick={submit}>
            افزودن به سبد خرید
        </Button>
    </>)
}

export default AddBasket;
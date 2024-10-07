"use client"
import {Box, Button, Container, Flex, GridItem, SimpleGrid} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "@/lib/redux/hooks";
import Image from "next/image";
import {color} from "@/components/colors";
import {formatToToman} from "@/components/utility";
import NumberInput from "@/components/numberInput/numberInput";
import {addItem, clearItem, removeItem} from "@/lib/redux/features/Basket/basketSlice";
import Empty from "@/components/empty/empty";
import {useRouter} from "next/navigation";

const Page = () => {

    const data = useAppSelector(s => s.basket)
    const dispatch = useAppDispatch()

    const {push} = useRouter()

    return (<Container maxW={"100%"} p={{base: 0, md: "100px"}} pt={200}>

        {data?.list?.length === 0 && <Empty/>}
        <SimpleGrid gap={3}>
            {data?.list?.map((item, index) => (
                <GridItem key={index} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Flex gap={4}>
                        <Box sx={{
                            img: {
                                borderRadius: "3px"
                            }
                        }}>
                            <Image src={item.image} alt={item.title} width={88} height={88}/>
                        </Box>
                        <Box>
                            <Box color={color.primary.main} fontWeight={400} fontSize={16}>
                                {item.name}
                            </Box>
                            <Box color={color.text.primary} fontWeight={400} fontSize={16}>
                                برند
                            </Box>
                            <Box color={color.text.primary} fontWeight={700} fontSize={16}>
                                {formatToToman(item.price)}
                            </Box>
                        </Box>
                    </Flex>
                    <Flex alignItems={"center"} gap={3}>
                        <NumberInput defaultValue={item.count} onChange={(e, type) => {
                            if (type === "increase") {
                                dispatch(addItem({
                                    ...item
                                }))
                            } else {
                                dispatch(removeItem({
                                    ...item
                                }))
                            }
                        }}/>

                        <svg

                            onClick={() => {
                                dispatch(clearItem(item))
                            }}
                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Box as="path"
                                 d="M14.5 1.00001H10.75L10.4563 0.41563C10.394 0.290697 10.2982 0.185606 10.1795 0.11218C10.0608 0.0387537 9.92395 -9.46239e-05 9.78438 5.47897e-06H6.2125C6.07324 -0.00052985 5.93665 0.0381736 5.81838 0.111682C5.7001 0.18519 5.60492 0.290529 5.54375 0.41563L5.25 1.00001H1.5C1.36739 1.00001 1.24021 1.05268 1.14645 1.14645C1.05268 1.24022 1 1.3674 1 1.50001V2.50001C1 2.63261 1.05268 2.75979 1.14645 2.85356C1.24021 2.94733 1.36739 3.00001 1.5 3.00001H14.5C14.6326 3.00001 14.7598 2.94733 14.8536 2.85356C14.9473 2.75979 15 2.63261 15 2.50001V1.50001C15 1.3674 14.9473 1.24022 14.8536 1.14645C14.7598 1.05268 14.6326 1.00001 14.5 1.00001ZM2.6625 14.5938C2.68635 14.9746 2.85443 15.332 3.13252 15.5932C3.41061 15.8545 3.77781 16 4.15937 16H11.8406C12.2222 16 12.5894 15.8545 12.8675 15.5932C13.1456 15.332 13.3137 14.9746 13.3375 14.5938L14 4.00001H2L2.6625 14.5938Z"
                                 fill={color.error.main}/>
                        </svg>


                    </Flex>
                </GridItem>
            ))}

        </SimpleGrid>

        <Box display={"flex"} flexDirection="column" gap={3} mt={100}>
            <Box>
                تعداد محصول ({data.list.length})
            </Box>
            <Box>
                تعداد کل ({data.list.reduce((a, b) => a + b.count, 0)})
            </Box>
            <Box>

                {formatToToman(data.totalPrice)}

                {" تومان "}
            </Box>
        </Box>

        <SimpleGrid columns={{base: 1, md: 2}} pt={5}>
            <GridItem>
                <Button variant={"roundedPinkButton"} maxW={"100%"} minWidth={"100%"}
                        isDisabled={data.list.length == 0}
                        onClick={() => {
                            push("/user/cart/progress")
                        }}
                >
                    تکمیل خرید
                </Button>
            </GridItem>
        </SimpleGrid>

    </Container>)
}

export default Page;
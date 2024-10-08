import {Box, Container, Flex, GridItem, HStack, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {CategoryApi, ProductsApi} from "@/lib/openapi/generated-client";
import Image from "next/image"
import {color} from "@/components/colors";
import {formatToToman, timeAgo} from "@/components/utility";
import AddBasket from "@/app/(home)/product/[id]/@productData/addBasket";

const Page = async ({params: {id}}) => {


    const res = await new ProductsApi().apiProductsIdGet(id);
    const data: any = res.data;

    const categoryRes = await new CategoryApi().apiCategoryIdGet(data.category)
    const categoryData: any = categoryRes.data


    return (
        <Container maxW={"100%"} pt={70}>
            <SimpleGrid columns={{md: 12, base: 6}} spacing={55}>
                <GridItem colSpan={6}>
                    <Box sx={{
                        img: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        },
                        borderRadius: "8px",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"


                    }}>
                        <Image alt={data.name} src={data.image} width={750} height={750}/>
                    </Box>
                </GridItem>
                <GridItem colSpan={6}>
                    <VStack gap={30} alignItems={"flex-start"}>
                        <Text fontWeight={500} fontSize={24} color={color.text.primary}>{data.name}</Text>
                        <Text fontWeight={400} minHeight={"50px"} fontSize={16}
                              color={color.text.primary}>{data.description}

                        </Text>
                        <Text fontWeight={500} fontSize={48}
                              color={color.text.primary}> {formatToToman(data.price)} تومان</Text>
                    </VStack>


                    <Flex flexDirection="column" gap={5} pt={71}
                          sx={{
                              strong: {
                                  px: 3
                              }
                          }}
                    >
                        <SimpleGrid columns={2} gap={5}>
                            <GridItem>
                                <HStack>
                                    <Box>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Box as="path"
                                                 d="M7.70268 1.23357L5.88879 4.91134L1.83046 5.50301C1.10268 5.60857 0.811016 6.50579 1.33879 7.01968L4.2749 9.88079L3.58046 13.9225C3.45546 14.653 4.2249 15.2002 4.86935 14.8586L8.49991 12.9502L12.1305 14.8586C12.7749 15.1975 13.5443 14.653 13.4193 13.9225L12.7249 9.88079L15.661 7.01968C16.1888 6.50579 15.8971 5.60857 15.1693 5.50301L11.111 4.91134L9.29713 1.23357C8.97213 0.578011 8.03046 0.569677 7.70268 1.23357Z"
                                                 fill={color.text.primary}/>
                                        </svg>
                                    </Box>
                                    <Flex color={color.text.secondary}>
                                        امتیاز :
                                        <Text as="strong" color={color.text.primary}>
                                            {data.rating}
                                        </Text>
                                    </Flex>
                                </HStack>
                            </GridItem>
                            <GridItem>
                                <HStack>
                                    <Box>

                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Box as="path"
                                                 d="M16.1364 4.2812L14.4507 1.59029C14.3 1.34874 14.0325 1.20068 13.7468 1.20068H3.25325C2.96754 1.20068 2.7 1.34874 2.54935 1.59029L0.863639 4.2812C-0.00649071 5.67081 0.764938 7.60328 2.39091 7.82406C2.5078 7.83964 2.62728 7.84744 2.74676 7.84744C3.51559 7.84744 4.19611 7.50977 4.66364 6.9877C5.13117 7.50977 5.81429 7.84744 6.58052 7.84744C7.34935 7.84744 8.02987 7.50977 8.49741 6.9877C8.96494 7.50977 9.64806 7.84744 10.4143 7.84744C11.1831 7.84744 11.8636 7.50977 12.3312 6.9877C12.8013 7.50977 13.4818 7.84744 14.2481 7.84744C14.3701 7.84744 14.487 7.83964 14.6039 7.82406C16.2351 7.60588 17.0091 5.67341 16.1364 4.2812ZM14.2533 8.6812C13.9935 8.6812 13.7364 8.64224 13.487 8.5825V11.1747H3.51299V8.5825C3.26364 8.63965 3.0065 8.6812 2.74676 8.6812C2.59091 8.6812 2.43247 8.67081 2.27922 8.65003C2.13377 8.62925 1.99091 8.59549 1.85325 8.55653V13.6682C1.85325 14.128 2.22468 14.4994 2.68442 14.4994H14.3208C14.7805 14.4994 15.152 14.128 15.152 13.6682V8.55653C15.0117 8.59809 14.8714 8.63185 14.726 8.65003C14.5675 8.67081 14.4117 8.6812 14.2533 8.6812Z"
                                                 fill={color.text.primary}/>
                                        </svg>

                                    </Box>
                                    <Flex color={color.text.secondary}>
                                        برند :


                                        <Text as="strong" color={color.text.primary}>
                                            {categoryData.name || "بدون دسته بندی"}
                                        </Text>
                                    </Flex>
                                </HStack>
                            </GridItem>
                        </SimpleGrid>

                        <SimpleGrid columns={2} gap={5}>
                            <GridItem>
                                <HStack>
                                    <Box>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Box as="path"
                                                 d="M15.17 8.60899L16.4831 2.83121C16.5779 2.41404 16.2609 2.01679 15.8331 2.01679H4.92244L4.66783 0.772069C4.60439 0.461819 4.33139 0.239014 4.01469 0.239014H1.16667C0.798472 0.239014 0.5 0.537486 0.5 0.90568V1.35012C0.5 1.71832 0.798472 2.01679 1.16667 2.01679H3.10786L5.0592 11.5567C4.59236 11.8251 4.27778 12.3285 4.27778 12.9057C4.27778 13.7648 4.97422 14.4612 5.83333 14.4612C6.69245 14.4612 7.38889 13.7648 7.38889 12.9057C7.38889 12.4703 7.20981 12.0769 6.92156 11.7946H12.7451C12.4569 12.0769 12.2778 12.4703 12.2778 12.9057C12.2778 13.7648 12.9742 14.4612 13.8333 14.4612C14.6924 14.4612 15.3889 13.7648 15.3889 12.9057C15.3889 12.2898 15.0309 11.7576 14.5117 11.5055L14.6649 10.8312C14.7598 10.414 14.4427 10.0168 14.0149 10.0168H6.55881L6.377 9.1279H14.5199C14.8312 9.1279 15.101 8.91251 15.17 8.60899Z"
                                                 fill={color.text.primary}/>
                                        </svg>
                                    </Box>
                                    <Flex color={color.text.secondary}>
                                        تعداد :
                                        <Text as="strong" color={color.text.primary}>
                                            {data?.quantity}
                                        </Text>
                                    </Flex>
                                </HStack>
                            </GridItem>
                            <GridItem>
                                <HStack>
                                    <Box>


                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Box as="path"
                                                 d="M8.5 0.600098C4.21875 0.600098 0.75 4.06885 0.75 8.3501C0.75 12.6313 4.21875 16.1001 8.5 16.1001C12.7812 16.1001 16.25 12.6313 16.25 8.3501C16.25 4.06885 12.7812 0.600098 8.5 0.600098ZM11.3903 10.3813L10.7653 11.1626C10.7243 11.2139 10.6736 11.2566 10.6161 11.2883C10.5585 11.3199 10.4954 11.34 10.4301 11.3472C10.3648 11.3545 10.2988 11.3488 10.2357 11.3305C10.1726 11.3123 10.1138 11.2817 10.0625 11.2407L7.96875 9.68697C7.82246 9.56984 7.70437 9.42132 7.62323 9.25239C7.54209 9.08346 7.49998 8.89844 7.5 8.71103V3.8501C7.5 3.71749 7.55268 3.59031 7.64645 3.49654C7.74021 3.40278 7.86739 3.3501 8 3.3501H9C9.13261 3.3501 9.25979 3.40278 9.35355 3.49654C9.44732 3.59031 9.5 3.71749 9.5 3.8501V8.3501L11.3125 9.67822C11.3638 9.71926 11.4065 9.77001 11.4382 9.82757C11.4699 9.88513 11.4899 9.94836 11.4971 10.0137C11.5043 10.079 11.4986 10.145 11.4803 10.2081C11.462 10.2712 11.4314 10.3301 11.3903 10.3813Z"
                                                 fill={color.text.primary}/>
                                        </svg>

                                    </Box>
                                    <Flex color={color.text.secondary}>
                                        زمان بروزرسانی :
                                        <Text as="strong" color={color.text.primary}>
                                            {timeAgo(data.createdAt)}
                                        </Text>
                                    </Flex>
                                </HStack>

                            </GridItem>
                        </SimpleGrid>
                        <SimpleGrid columns={2} gap={5}>
                            <GridItem>
                                <HStack>
                                    <Box>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Box as="path"
                                                 d="M16.4219 5.66865L14.8406 0.924902C14.6375 0.312402 14.0656 -0.100098 13.4187
                                    -0.100098H9V5.8999H16.4594C16.4469 5.82178 16.4469 5.74365 16.4219 5.66865ZM8
                                    -0.100098H3.58125C2.93437 -0.100098 2.3625 0.312402 2.15937 0.924902L0.578125
                                    5.66865C0.553125 5.74365 0.553125 5.82178 0.540625 5.8999H8V-0.100098ZM0.5
                                    6.8999V14.3999C0.5 15.228 1.17188 15.8999 2 15.8999H15C15.8281 15.8999 16.5 15.228
                                    16.5 14.3999V6.8999H0.5Z"
                                                 fill={color.text.primary}/>
                                        </svg>
                                    </Box>
                                    <Flex color={color.text.secondary}>
                                        موجودی :
                                        <Text as="strong" color={color.text.primary}>
                                            {data?.countInStock}
                                        </Text>
                                    </Flex>
                                </HStack>

                            </GridItem>
                            <GridItem>
                                <HStack>
                                    <Box>

                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Box as="path"
                                                 d="M6.70268 1.28337L4.88879 4.96115L0.83046 5.55282C0.102682 5.65837 -0.188984 6.55559 0.338794 7.06948L3.2749 9.93059L2.58046 13.9723C2.45546 14.7028 3.2249 15.25 3.86935 14.9084L7.49991 13L11.1305 14.9084C11.7749 15.2473 12.5443 14.7028 12.4193 13.9723L11.7249 9.93059L14.661 7.06948C15.1888 6.55559 14.8971 5.65837 14.1693 5.55282L10.111 4.96115L8.29713 1.28337C7.97213 0.627815 7.03046 0.619482 6.70268 1.28337Z"
                                                 fill={color.text.primary}/>
                                        </svg>

                                    </Box>
                                    <Flex color={color.text.secondary}>
                                        نظرات :
                                        <Text as="strong" color={color.text.primary}>
                                            {data.numReviews}
                                        </Text>
                                    </Flex>
                                </HStack>

                            </GridItem>
                        </SimpleGrid>
                    </Flex>

                    <AddBasket data={data}/>

                </GridItem>
            </SimpleGrid>


        </Container>
    );

};

export default Page
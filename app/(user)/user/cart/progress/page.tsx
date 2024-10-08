"use client"
import {Box, Button, Container, Img, useToast} from "@chakra-ui/react";
import BasicStepper from "@/components/UI/Stepper/BasicStepper";
import React, {useState} from "react";
import GetAddressForm from "@/components/Forms/getAddressForm";
import ShopOrder from "@/components/shopOrder/CreateTable";
import {useAppDispatch, useAppSelector} from "@/lib/redux/hooks";
import {OrdersApi} from "@/lib/openapi/generated-client";
import {clearAll} from "@/lib/redux/features/Basket/basketSlice";
import OrderDetails from "@/components/orderdetails/OrderDetails";
import {useRouter} from "next/navigation";

const Page = (props) => {
    const [index, setIndex] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState<unknown>({})
    const {
        list: data,
        totalPrice
    } = useAppSelector(s => s.basket)

    const dispatch = useAppDispatch()
    const toast = useToast()
    const {push} = useRouter()
    const list = [
        {
            title: "ورود"
        },
        {
            title: "آدرس"
        },
        {
            title: "خلاصه خرید"
        },
    ]


    const columns = [
        {
            id: "image",
            header: () => "عکس",
            accessorKey: "image",
            cell: (info: any) => <Img src={info.getValue()} alt="product image" minWidth={"64px"} boxSize={"64px"}
                                      marginInline={"auto"}/>,
        },
        {
            id: "name",
            header: () => "نام محصول",
            accessorKey: "name",
        },
        {
            id: "count",
            header: () => "تعداد",
            accessorKey: "count",
        },
        {
            id: "price",
            header: () => "قیمت",
            accessorKey: "price",
        },
        {
            id: "count",
            header: () => "قیمت نهایی",
            accessorKey: "count",
            cell: (e) => {
                const price = e.row.getValue("price")
                const count = e.row.getValue("count")

                return (<>{price * count}</>)
            }
        },

    ];


    const createOrder = () => {
        console.log(formData)
        setIsLoading(true)
        new OrdersApi().apiOrdersPost({
            orderItems: data.map(item => ({
                _id: item._id,
                name: item.name,
                qty: item.count
            })),
            paymentMethod: "Cash",
            shippingAddress: {
                "address": formData.address,
                "city": formData.city,
                "postalCode": formData.zipcode
            }
        }).then((r) => {
            console.log(r)
            toast({
                title: 'سفارش شما با موفقیت ثبت شد',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            dispatch(clearAll())
            push("/user/orders")
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (<>
        <Container maxW={"2xl"} py={5}>
            <Box dir={"ltr"}>
                <BasicStepper activeIndex={index} list={list}></BasicStepper>
            </Box>

            <Box pt={10}>
                {index === 1 &&
                    <GetAddressForm onSubmit={(data) => {
                        setIndex(2)
                        setFormData({
                            address: `
                            ${data.country} ${data.city} ${data.address} ${data.zipcode}
                            `,
                            payWay: "درگاه پرداخت",
                            prices: {
                                tax: 10000,
                                subtotal: totalPrice,
                                trackingFee: 10000,

                            },
                            ...data
                        })
                    }}/>
                }


            </Box>
        </Container>

        <Container maxW={"100%"} pb={"200px"}>
            {index === 2 &&
                <>
                    <Box>
                        <ShopOrder data={data} columns={columns}/>
                    </Box>

                    <Box>
                        <OrderDetails  {...formData}  />
                        <Box pt={20}>
                            <Button variant="roundedPinkButton" isLoading={isLoading} minWidth={"100%"}
                                    onClick={createOrder}>ثبت
                                سفارش</Button>
                        </Box>
                    </Box>
                </>
            }
        </Container>

    </>)
}

export default Page;
"use client"
import React, {FC, useEffect, useState} from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import {Button, Container, Img, Text, useToast} from "@chakra-ui/react";
import {color} from "@/components/colors";
import ShopAddress from "@/components/shopAddress/ShopAddress";
import ShoppingData from "@/components/shoppingData/ShoppingData";
import {useParams} from "next/navigation";
import {OrdersApi} from "@/lib/openapi/generated-client";
import {formatToToman} from "@/components/utility";

const columns = [
    {
        id: "image",
        header: () => "عکس",
        accessorKey: "image",
        cell: (info: any) => (
            <Img
                src={info.getValue()}
                alt="product image"
                minWidth={"64px"}
                boxSize={"64px"}
                marginInline={"auto"}
            />
        ),
    },
    {
        id: "name",
        header: () => "نام محصول",
        accessorKey: "name",
    },
    {
        id: "quantity",
        header: () => "تعداد",
        accessorKey: "quantity",
    },
    {
        id: "price",
        header: () => "قیمت",
        accessorKey: "price",
    },
    {
        id: "finalPrice",
        header: () => "قیمت نهایی",
        accessorKey: "finalPrice",
    },
];

const url = process.env.NEXT_PUBLIC_API_URL
const App: FC = () => {

    const {id} = useParams()
    const [ApiData, setData] = useState<unknown>({})
    const toast = useToast()

    const callApi = async () => {
        const res = await new OrdersApi().apiOrdersIdGet(id.toString())
        setData(res.data)
    }

    useEffect(() => {
        callApi()
    }, []);

    const DeliverApi = () => {
        new OrdersApi().apiOrdersIdDeliverPut(id.toString()).then(() => {
            toast({
                title: 'محصول ارسال شد',
                status: 'info',
                duration: 3000,
                isClosable: false,
            })
            callApi()
        })
    }
    const PayApi = () => {
        new OrdersApi().apiOrdersIdPayPut(id.toString()).then(() => {
            toast({
                title: 'پرداخت شد',
                status: 'info',
                duration: 3000,
                isClosable: false,
            })
            callApi()
        })
    }
    return (
        <main
            style={{
                paddingRight: "100px",
                paddingLeft: "60px",
                paddingTop: "60px",
                display: "flex",
            }}
        >
            <Container
                maxW={"3xl"}
                border={"1px solid"}
                borderColor={color.base.textFieldStroke}
                height={"fit-content"}
            >
                <ShopOrder columns={columns} data={ApiData?.orderItems?.map(item => ({
                    image: `${url}/uploads/` + item.image,
                    name: item.name,
                    date: "۱۴۰۱/۰۶/۳۱",
                    finalPrice: item.price * item.qty,
                    paymentStatus: "پرداخت شده",
                    shippingStatus: ApiData?.isDelivered ? "ارسال شده" : "ارسال نشده",
                    quantity: item.qty,
                    price: item.price,
                })) || []}/>
            </Container>
            <Container marginRight={"15px"}>
                <ShopAddress title={"آدرس دریافت"} data={[
                    {title: "شماره سفارش", value: ` ${ApiData?._id?.slice(0, 20) + "..."}`},
                    {title: "نام", value: ` ${ApiData?.user?.username} `},
                    {title: "ایمیل", value: ` ${ApiData?.user?.email} `},
                    {title: "آدرس", value: ` ${ApiData?.shippingAddress?.shippingAddress} `},
                    {title: "شهر", value: ` ${ApiData?.shippingAddress?.city} `},
                    {title: "کدوپستی", value: ` ${ApiData?.shippingAddress?.postalCode} `},
                ]}/>
                <Text
                    width={"auto"}
                    bg={color.base.card}
                    padding={"5px 10px"}
                    margin={"20px 0"}
                    border={"1px solid"}
                    borderRadius={"4px"}
                    borderColor={color.base.textFieldStroke}
                    textColor={color.text.primary}
                    fontWeight={"600"}
                    fontSize={"16px"}
                >
                    {ApiData?.isPaid ? "پرداخت شده" : "پرداخت نشده"}
                    {" - "}
                    {ApiData?.isDelivered ? "ارسال شده" : "ارسال نشده"}

                </Text>
                <ShoppingData title={"خلاصه خرید"} list={[
                    {value: "قیمت محصول", item: `  ${formatToToman(ApiData?.itemsPrice)} تومان `},
                    {value: "هزینه ارسال", item: `  ${formatToToman(ApiData?.shippingPrice)} تومان `},
                    {value: "مالیات", item: `  ${formatToToman(ApiData?.taxPrice)} تومان `},
                    {value: "مبلغ نهایی", item: `  ${formatToToman(ApiData?.totalPrice)} تومان `},
                ]}/>

                <Button mb={3} variant={"regularPinkButton"} minWidth={"100%"} isDisabled={ApiData?.isPaid}
                        onClick={PayApi}
                >
                    پرداخت
                </Button>
                <Button variant={"regularPinkButton"} minWidth={"100%"} isDisabled={ApiData?.isDelivered}
                        onClick={DeliverApi}
                >
                    ارسال محصول
                </Button>
            </Container>
        </main>
    );
};

export default App;

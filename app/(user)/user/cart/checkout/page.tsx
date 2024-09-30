"use client"
import React from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import { Button, Container, Img, Text } from "@chakra-ui/react";
import { color } from "@/components/colors";
import { FC } from "react";
import ShopAddress from "@/components/shopAddress/ShopAddress";
import ShoppingData from "@/components/shoppingData/ShoppingData";

const columns = [
  {
    id: "image",
    header: () => "عکس",
    accessorKey: "image",
    cell: (info: any) => <Img src={info.getValue()} alt="product image" minWidth={"64px"} boxSize={"64px"} marginInline={"auto"}/>,
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

const photoAddress = "https://dkstatics-public.digikala.com/digikala-products/9ec5e6fc915b58db69a363a1769d57a8aa89d5ae_1705485533.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90";
const data = [
  {
    image: photoAddress,
    name: "Apple iPhone 14 Pro",
    date: "۱۴۰۱/۰۶/۳۱",
    finalPrice: "999.00",
    paymentStatus: "پرداخت شده",
    shippingStatus: "در حال ارسال",
    quantity: "2",
    price: "1000"
  },
  {
    image: photoAddress,
    name: "Apple MacBook Air M2",
    date: "۱۴۰۱/۰۶/۳۱",
    finalPrice: "999.00",
    paymentStatus: "پرداخت شده",
    shippingStatus: "ارسال شده",
    quantity: "2",
    price: "1000"
  },
];

  const shopAddressTitle = "آدرس دریافت";
  const shopAddressData = [{title: "شماره سفارش", value: 235465}, {title: "نام", value: "علی"}, {title: "ایمیل", value: "myemail@gmail.com"}];
  const shoppingDataTitle = "خلاصه خرید"
  const shoppingDataList = [{value: "قیمت محصول", item: "10000 تمومان"}, {value: "هزینه ارسال", item: "1000 تومان"}]

  const App: FC = () => (
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
        >
          <ShopOrder columns={columns} data={data} />
        </Container>
        <Container marginRight={"15px"}>
          <ShopAddress title={shopAddressTitle} data={shopAddressData} />
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
            Status
          </Text>
          <ShoppingData title={shoppingDataTitle} list={shoppingDataList} />
          <Button
            width={"100%"}
            marginTop={"20px"}
            bg={color.primary.main}
            borderRadius={"full"}
            color={color.text.button}
            _hover={{bg:color.primary.light}}
          >
            پرداخت
          </Button>
        </Container>
      </main>
  );

export default App;
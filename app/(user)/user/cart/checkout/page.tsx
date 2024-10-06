"use client"
import React, { useEffect, useState } from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import { Button, Container, Img, Text } from "@chakra-ui/react";
import { color } from "@/components/colors";
import { FC } from "react";
import ShopAddress from "@/components/shopAddress/ShopAddress";
import ShoppingData from "@/components/shoppingData/ShoppingData";
import Link from "next/link";
import { UserApi } from "@/lib/openapi/apiClient";

  const shopAddressTitle = "آدرس دریافت";
  const shopAddressData = [{title: "شماره سفارش", value: 235465}, {title: "نام", value: "علی"}, {title: "ایمیل", value: "myemail@gmail.com"}];
  const shoppingDataTitle = "خلاصه خرید"
  const shoppingDataList = [{value: "قیمت محصول", item: "10000 تمومان"}, {value: "هزینه ارسال", item: "1000 تومان"}]

  const App: FC = () => {
    // async function getFromApi() {
    //   new UserApi().apiProductsAllproductsGet().then((r: any) => {
    //     setData(r.data)
    //   })
    // }
  
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   getFromApi()
    // }, [])

    return(
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
            as={Link}
            href={"../orders"}
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
      )
  };

export default App;

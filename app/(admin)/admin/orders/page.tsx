"use client"
import React, { useEffect, useState } from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import { Button, Container, Img, Text } from "@chakra-ui/react";
import { color } from "@/components/colors";
import Link from "next/link";
import { UserApi } from "@/lib/openapi/apiClient";

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
        id: "date",
        header: () => "تاریخ",
        accessorKey: "date",
    },
    {
        id: "user",
        header: () => "کاربر",
        accessorKey: "user",
    },
    {
        id: "finalPrice",
        header: () => "قیمت نهایی",
        accessorKey: "finalPrice",
    },
    {
        id: "paymentStatus",
        header: () => "پرداخت",
        accessorKey: "paymentStatus",
        cell: (info: any) => {
            const status = info.getValue();
            const statusColor = status === "پرداخت شده" ? color.success.main : color.error.main;
            const textColor = status === "پرداخت شده" ? color.success.lighter : color.error.lighter;
            return (
                <Text
                    bg={statusColor} color={textColor} fontSize={"0.875rem"}
                    style={{ padding: "2px 8px", borderRadius: "12px", width: "fit-content", marginInline: "auto"}}
                >
                    {status}
                </Text>
            );
        },
    },
    {
        id: "shippingStatus",
        header: () => "ارسال",
        accessorKey: "shippingStatus",
        cell: (info: any) => {
            const status = info.getValue();
            const statusColor =
                status === "در حال ارسال"
                    ? color.info.main
                    : status === "ارسال شده"
                        ? color.success.main
                        : color.error.main;

            const textusColor =
                status === "در حال ارسال"
                    ? color.info.lighter
                    : status === "ارسال شده"
                        ? color.success.lighter
                        : color.error.lighter;
            return (
                <Text
                    bg={statusColor} color={textusColor} fontSize={"0.875rem"}
                    style={{ padding: "2px 8px", borderRadius: "12px", width: "fit-content", marginInline: "auto"}}
                >
                    {status}
                </Text>
            );
        },
    },
<<<<<<< HEAD
  },
  {
    id: "operations",
    header: () => "عملیات",
    accessorKey: "id",
    cell: (info: any) => {
      return (
        <Button
        as={Link}
        href={`./orders/${info.getValue()}`}
        bg={color.primary.main} color={color.text.button} fontSize={"0.875rem"} fontWeight={"400"} _hover={{cursor: "pointer", background: color.primary.light}}
          style={{ padding: "8px 12px", borderRadius: "8px", width: "fit-content", marginInline: "auto"}}
        >
          توضیحات
        </Button>
      );
=======
    {
        id: "operations",
        header: () => "عملیات",
        accessorKey: "operations",
        cell: (info: any) => {
            return (
                <Button
                    bg={color.primary.main} color={color.text.button} fontSize={"0.875rem"} fontWeight={"400"} _hover={{cursor: "pointer", background: color.primary.light}}
                    style={{ padding: "8px 12px", borderRadius: "8px", width: "fit-content", marginInline: "auto"}}
                >
                    توضیحات
                </Button>
            );
        },
>>>>>>> 4db77542ff019273b590dc13ce414653e85f6bbd
    },
];

const photoAddress = "https://dkstatics-public.digikala.com/digikala-products/9ec5e6fc915b58db69a363a1769d57a8aa89d5ae_1705485533.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90";
const data = [
    {
        image: photoAddress,
        name: "Apple iPhone 14 Pro",
        date: "۱۴۰۱/۰۶/۳۱",
        user: "ali",
        finalPrice: "999.00",
        paymentStatus: "پرداخت شده",
        shippingStatus: "در حال ارسال",
    },
    {
        image: photoAddress,
        name: "Apple MacBook Air M2",
        date: "۱۴۰۱/۰۶/۳۱",
        user: "ali",
        finalPrice: "999.00",
        paymentStatus: "پرداخت شده",
        shippingStatus: "ارسال شده",
    },
];

<<<<<<< HEAD
const App = async () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //     new UserApi().apiProductsAllproductsGet().then((r: any) => {
  //       setData(r.data)
  //     })

  // }, [])
  return (
    <main style={{ width: "90vw", paddingTop: "3rem" }}>
      <ShopOrder columns={columns} data={data} />
    </main>
  );
};
=======
const App = () => (
    <main>
        <Container maxW={"7xl"} paddingTop={"40px"}>
            <ShopOrder columns={columns} data={data} />
        </Container>
    </main>
);
>>>>>>> 4db77542ff019273b590dc13ce414653e85f6bbd

export default App;

"use client";
import React, { useEffect, useState } from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import { Box, Button, Container, Img, Text } from "@chakra-ui/react";
import { color } from "@/components/colors";
import Link from "next/link";
import { OrdersApi } from "@/lib/openapi/apiClient";

const columns = [
//   {
//     id: "image",
//     header: () => "عکس",
//     accessorKey: "orderItems",
//     cell: (info: any) => (
//       <Img
//         src={info.getValue()[0]?.image}
//         alt="product image"
//         minWidth={"64px"}
//         boxSize={"64px"}
//         marginInline={"auto"}
//       />
//     ),
//   },
//   {
//     id: "name",
//     header: () => "نام محصول",
//     accessorKey: "orderItems",
//     cell: (info: any) => {
//       const value = info.getValue()[0]?.name;
//       return <Text>{value}</Text>;
//     },
//   },
  {
    id: "date",
    header: () => "تاریخ",
    accessorKey: "createdAt",
    cell: (info: any) => {
      const value = new Date(info.getValue()).toLocaleString();
      return <Text>{value}</Text>;
    },
  },
  {
    id: "finalPrice",
    header: () => "قیمت نهایی",
    accessorKey: "totalPrice",
    cell: (info: any) => {
      const value = info.getValue();
      return <Text>{value} تومان</Text>;
    },
  },
  {
    id: "paymentStatus",
    header: () => "پرداخت",
    accessorKey: "isPaid",
    cell: (info: any) => {
      const status = info.getValue();
      const statusColor =
        status === true ? color.success.main : color.error.main;
      const textColor =
        status === true ? color.success.lighter : color.error.lighter;
      return (
        <Text
          bg={statusColor}
          color={textColor}
          fontSize={"0.875rem"}
          style={{
            padding: "2px 8px",
            borderRadius: "12px",
            width: "fit-content",
            marginInline: "auto",
          }}
        >
          {status === false ? "پرداخت نشده" : "پرداخت شده"}
        </Text>
      );
    },
  },
  {
    id: "shippingStatus",
    header: () => "ارسال",
    accessorKey: "isDelivered",
    cell: (info: any) => {
      const status = info.getValue();
      const statusColor =
        status === false
          ? color.error.main
          : status === true
          ? color.success.main
          : color.info.main;

      const textusColor =
        status === false
          ? color.error.lighter
          : status === true
          ? color.success.lighter
          : color.info.lighter;
      return (
        <Text
          bg={statusColor}
          color={textusColor}
          fontSize={"0.875rem"}
          style={{
            padding: "2px 8px",
            borderRadius: "12px",
            width: "fit-content",
            marginInline: "auto",
          }}
        >
          {status === false ? "ارسال نشده" : "ارسال شده"}
        </Text>
      );
    },
  },

  {
    id: "operations",
    header: () => "عملیات",
    accessorKey: "_id",
    cell: (info: any) => {
      return (
        <Button
          as={Link}
          href={`./orders/${info.getValue()}`}
          bg={color.primary.main}
          color={color.text.button}
          fontSize={"0.875rem"}
          fontWeight={"400"}
          _hover={{ cursor: "pointer", background: color.primary.light }}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            width: "fit-content",
            marginInline: "auto",
          }}
        >
          توضیحات
        </Button>
      );
    },
  },
];

// const photoAddress =
//   "https://dkstatics-public.digikala.com/digikala-products/9ec5e6fc915b58db69a363a1769d57a8aa89d5ae_1705485533.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90";
// const data = [
//   {
//     image: photoAddress,
//     name: "Apple iPhone 14 Pro",
//     date: "۱۴۰۱/۰۶/۳۱",
//     finalPrice: "999.00",
//     paymentStatus: "پرداخت شده",
//     shippingStatus: "در حال ارسال",
//     id: "645655",
//   },
//   {
//     image: photoAddress,
//     name: "Apple MacBook Air M2",
//     date: "۱۴۰۱/۰۶/۳۱",
//     finalPrice: "999.00",
//     paymentStatus: "پرداخت شده",
//     shippingStatus: "ارسال شده",
//     id: "645658",
//   },
// ];

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    new OrdersApi().apiOrdersMineGet().then((r: any) => {
      setData(r.data);
    });
  }, []);

  return (
    <main style={{ width: "90vw", paddingTop: "3rem" }}>
      <ShopOrder columns={columns} data={data} />
    </main>
  );
};

export default App;

"use client"
import React from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import { Box, Button, Img, Text } from "@chakra-ui/react";
import { color } from "@/components/colors";
import SideMenu from "@/components/sidemenu/SideMenu";
import { FC } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
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

const sideMenuList = [
    {
      title: "home",
      pathName: "string",
      icon: <HiOutlineHome />,
      notif: null,
    }, 
    {
      title: "shoppingBag",
      pathName: "string",
      icon: <RiShoppingBagLine />,
      notif: null,
    },
    {
      title: "shoppingCart",
      pathName: "string",
      icon: <AiOutlineShoppingCart />,
      notif: 2,
    },
    {
      title: "lovedItems",
      pathName: "string",
      icon: <FaHeart />,
      notif: null,
    }
  ]

  const shopAddressTitle = "آدرس دریافت";
  const shopAddressData = [{title: "شماره سفارش", value: 235465}, {title: "نام", value: "علی"}, {title: "ایمیل", value: "myemail@gmail.com"}];
  const shoppingDataTitle = "خلاصه خرید"
  const shoppingDataList = [{value: "قیمت محصول", item: "10000 تمومان"}, {value: "هزینه ارسال", item: "1000 تومان"}]

  const App: FC = () => (
    <Box bg={color.base.background}  height={"100vh"}>
      <aside >
        <SideMenu list={sideMenuList} />
      </aside>
      <main style={{paddingRight: "140px", paddingLeft: "60px", paddingTop: "40px", display:"flex"}}>
        <Box width={"max-content"} border={"1px solid"} borderColor={color.base.textFieldStroke} marginLeft={"30px"}>
        <ShopOrder columns={columns} data={data} />
        </Box>
        <Box width={"400px"}>
            <ShopAddress title={shopAddressTitle} data={shopAddressData}/>
            <ShoppingData title={shoppingDataTitle} list={shoppingDataList}/>
        </Box>
      </main>
    </Box>
  );

export default App;
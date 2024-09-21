"use client"
import { Button, useColorMode } from "@chakra-ui/react";
import ShopOrder from "@/components/shopOrder/ShopOrder";
import ShopStatusOrder from "@/components/shopOrder/ShopOrderStatus"
import AdminShopOrderPanel from "@/components/shopOrder/AdminPanelShopOrder"

const Page = () => {
  const picture = "https://dkstatics-public.digikala.com/digikala-products/9f58aa1db2e8293175d57b26bec060b96d4f6526_1726389121.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  const { colorMode, toggleColorMode } = useColorMode();
  const products = [
    {
      image: picture,
      name: 'Apple iPhone 14 Pro',
      quantity: 1,
      price: 999.00,
      finalPrice: 999.00,
      date: "1401/04/31",
      paymentStatusCode: 1,
      shippingStatusCode: 1,
      customer: "مهدی مهدی مهدی"
    },
    {
      image: picture,
      name: 'Apple MacBook Air M2',
      quantity: 1,
      price: 999.00,
      finalPrice: 999.00,
      date: "1401/04/31",
      paymentStatusCode: 0,
      shippingStatusCode: 2,
      customer: "مهدی مهدی مهدی"
    },
    {
      image: picture,
      name: 'Apple iPad Pro 12.9-inch',
      quantity: 1,
      price: 999.00,
      finalPrice: 999.00,
      date: "1401/04/31",
      paymentStatusCode: 1,
      shippingStatusCode: 0,
      customer: "مهدی مهدی مهدی"
    }
  ];
  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <ShopOrder products={products}/>
      <ShopStatusOrder products={products}/>
      <AdminShopOrderPanel products={products}/>
      </>
  );
};

export default Page;

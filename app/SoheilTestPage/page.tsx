"use client"
import { Button, useColorMode } from "@chakra-ui/react";
import ShopOrder from "@/components/shopOrder/ShopOrder";
const Page = () => {
  const picture = "https://dkstatics-public.digikala.com/digikala-products/9f58aa1db2e8293175d57b26bec060b96d4f6526_1726389121.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  const { colorMode, toggleColorMode } = useColorMode();
  const products = [
    {
      image: picture,
      name: 'Apple iPhone 14 Pro',
      quantity: 1,
      price: 999.00,
      finalPrice: 999.00
    },
    {
      image: picture,
      name: 'Apple MacBook Air M2',
      quantity: 1,
      price: 999.00,
      finalPrice: 999.00
    },
    {
      image: picture,
      name: 'Apple iPad Pro 12.9-inch',
      quantity: 1,
      price: 999.00,
      finalPrice: 999.00
    }
  ];
  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <ShopOrder products={products}/>
    </>
  );
};

export default Page;

import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";

interface Product {
  image: string;
  name: string;
  quantity: number;
  price: number;
  finalPrice: number;
  date: string;
  shippingStatusCode: number;
  paymentStatusCode: number;
}

interface ShopOrderProps {
  products: Product[];
}

const ShopOrder: React.FC<ShopOrderProps> = ({ products }) => {
  const Theader = [
    "عکس",
    "نام محصول",
    "تاریخ",
    "قیمت نهایی",
    "پرداخت",
    "ارسال",
    "عملیات",
  ];

  function getShippingStatus(code: number) {
    switch (code) {
      case 0:
        return {
          label: "در حال ارسال",
          bgColor: "#00B8D9",
          textColor: "#CAFDF5",
        };
      case 1:
        return { label: "ارسال شده", bgColor: "#22C55E", textColor: "#D3FCD2" };
      case 2:
        return { label: "ارسال نشده", bgColor: "#B71D18", textColor: "#FFE9D5" };
      default:
        return {
          label: "وضعیت نامشخص",
          bgColor: "gray.300",
          textColor: "black",
        };
    }
  }

  function getPaymentStatus(code: number) {
    switch (code) {
      case 0:
        return { label: "پرداخت نشده", bgColor: "#B71D18", textColor: "#FFE9D5" };
      case 1:
        return { label: "پرداخت شده", bgColor: "#22C55E", textColor: "#D3FCD2" };
      default:
        return {
          label: "وضعیت نامشخص",
          bgColor: "gray.300",
          textColor: "black",
        };
    }
  }

  return (
    <Box overflowX="auto" padding="20px">
      <Table variant="" colorScheme="">
        <Thead>
          <Tr>
            {Theader.map((title, index) => (
              <Th
                key={index}
                fontFamily={"IRANYekanXFaNum"}
                fontSize={"16px"}
                fontWeight={"400"}
                textAlign={index >= 2 ? "center" : "start"}
              >
                {title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => {
            const shippingStatus = getShippingStatus(
              product?.shippingStatusCode
            );
            const paymentStatus = getPaymentStatus(product?.paymentStatusCode);

            return (
              <Tr key={index}>
                <Td>
                  <Image
                    boxSize="50px"
                    src={product?.image}
                    alt="product image"
                  />
                </Td>
                <Td>{product?.name}</Td>
                <Td textAlign={"center"}>{product?.date}</Td>
                <Td textAlign={"center"}>{product?.finalPrice} تومان</Td>
                <Td>
                  <Text
                    bg={paymentStatus.bgColor}
                    color={paymentStatus.textColor}
                    padding="2px 8px"
                    borderRadius="12px"
                    fontSize={"14px"}
                    width={"fit-content"}
                    mx="auto"
                  >
                    {paymentStatus.label}
                  </Text>
                </Td>
                <Td>
                  <Text
                    bg={shippingStatus.bgColor}
                    color={shippingStatus.textColor}
                    padding="2px 8px"
                    borderRadius="12px"
                    fontSize={"14px"}
                    width={"fit-content"}
                    mx="auto"
                  >
                    {shippingStatus.label}
                  </Text>
                </Td>
                <Td>
                  <Text
                    bg={"#DB2777"}
                    color={"white"}
                    padding="8px 12px"
                    borderRadius="8px"
                    fontSize={"14px"}
                    width={"fit-content"}
                    mx="auto"
                    _hover={{cursor: "pointer", background: "pink"}}
                  >
                    جزییات
                  </Text>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ShopOrder;

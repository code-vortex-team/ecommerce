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
import { color } from "../colors";

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
          bgColor: color.info.main,
          textColor: color.info.lighter,
        };
      case 1:
        return { label: "ارسال شده", bgColor: color.success.main, textColor: color.success.lighter };
      case 2:
        return { label: "ارسال نشده", bgColor: color.error.main, textColor: color.error.lighter };
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
        return { label: "پرداخت نشده", bgColor: color.error.main, textColor: color.error.lighter };
      case 1:
        return { label: "پرداخت شده", bgColor: color.success.main, textColor: color.success.lighter };
      default:
        return {
          label: "وضعیت نامشخص",
          bgColor: "gray.300",
          textColor: "black",
        };
    }
  }

  const textStyle = {
    color: color.text.primary,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px"
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
                letterSpacing={"0px"}
                fontSize={"16px"}
                fontWeight={"400"}
                color={color.text.primary}
                textAlign={index >= 2 ? "center" : "start"}
              >
                {title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => {
            const shippingStatus = getShippingStatus(product?.shippingStatusCode);
            const paymentStatus = getPaymentStatus(product?.paymentStatusCode);

            return (
              <Tr key={index}>
                <Td>
                  <Image
                    boxSize="64px"
                    minWidth={"64px"}
                    src={product?.image}
                    alt={product?.name + " image"}
                  />
                </Td>
                <Td style={textStyle}>{product?.name}</Td>
                <Td style={textStyle} textAlign={"center"}>{product?.date}</Td>
                <Td style={textStyle} textAlign={"center"}>{product?.finalPrice} تومان</Td>
                <Td>
                  <Text
                    bg={paymentStatus.bgColor}
                    color={paymentStatus.textColor}
                    padding="2px 8px"
                    borderRadius="12px"
                    fontSize={"14px"}
                    textAlign={"center"}
                    width={"fit-content"}
                    minWidth={"max-content"}
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
                    textAlign={"center"}
                    width={"fit-content"}
                    minWidth={"max-content"}
                    mx="auto"
                  >
                    {shippingStatus.label}
                  </Text>
                </Td>
                <Td>
                  <Text
                    bg={color.primary.main}
                    color={color.text.button}
                    padding="8px 12px"
                    borderRadius="8px"
                    fontSize={"14px"}
                    textAlign={"center"}
                    width={"fit-content"}
                    minWidth={"max-content"}
                    mx="auto"
                    _hover={{cursor: "pointer", background: color.primary.light}}
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

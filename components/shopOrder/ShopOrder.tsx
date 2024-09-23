import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Image, Divider } from '@chakra-ui/react';
import { color } from '../colors';

interface Product {
  image: string;
  name: string;
  quantity: number;
  price: number;
  finalPrice: number;
}

interface ShopOrderProps {
  products: Product[];
}

const ShopOrder: React.FC<ShopOrderProps> = ({ products }) => {
  const Theader = ["عکس", "نام محصول", "تعداد", "قیمت", "قیمت نهایی"]
  
  const textStyle = {
    color: color.text.primary,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px"
  }
  return (
    <Box overflowX="auto" padding="20px">
      <Table variant="" colorScheme="">
        <Thead borderBottom={"1px solid"} borderColor={color.base.textFieldStroke}>
          <Tr>
            {Theader.map((title, index) => (
              <Th
                key={index}
                fontFamily={"IRANYekanXFaNum"} 
                letterSpacing={"0px"} 
                fontSize={"16px"} 
                fontWeight={"400"}
                color={color.text.primary} 
                textAlign={index >= 2 ? "center": "start"}
                >
                  {title}
                </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td >
                <Image boxSize={"64px"} minWidth={"64px"} src={product?.image} alt={product?.name + " image"} />
              </Td>
              <Td>{product?.name}</Td>
              <Td style={textStyle} textAlign={"center"}>{product?.quantity}</Td>
              <Td style={textStyle} textAlign={"center"}>{product?.price} تومان</Td>
              <Td style={textStyle} textAlign={"center"}>{product?.finalPrice} تومان</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ShopOrder;

import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Image, Divider } from '@chakra-ui/react';

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

  return (
    <Box overflowX="auto" padding="20px">
      <Table variant="" colorScheme="">
        <Thead borderBottom={"1px solid #CED2D7"}>
          <Tr>
            {Theader.map((title, index) => (
              <Th key={index} fontFamily={"IRANYekanXFaNum"} fontSize={"16px"} fontWeight={"400"} textAlign={index >= 2 ? "center": "start"}>{title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td>
                <Image boxSize="50px" src={product?.image} alt="product image" />
              </Td>
              <Td>{product?.name}</Td>
              <Td textAlign={"center"}>{product?.quantity}</Td>
              <Td textAlign={"center"}>{product?.price} تومان</Td>
              <Td textAlign={"center"}>{product?.finalPrice} تومان</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ShopOrder;

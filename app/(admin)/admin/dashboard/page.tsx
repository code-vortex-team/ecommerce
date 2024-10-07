"use client";
import { color } from "@/components/colors";
import SalesChart from "@/components/sale-chart/SalesChart";
import { OrdersApi } from "@/lib/openapi/apiClient";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    const res = new OrdersApi().apiOrdersGet().then((res: any) => {
      setOrders(res.data);
    });
  }, []);

  let totalSale = 0;
  orders.forEach((order: any) => {
    totalSale += order.totalPrice;
  });

  const seenIds = new Set<string>();

  const uniqueCustomersCount = orders.filter((order: any) => {
    if (!order.user || !order.user._id) return false;
    if (seenIds.has(order.user._id)) {
      return false;
    } else {
      seenIds.add(order.user._id);
      return true;
    }
  }).length;

  return (
    <Box mt="50px" mr="6.458vw">
      <Flex width="82.5vw" flexDir="column" gap="43px" pr="6.458vw">
        <Flex w="63.333vw" justifyContent="space-between">
          <Card bg="black" w="16.667vw" borderRadius="8px">
            <CardHeader w="48px" h="48px" mb="12px">
              <Avatar name="$" bg="#DB2777" />
            </CardHeader>
            <CardBody display="flex" flexDir="column" gap="4px">
              <Text
                fontSize="16px"
                fontWeight="400"
                color={color.text.secondary}
              >
                فروش کل
              </Text>
              <Text fontSize="20px" fontWeight="700" color={color.text.primary}>
                {totalSale.toLocaleString()} تومان
              </Text>
            </CardBody>
          </Card>
          <Card bg="black" w="16.667vw" borderRadius="8px">
            <CardHeader w="48px" h="48px" mb="12px">
              <Avatar name="$" bg="#DB2777" />
            </CardHeader>
            <CardBody display="flex" flexDir="column" gap="4px">
              <Text
                fontSize="16px"
                fontWeight="400"
                color={color.text.secondary}
              >
                مشتری ها
              </Text>
              <Text fontSize="20px" fontWeight="700" color={color.text.primary}>
                {uniqueCustomersCount}
              </Text>
            </CardBody>
          </Card>
          <Card bg="black" w="16.667vw" borderRadius="8px">
            <CardHeader w="48px" h="48px" mb="12px">
              <Avatar name="$" bg="#DB2777" />
            </CardHeader>
            <CardBody display="flex" flexDir="column" gap="4px">
              <Text
                fontSize="16px"
                fontWeight="400"
                color={color.text.secondary}
              >
                سفارشات
              </Text>
              <Text fontSize="20px" fontWeight="700" color={color.text.primary}>
                {orders.length}
              </Text>
            </CardBody>
          </Card>
        </Flex>
        <Box height="67.582vh" w="100%">
          <SalesChart orders={orders} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Page;

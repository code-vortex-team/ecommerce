import { color } from "@/components/colors";
import SalesChart from "@/components/sale-chart/SalesChart";
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";

const Page: React.FC = () => {
  return (
    <Box mt='50px' mr='6.458vw'>
      <Flex width="82.5vw" flexDir='column' gap='43px' pr='6.458vw'>
        <Flex w='63.333vw' justifyContent='space-between' >
            <Card bg='black' w='16.667vw'  borderRadius='8px'>
                <CardHeader w='48px' h='48px' mb='12px'>
                    <Avatar name="$" bg='#DB2777' />
                </CardHeader>
                <CardBody display='flex' flexDir='column' gap='4px'>
                    <Text fontSize='16px' fontWeight="400" color={color.text.secondary}>فروش کل</Text>
                    <Text fontSize='20px' fontWeight='700' color={color.text.primary} >0 تومان</Text>
                </CardBody>
            </Card>
            <Card bg='black' w='16.667vw' borderRadius='8px'>
                <CardHeader w='48px' h='48px' mb='12px'>
                    <Avatar name="$" bg='#DB2777' />
                </CardHeader>
                <CardBody display='flex' flexDir='column' gap='4px'>
                    <Text fontSize='16px' fontWeight="400" color={color.text.secondary}>مشتری ها</Text>
                    <Text fontSize='20px' fontWeight='700' color={color.text.primary} >10</Text>
                </CardBody>
            </Card>
            <Card bg='black' w='16.667vw' borderRadius='8px'>
                <CardHeader w='48px' h='48px' mb='12px'>
                    <Avatar name="$" bg='#DB2777' />
                </CardHeader>
                <CardBody display='flex' flexDir='column' gap='4px'>
                    <Text fontSize='16px' fontWeight="400" color={color.text.secondary}>سفارشات</Text>
                    <Text fontSize='20px' fontWeight='700' color={color.text.primary} >100</Text>
                </CardBody>
            </Card>
        </Flex>
        <Box height='67.582vh' w='100%'>
            <SalesChart saleData={[0,3,0,0,0,0]}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Page;

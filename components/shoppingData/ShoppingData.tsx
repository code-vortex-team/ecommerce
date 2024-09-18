import React from 'react';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';


interface ListItem {
    value: string;
    item: string;
}

interface ItemListProps {
    title: string;
    list: ListItem[];
}



const ShoppingData: React.FC<ItemListProps> = ({ title, list }) => {
    return (
        <Box>
            <Heading
                position="absolute"
                top={0}
                right={0}
                mb={4}
                textAlign="right"
                fontWeight="medium"
            >
                {title}
            </Heading>
            {list.map((listItem, index) => (
                <Flex
                    key={index}
                    justify="space-between"
                    py={2}
                    borderBottom="1px solid #e2e8f0"
                >

                    <Text fontWeight="normal">{listItem.value}</Text>

                    <Text fontWeight="bold" color="#58616C">{listItem.item}</Text>
                </Flex>
            ))}
        </Box>
    );
};


export default ShoppingData;
import React from 'react';
import {Box, Flex, Heading, Text} from '@chakra-ui/react';


interface ListItem {
    value: string;
    item: string;
}

interface ItemListProps {
    title: string;
    list: ListItem[];
}


const ShoppingData: React.FC<ItemListProps> = ({title, list}) => {
    return (
        <Box>

            <Heading
                mb={4}
                textAlign="right"
                fontWeight={500}
                fontSize={20}
            >
                {title}
            </Heading>
            {list.map((listItem, index) => (
                <Flex
                    key={index}
                    justify="space-between"
                    pb={4}

                >

                    <Text color="#58616C" fontSize={16} fontWeight={700}>{listItem.value} : </Text>

                    <Text color="#000000" fontSize={16} fontWeight={400}>{listItem.item}</Text>
                </Flex>
            ))}
        </Box>
    );
};


export default ShoppingData;
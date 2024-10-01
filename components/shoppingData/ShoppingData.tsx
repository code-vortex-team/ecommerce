import React from 'react';
import {Box, Flex, Heading, Text} from '@chakra-ui/react';
import {color} from "@/components/colors";

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
        <Box sx={{
            width: "34.3125rem",
            height: "12.5rem",
            gap: "1.5rem"
        }}>

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

                    <Text sx={{color: color.text.secondary}} fontSize={16} fontWeight={700}>{listItem.value} : </Text>

                    <Text sx={{color: color.text.primary}} fontSize={16} fontWeight={400}>{listItem.item}</Text>
                </Flex>
            ))}
        </Box>
    );
};


export default ShoppingData;
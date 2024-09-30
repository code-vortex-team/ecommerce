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
            width: "34.3rem",
            height: "12.5rem"
        }}>

            <Heading
                mb="1.5rem"
                textAlign="right"
                fontWeight={500}
                fontSize="20px"
            >
                {title}
            </Heading>
            {list.map((listItem, index) => (
                <Flex
                    key={index}
                    justify="space-between"
                    pb={4}

                >

                    <Text fontSize="1rem" fontWeight={700}
                          sx={{color: color.text.secondary}}>{listItem.value} : </Text>

                    <Text fontSize="1rem" fontWeight={400} sx={{color: color.text.primary}}>{listItem.item}</Text>
                </Flex>
            ))}
        </Box>
    );
};


export default ShoppingData;
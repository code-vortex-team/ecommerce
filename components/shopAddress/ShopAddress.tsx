import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface propsType {
  title: string;
  data: { title: string; value: number | string }[];
}

const ShopAddress = (props: propsType) => {
  return (
    <Box dir="rtl">
      <Heading m="1rem" as="h4" size="sm">
        {props.title}
      </Heading>
      <UnorderedList styleType='""'>
        {props.data.map((item, index) => (
          <ListItem key={index} mb="0.7rem">
            <Text display="inline-block" color="red">
              {item.title} :&nbsp;
            </Text>
            <Text display="inline-block">{item.value} </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ShopAddress;

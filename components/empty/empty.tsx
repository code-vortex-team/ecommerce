import {Box, Text} from "@chakra-ui/react";
import {color} from "@/components/colors";

const Empty = ({title = "لیست شما خالی میباشد"}) => {

    return (<>
        <Box bg={color.base.side} p={"16px"} borderRadius={6} textAlign="center">
            <Text color={color.text.primary}>
                {title}
            </Text>
        </Box>
    </>)
}

export default Empty;
import React from "react";
import FilterCategory from "../filterCategory/FilterCategory";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { color } from "../colors";
export default function Filter() {
  const categories = [
    { name: "Apple", active: false },
    { name: "Microsoft", active: false },
    { name: "Samsung", active: false },
    { name: "Asus", active: false },
  ];
  function handleButtonClick(params: Array<{ name: string; active: boolean }>): undefined {
    params.map((param) => {
        param.active = false
    })
  }
  return (
    <Box padding={"15px"} bg={color.base.side}>
      <FilterCategory title="فیلتر برند" categories={categories} />
      <Text
        borderRadius={"full"}
        padding={"8px 51.97px 8px 51.97px"}
        textAlign={"center"}
        fontSize={"16px"}
        fontWeight={"400"}
        marginTop={"48px"}
        bg={color.base.menu}
        color={color.text.primary}
      >
        فیلتر قیمت
      </Text>
      <Input
        placeholder="قیمت را وارد نمایید"
        marginTop={"36px"}
        background={"white"}
        color={"black"}
        border={"1px solid"}
        borderColor={color.grey._200}
        width={"90%"}
        display={"block"}
        mx={"auto"}
      />
      <Button
        marginTop={"40px"}
        fontWeight={"400"}
        width={"90%"}
        display={"block"}
        mx={"auto"}
        bg={"none"}
        border={"1px solid"}
        borderColor={color.grey._400}
        color={color.text.primary}
        onClick={handleButtonClick(categories)}
      >
        حذف فیلترها
      </Button>
    </Box>
  );
}

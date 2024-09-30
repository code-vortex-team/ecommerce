"use client";
import React, { useState, useEffect } from "react";
import FilterCategory from "../filterCategory/FilterCategory";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { color } from "../colors";

interface FilterProps {
  categories: Array<{ name: string; active: boolean }>;
}

const Filter: React.FC<FilterProps> = ({ categories: initialCategories }) => {

  const [categories, setCategories] = useState(initialCategories);
  const [resetFilters, setResetFilters] = useState(false);
  const [price, setPrice] = useState<string | number>("");


  useEffect(() => {
    setCategories(initialCategories);
  }, [initialCategories]);

  const handleCategoryChange = (updatedCategories: any) => {
    setCategories(updatedCategories);
  };

  const handleResetFilters = () => {
    setPrice(" ");
    setResetFilters(true);
    setTimeout(() => {
      setResetFilters(false);
    }, 100);
  };

  return (
    <Box padding={"15px"} bg={color.base.side}>
      <FilterCategory
        title="فیلتر برند"
        categories={categories}
        onchange={handleCategoryChange}
        resetFilters={resetFilters}
      />
      <Text
        borderRadius={"full"}
        padding={"8px 51.97px"}
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
        type="number"
        onChange={(e) => setPrice(e.target.valueAsNumber)}
        value={price}
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
        onClick={handleResetFilters}
      >
        حذف فیلترها
      </Button>
    </Box>
  );
};

export default Filter;

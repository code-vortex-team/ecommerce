"use client"
import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { color } from "../colors";

export default function FilterProducts({
  title,
  categories,
  onchange,
}: {
  title: string;
  onchange?: (data: Array<{ name: string; active: boolean }>) => void;
  categories: Array<{ name: string; active: boolean }>;
}) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const initialSelected = categories
      .filter((cat) => cat.active)
      .map((cat) => cat.name);
    setSelectedCategories(initialSelected);
  }, [categories]);

  const handleChange = (values: string[]) => {
    setSelectedCategories(values);

    const updatedCategories = categories.map((category) => ({
      ...category,
      active: values.includes(category.name),
    }));
    // console.log(values)
    if (onchange) {
      onchange(updatedCategories);
    }
  };

  return (
    <Box>
      <Box
        borderRadius={"full"}
        padding={"8px 51.97px 8px 51.97px"}
        textAlign={"center"}
        fontSize={"16px"}
        fontWeight={"400"}
        bg={color.base.menu}
        color={color.text.primary}
      >
        {title}
      </Box>
      <CheckboxGroup value={selectedCategories} onChange={handleChange}>
        <Stack marginTop={12} spacing={"8px"} direction="column">
          {categories.map((item, index) => (
            <Checkbox key={index} value={item.name} fontSize={"14px"} fontWeight={"400"} color={color.text.primary}>
              {item.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
}

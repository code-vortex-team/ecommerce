"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

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
        padding={3}
        textAlign={"center"}
        bg={useColorModeValue("#edf2f7", "black")}
      >
        {title}
      </Box>
      <CheckboxGroup value={selectedCategories} onChange={handleChange}>
        <Stack marginTop={12} spacing={3} direction="column">
          {categories.map((item, index) => (
            <Checkbox key={index} value={item.name}>
              {item.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
}

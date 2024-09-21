"use client";
import FilterCategory from "@/components/filterCategory/FilterCategory";
import { Button, useColorMode } from "@chakra-ui/react";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const title = "فیلتر دسته‌بندی";
  const categories = [
    { name: "Smartphones", active: false },
    { name: "Laptop", active: false },
    { name: "Tablets", active: false },
    { name: "Wearables", active: false },
    { name: "Audio", active: false },
  ];
  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <FilterCategory title={title} categories={categories} />
    </>
  );
};

export default Page;

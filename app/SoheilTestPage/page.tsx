"use client";
import FilterCategory from "@/components/filterCategory/FilterCategory";
import { Button, Input, useColorMode } from "@chakra-ui/react";

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
    </>
  );
};

export default Page;

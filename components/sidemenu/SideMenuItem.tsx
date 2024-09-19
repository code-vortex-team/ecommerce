import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const SideMenuItem = ({ item, isOpen, colorMode, itemWidth }: any) => {
  return (
    <Box
      w={itemWidth}
      borderRadius="4px"
      p="8px"
      alignItems="center"
      display="flex"
      as={Link}
      href={item.pathName}
      key={item.pathName}
      h="4.2vh"
      mb="4.8vh"
      color={colorMode === "light" ? "black" : "white"}
      fontSize="16px"
      _active={{
        bg: "#DB277714",
        color: "#DB2777",
        transition: "all 0.15s ease-in-out",
      }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        ml="10px"
        lineHeight="21px"
        fontSize="20px"
      >
        {item.icon}
      </Flex>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: isOpen ? 0 : 100,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        <Text lineHeight="21px" fontWeight="400">
          {item.title}
        </Text>
      </motion.div>
    </Box>
  );
};

export default SideMenuItem;

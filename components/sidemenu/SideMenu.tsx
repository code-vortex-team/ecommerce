"use client";
import {
  Box,
  Text,
  Flex,
  Badge,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { IoEnterOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import SideMenuItem from "./SideMenuItem";

interface sidemenuProps {
  sidemenudata: { title: string; pathName: string; icon: any }[];
}

const SideMenu = ({ sidemenudata }: sidemenuProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setISOpen] = useState(false);

  const menuWidth = useBreakpointValue({
    base: isOpen ? "75vw" : "10vw",
    md: isOpen ? "18.75vw" : "4.167vw",
  });
  const itemWidth = useBreakpointValue({
    base: isOpen ? "70vw" : "8vw",
    md: isOpen ? "17.083vw" : "1.25vw",
  });

  const handleMouseEnter = useCallback(() => {
    setISOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setISOpen(false);
  }, []);

  return (
    <Flex
      justifyContent="space-between"
      direction="column"
      minH="100vh"
      w={menuWidth}
      position="fixed"
      right="0"
      dir="rtl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      bg={colorMode === "light" ? "white" : "black"}
      transition="width 0.3s ease-in-out"
      padding="16px"
    >
      <Box>
        {sidemenudata.map((item) => {
          return (
            <SideMenuItem
              key={item.pathName}
              item={item}
              isOpen={isOpen}
              colorMode={colorMode}
              itemWidth={itemWidth}
            />
          );
        })}
      </Box>

      <Box
        display="flex"
        justifyContent="end"
        flexDirection="column"
        mb="16px"
        gap="10px"
      >
        <Box
          w={isOpen ? "17.083vw" : "1.25vw"}
          borderRadius="4px"
          p="8px"
          alignItems="center"
          textAlign="center"
          display="flex"
          h="4.2vh"
          color={colorMode === "light" ? "black" : "white"}
          fontSize="16px"
          _active={{
            bg: "#DB277714",
            color: "#DB2777",
            transition: "all 0.15s ease-in-out",
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            ml="10px"
            lineHeight="21px"
            fontSize="20px"
          >
            <IoEnterOutline />
          </Flex>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isOpen ? 0 : 100, opacity: isOpen ? 1 : 0 }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            transition={{ duration: 0.3 }}
          >
            <Text> ورود </Text>
          </motion.div>
        </Box>
        <Box
          w={isOpen ? "17.083vw" : "1.25vw"}
          borderRadius="4px"
          p="8px"
          alignItems="center"
          display="flex"
          h="4.2vh"
          color={colorMode === "light" ? "black" : "white"}
          fontSize="16px"
          _active={{
            bg: "#DB277714",
            color: "#DB2777",
            transition: "all 0.15s ease-in-out",
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            ml="10px"
            lineHeight="21px"
            fontSize="20px"
          >
            <IoMdPersonAdd />
          </Flex>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isOpen ? 0 : 100, opacity: isOpen ? 1 : 0 }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            transition={{ duration: 0.3 }}
          >
            <Text> ثبت نام </Text>
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
};

export default SideMenu;

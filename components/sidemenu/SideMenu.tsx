"use client";
import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import {color} from "@/components/colors";
import { motion } from "framer-motion";
import { IoMdPersonAdd } from "react-icons/io";

interface sideMenuType {
  list: Array<{
    title: string;
    pathName: string;
    icon: React.ReactNode;
    notif: number | null;
  }>;
}

const SideMenu: React.FC<sideMenuType> = ({ list }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { push } = useRouter();

  return (
    <Box position={"relative"}>
      <Flex
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        h="100vh"
        bg={color.base.menu}
        position="fixed"
        right="0"
        p="16px"
        alignItems="center"
        flexDirection="column"
        dir="rtl"
        justifyContent="space-between"
      >
        <Box display="flex" gap="4.8vh" flexDir="column">
          {list.map((item) => (
            <Box
              key={item.pathName}
              alignItems="center"
              _active={{
                bg: "#DB277714",
                color: color.primary.main,
              }}
              _hover={{
                color: color.primary.main,
                ".notif-badge": {
                  color: "black",
                  transition: "0.4s",
                },
              }}
              transition="0.4s"
              display="flex"
              gap="10px"
              w="100%"
              p="8px"
              borderRadius="4px"
              cursor="pointer"
              position="relative"
              onClick={() => {
                push(item.pathName);
              }}
            >
              <Box fontSize="20px">{item.icon}</Box>
              {item.notif != null && (
                <Box
                  className="notif-badge"
                  fontSize="10px"
                  top="6px"
                  right="7px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="9999px"
                  width="12px"
                  height="12px"
                  padding="0px 4px"
                  bg={color.primary.main}
                  position="absolute"
                >
                  {item.notif}
                </Box>
              )}

              <motion.div
                initial={{ width: "8px", opacity: 0, x: 20 }}
                animate={{
                  width: isOpen ? "15vw" : "8px",
                  x: isOpen ? 0 : 20,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.4, type: "spring", damping: 15 }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                <Box fontSize="16px" fontWeight="400">
                  {item.title}
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/*---------------- for add drop down component ----------------- */}
        <Box display="flex" gap="4.8vh" flexDir="column">
          <Box
            alignItems="center"
            _active={{
              bg: "#DB277714",
              color: color.primary.main,
            }}
            _hover={{
              color: color.primary.main,
            }}
            transition="0.4s"
            display="flex"
            gap="10px"
            w="100%"
            p="8px"
            borderRadius="4px"
            cursor="pointer"
          >
            <Box fontSize="20px">
              <IoMdPersonAdd />
            </Box>
            <motion.div
              initial={{ width: "8px", opacity: 0, x: 20 }}
              animate={{
                width: isOpen ? "15vw" : "8px",
                x: isOpen ? 0 : 20,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.4, type: "spring", damping: 15 }}
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              <Text fontSize="16px" fontWeight="400">
                ثبت نام
              </Text>
            </motion.div>
          </Box>
        </Box>
        {/* ---------------- for add drop down component ----------------- */}
      </Flex>
    </Box>
  );
};

export default SideMenu;

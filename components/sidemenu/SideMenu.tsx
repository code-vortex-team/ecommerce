"use client";
import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { color } from "@/components/colors";
import { IoMdPersonAdd } from "react-icons/io";

interface sideMenuType {
  children : React.ReactNode
  list: Array<{
    title: string;
    pathName: string;
    icon: React.ReactNode;
    notif: number | null;
  }>;
}

const SideMenu: React.FC<sideMenuType> = ({children, list }) => {
  const { push } = useRouter();

  return (
    <>
    <Box position={"relative"} zIndex="100">
      <Flex
        h="100vh"
        bg={color.base.menu}
        position="fixed"
        right="0"
        top="0"
        p="16px"
        alignItems="center"
        flexDirection="column"
        dir="rtl"
        justifyContent="space-between"
        sx={{
          _hover: {
            ".title-menu": {
              width: "12.76vw",
            },
          },
        }}
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
                },
              }}
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

              <Box
                fontSize="16px"
                fontWeight="400"
                transition={"0.6s cubic-bezier(0.5, 1.5, 0.5, 1.0)"}
                className={"title-menu"}
                width={"0px"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
              >
                {item.title}
              </Box>
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
            <Box
              fontSize="16px"
              fontWeight="400"
              transition={"all 0.6s cubic-bezier(0.5, 1.5, 0.5, 1.0)"}
              className={"title-menu"}
              width={"0px"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
            >
              <Text>ثبت نام</Text>
            </Box>
          </Box>
        </Box>
        {/* ---------------- for add drop down component ----------------- */}
      </Flex>
    </Box>
    {children}
    </>
    
  );
};

export default SideMenu;

"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, Switch, useColorMode, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { color } from "@/components/colors";
import DropDown from "../dropDown/DropDown";
import { checkUserStatus } from "../utility";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { useAppSelector } from "@/lib/redux/hooks";

interface sideMenuType {
  children: React.ReactNode;
}

interface userStatusType {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

const SideMenu: React.FC<sideMenuType> = ({ children }) => {
  const { push } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const [userStatus, setUserStatus] = useState<userStatusType>({
    isAdmin: false,
    isLoggedIn: false,
  });
  const state = useAppSelector((r) => r.basket.list);
  const toast = useToast();

  useEffect(() => {
    const { isLoggedIn } = checkUserStatus();
    const { isAdmin } = checkUserStatus();
    setUserStatus({ isAdmin: isAdmin, isLoggedIn: isLoggedIn });
  }, []);

  const logoutHandler = () => {
    if (typeof window !== "undefined") {
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC path=/";
      document.cookie =
        "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC path=/";
      toast({
        position: "bottom-left",
        render: () => (
          <Box color={color.text.primary} p={3} bg={color.primary.main}>
            شما با موفقیت خارج شدید
          </Box>
        ),
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const dropDownItems = {
    enterDropdown: {
      title: "ورود",
      list: [
        { name: "ورود", url: "/login" },
        { name: "ثبت نام", url: "/register" },
      ],
    },
    userDropDown: {
      title: "کاربر",
      list: [
        {
          name: "پروفایل",
          url: "/user/profile",
        },
        {
          name: "خروج از حساب",
          url: "/",
          onClick: () => logoutHandler(),
        },
      ],
    },
    adminDropDown: {
      title: "ادمین",
      list: [
        {
          name: "داشبود",
          url: "/admin/dashboard",
        },
        {
          name: "محصول جدید",
          url: "/admin/product/create",
        },
        {
          name: "مدیریت کاربران",
          url: "/admin/users",
        },
        {
          name: "سفارشات",
          url: "/admin/orders",
        },
        {
          name: "پروفایل",
          url: "/user/profile",
        },
        {
          name: "خروج از حساب",
          url: "/",
          onClick: () => logoutHandler(),
        },
      ],
    },
  };

  const sidemenuList = [
    {
      title: "خانه",
      pathName: "/",
      icon: <AiOutlineHome />,
      notif: null,
    },
    {
      title: "فروشگاه",
      pathName: "/shop",
      icon: <AiOutlineShopping />,
      notif: null,
    },
    {
      title: "سبد خرید",
      pathName: "/user/cart",
      icon: <AiOutlineShoppingCart />,
      notif: state.length,
    },
    {
      title: "علاقه مندی ها",
      pathName: "/user/favorite",
      icon: <MdFavorite />,
      notif: null,
    },
  ];

  return (
    <>
      <Box position={"relative"} zIndex="100">
        <Box width="85px" height="100vh"></Box>
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
            {sidemenuList.map((item) => (
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
          <Box pos="absolute" bottom="10px" right="10px">
            {!userStatus.isLoggedIn && (
              <DropDown
                title={dropDownItems.enterDropdown.title}
                list={dropDownItems.enterDropdown.list}
              />
            )}
            {userStatus.isLoggedIn && userStatus.isAdmin && (
              <DropDown
                title={dropDownItems.adminDropDown.title}
                list={dropDownItems.adminDropDown.list}
              />
            )}
            {userStatus.isLoggedIn && !userStatus.isAdmin && (
              <DropDown
                title={dropDownItems.userDropDown.title}
                list={dropDownItems.userDropDown.list}
              />
            )}
          </Box>
          <Box pos="absolute" bottom="50px" right="20px">
            <Switch
              colorScheme="pink"
              size="sm"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
          </Box>
        </Flex>
      </Box>
      <Box width={"100%"}>{children}</Box>
    </>
  );
};

export default SideMenu;

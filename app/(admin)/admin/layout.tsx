'use client'
import SideMenu from "@/components/sidemenu/SideMenu";
import { useAppSelector } from "@/lib/redux/hooks";
import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

interface layoutProps {
  children: React.ReactNode;
}
const dropDownItems = {
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
      url: "/admin/dashboard",
    },
    {
      name: "خروج از حساب",
      url: "/admin/logout",
    },
  ],
};

const layout: React.FC<layoutProps> = ({ children }) => {
  const state = useAppSelector(r => r.basket.list)
  const sidemenuList = [
    {
      title: "داشبورد",
      pathName: "/admin/dashboard",
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
      pathName: "/user/card/checkout",
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
    <Flex>
      <SideMenu list={sidemenuList} dropDown={dropDownItems}>
        {children}
      </SideMenu>
    </Flex>
  );
};

export default layout;

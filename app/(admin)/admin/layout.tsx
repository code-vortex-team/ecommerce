import SideMenu from "@/components/sidemenu/SideMenu";
import { Flex, list } from "@chakra-ui/react";
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
      url: "/admin/add-new-product",
    },
    {
      name: "مدیریت کاربران",
      url: "/admin/users-management",
    },
    {
      name: "سفارشات",
      url: "/admin/orders",
    },
    {
      name: "پروفایل",
      url: "/admin/profile",
    },
    {
      name: "خروج از حساب",
      url: "/admin/logout",
    },
  ],
};

const sidemenuList = [
  {
    title: "داشبورد",
    pathName: "/dashboard",
    icon: <AiOutlineHome />,
    notif: null,
  },
  {
    title: "فروشگاه",
    pathName: "/store",
    icon: <AiOutlineShopping />,
    notif: null,
  },
  {
    title: "سبد خرید",
    pathName: "/shop-card",
    icon: <AiOutlineShoppingCart />,
    notif: 1,
  },
  {
    title: "علاقه مندی ها",
    pathName: "/favorite",
    icon: <MdFavorite />,
    notif: null,
  },
];

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <Flex>
      <SideMenu
        list={sidemenuList}
        dropDown={dropDownItems}
      >
        {children}
      </SideMenu>
    </Flex>
  );
};

export default layout;

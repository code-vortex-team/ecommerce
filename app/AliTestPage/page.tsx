import SideMenu from "@/components/sidemenu/SideMenu";
import color from "@/components/colors"
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Box } from "@chakra-ui/react";

const sidemenulist = [
  {
    title: "داشبورد",
    pathName: "/dashboard",
    icon: <IoHomeOutline />,
    notif: null,
  },
  {
    title: "فروشگاه",
    pathName: "/store",
    icon: <RiShoppingBag4Line />,
    notif: null,
  },
  {
    title: "سبدخرید",
    pathName: "/shopping-cart",
    icon: <MdOutlineShoppingCart />,
    notif: 1,
  },
  {
    title: "علاقه مندی ها",
    pathName: "/favorite",
    icon: <MdFavoriteBorder />,
    notif: null,
  },
];

const Page = () => {
  return (
    <Box>
      <SideMenu list={sidemenulist} />
    </Box>
  );
};

export default Page;

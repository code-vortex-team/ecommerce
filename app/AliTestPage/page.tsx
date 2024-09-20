import SideMenu from "@/components/sidemenu/SideMenu";

import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import SideMenuMain from "@/components/sidemenu/SideMenuMain";
import {Box, Flex} from "@chakra-ui/react";


const sidemenulist = [
  { title: "داشبورد", pathName: "/dashboard", icon: <IoHomeOutline/> },
  { title: "فروشگاه", pathName: "/store", icon: <RiShoppingBag4Line/> },
  { title: "سبدخرید", pathName: "/shopping-cart", icon: <MdOutlineShoppingCart/> },
  { title: "علاقه مندی ها", pathName: "/favorite", icon: <MdFavoriteBorder/> },
];

const Page = () => {
  return (
    <Flex>
      <SideMenuMain list={sidemenulist}/>
    </Flex>
  );
};

export default Page;

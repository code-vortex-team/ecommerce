import SideMenu from "@/components/sidemenu/SideMenu";

import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";


const sidemenulist = [
  { title: "داشبورد", pathName: "/dashboard", icon: <IoHomeOutline/> },
  { title: "فروشگاه", pathName: "/store", icon: <RiShoppingBag4Line/> },
  { title: "سبدخرید", pathName: "/shopping-cart", icon: <MdOutlineShoppingCart/> },
  { title: "علاقه مندی ها", pathName: "/favorite", icon: <MdFavoriteBorder/> },
];

const Page = () => {
  return (
    <>
      <SideMenu sidemenudata={sidemenulist} />
    </>
  );
};

export default Page;

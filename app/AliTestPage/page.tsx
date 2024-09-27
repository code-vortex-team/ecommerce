import SideMenu from "@/components/sidemenu/SideMenu";
import { Box } from "@chakra-ui/react";
import { title } from "process";
// import ProductCard from "@/components/product-card/ProductCard";

// const productInformation = {
//   title: "Apple iPhone 14 Pro",
//   price: '10,000',
//   content:
//     "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر است نمایشگر Retina XDR ...",
//   badge: "Apple",
// };

// const source =
//   "https://s3-alpha-sig.figma.com/img/3dc0/c069/7ad08037bec720feec0056d30cd179d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RuU6DTNQTSTF3yfVTk9mHRy5eUhIari0DGGX~~Rh~pTnIRua~0XQRXuVZcnOqVAoONtKhSdTvTXhLpBmGBlz-3754KjnV0fKlcNV4QgcFF2LsZ65n6lhMz7gRbH-wj5pd6BNcG8WFn5Px3DvvR1j8q4lhYBO5a5IOHgNtiBs2vTjzjzBB27urc8AKyI7Czvohd6HWbMF8JrTvNBnMU~IYdbZiSb5kDQFaWyluXdp99MjjVqWLJ9DI-ubM~Hny9RnM010kdSLEF6HFU1VCOSPEvK9Rn3NHuyNayDtJ40iIaM3i2NHQssF4ILqdQ3FRH~67RTbJW8dmds5CIAH2xDD0A__";

import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

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
      {/* <ProductCard _id='1'image = {source} description={productInformation.content} price= {productInformation.price} name={productInformation.title} category={productInformation.badge} /> */}
      <SideMenu list={sidemenulist}/>
    </Box>
  );
};

export default Page;


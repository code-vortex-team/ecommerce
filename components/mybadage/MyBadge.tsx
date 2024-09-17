import { Badge } from "@chakra-ui/react";
interface MyBadgeProp {
  price: number; // The price to be displayed in the badge. The price should be a positive integer.
  size: "sm" | "md" | "lg"; // The size of the badge. The size should be one of "sm" or "lg".
}
const MyBadge = ({size , price} : MyBadgeProp) => {
  return <Badge dir="rtl" size={size}>{price.toLocaleString()} تومان</Badge>;
};

export default MyBadge;

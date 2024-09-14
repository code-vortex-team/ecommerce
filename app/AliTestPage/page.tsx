import ShopAddress from "@/components/shopAddress/ShopAddress";
import { Box } from "@chakra-ui/react";

const information = [
  { title: " شماره سفارش", value: 224568 },
  { title: "نام", value: "علی کرامت" },
  { title: "ایمیل", value: "Example@example.com" },
  { title: "آدرس", value: "تهران" },
  { title: "روش پرداخت", value: "به پرداخت ملت" },
];
const Page = () => {
  return (
    <Box>
      <ShopAddress title="آدرس دریافت" data={information} />
    </Box>
  );
};

export default Page;

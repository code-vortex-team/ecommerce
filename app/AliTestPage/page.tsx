import ShopAddress from "@/components/shopAddress/ShopAddress";
import { Box } from "@chakra-ui/react";
import OrderDetails from "@/components/orderdetails/OrderDetails";

const information = [
  { title: " شماره سفارش", value: 224568 },
  { title: "نام", value: "علی کرامت" },
  { title: "ایمیل", value: "Example@example.com" },
  { title: "آدرس", value: "تهران" },
  { title: "روش پرداخت", value: "به پرداخت ملت" },
];

const prices = {
  subtotal: 120000,
  trackingFee: 30000,
  tax: 1000,
};

const Page = () => {
  return (
    <Box>
        <OrderDetails prices={prices} payWay="درگاه پرداخت پاسارگاد" address="تهران خ آزادی نبش کوچه قنبری پلاک ۱۹۲"  />
      <ShopAddress title="آدرس دریافت" data={information} />
    </Box>
  );
};



export default Page;
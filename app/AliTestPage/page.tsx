import OrderDetails from "@/components/orderdetails/OrderDetails";

const prices = {
  subtotal: 120000,
  trackingFee: 30000,
  tax: 1000,
};

const Page = () => {
  return (
    <>
      <OrderDetails prices={prices} payWay="درگاه پرداخت پاسارگاد" address="تهران خ آزادی نبش کوچه قنبری پلاک ۱۹۲"  />
    </>
  );
};

export default Page;

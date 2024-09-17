import MyBadge from "@/components/mybadage/MyBadge";
const Page = () => {

    return (<>
    <MyBadge size="lg" price={10000} />
    <MyBadge size="sm" price={10000} />
    </>)
}

export default Page;
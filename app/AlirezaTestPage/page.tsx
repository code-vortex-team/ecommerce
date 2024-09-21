import React from 'react';
import {Box, Button} from '@chakra-ui/react';
import ShoppingData from "@/components/shoppingData/ShoppingData";
import Like from "@/components/like/Like";
import DropDown from "@/components/dropDown/DropDown";


const Page: React.FC = () => {

    const userLinks = [
        {name: "Profile", url: "/profile"},
        {name: "Settings", url: "/settings"},
        {name: "Logout", url: "/logout"},
    ];

    const adminLinks = [
        {name: "Dashboard", url: "/dashboard"},
        {name: "Manage Users", url: "/manage-users"},
        {name: "Site Settings", url: "/site-settings"},
    ];

    const data = [
        {value: 'Value 1', item: 'Item 1'},
        {value: 'Value 2', item: 'Item 2'},
        {value: 'Value 3', item: 'Item 3'},
    ];

    return (
        <div>
            <Button variant="roundedPinkButton">فروشگاه</Button>
            <Button variant="regularPinkButton">مشاهده بیشتر</Button>
            <Like/>
            <Box p={4}>
                <ShoppingData title="My List" list={data}/>

                <DropDown title="user" list={userLinks}/>
            </Box>

        </div>
    );
};

export default Page;


import React from 'react';
import ShoppingData from '@/components/shoppingData/ShoppingData';
import { Button, Box } from '@chakra-ui/react';
import DropDown from '@/components/dropDown/DropDown';
import { Like } from '@/components/like/Like';

const Page: React.FC = () => {

  const data = [
    { value: 'Value 1', item: 'Item 1' },
    { value: 'Value 2', item: 'Item 2' },
    { value: 'Value 3', item: 'Item 3' },
  ];

  return (
    <div>
      <Button variant="roundedPinkButton">فروشگاه</Button>
      <Button variant="regularPinkButton">مشاهده بیشتر</Button>

      <Box p={4}>
        <ShoppingData title="My List" list={data} />
        <Like/>
      </Box>
      
    </div>
  );
};

export default Page;

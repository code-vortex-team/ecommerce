
import React from 'react';
import ShoppingData from '@/components/shoppingData/ShoppingData';
import { Button, Box } from '@chakra-ui/react';

const Page: React.FC = () => {

  const data = [
    { value: 'Value 1', item: 'Item 1' },
    { value: 'Value 2', item: 'Item 2' },
    { value: 'Value 3', item: 'Item 3' },
  ];

  return (
    <div>
      <Button variant="button1">فروشگاه</Button>
      <Button variant="button2">مشاهده بیشتر</Button>

      <Box p={4}>
        <ShoppingData title="My List" list={data} />
      </Box>
    </div>
  );
};

export default Page;

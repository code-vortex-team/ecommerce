// import { Button } from '@chakra-ui/react';
// import React from 'react';

// const StyledButton: React.FC = () => {
//   return (
//     <Button
//       bg="pink.600"        
//       color="white"        
//       _hover={{
//         bg: "#831747",   
//         color: "black",     
//         transform: "scale(1.05)", 
//       }}
     
//     >
//       فروشگاه
//     </Button>
//   );
// };

// export default StyledButton;
// // theme.ts


import { extendTheme } from '@chakra-ui/react';
import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    outline: {
      color: 'pink.600'  ,
      _hover: {
        bg: '#831747',   
        color: 'white', 
      },
    },
    solid: {
      bg: 'pink.600' ,
      color: 'white',
      _hover: {
        bg: '#831747',   
        color: 'white',     
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

const Button1 = extendTheme({
  components: {
    Button,
  },
});

export default Button1;

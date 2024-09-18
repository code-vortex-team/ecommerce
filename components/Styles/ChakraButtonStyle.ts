import { defineStyleConfig } from '@chakra-ui/react';

export const ChakraButtonStyle = defineStyleConfig({

    variants: {
        roundedPinkButton: {
            bg: '#DB2777',
            color: 'white',
            minWidth: '8.4375rem',
            height: '3rem',
            padding: '0.5rem 2rem',
            gap: '0rem',
            borderRadius: '62.5rem',
            _hover: {
                bg: '#831747',
                color: 'white',
            },
        },
        regularPinkButton: {
            bg: '#DB2777',
            color: 'white',
            minWidthad: '8.25rem',
            height: '2.25rem',
            padding: '0.5rem 0.75rem',
            gap: '0rem',
            borderRadius: '0.5rem',
            _hover: {
                bg: '#831747',
                color: 'white',
            },
        },


    },

});





import {defineStyleConfig} from '@chakra-ui/react';
import {color} from "@/components/colors";

export const ChakraButtonStyle = defineStyleConfig({

    variants: {
        roundedPinkButton: {
            bg: color.primary.main,
            color: 'white',
            minWidth: '8.4375rem',
            height: '3rem',
            padding: '0.5rem 2rem',
            gap: '0rem',
            borderRadius: '62.5rem',
            _hover: {
                bg: color.primary.dark,
                color: 'white',
            },
        },
        regularPinkButton: {
            bg: color.primary.main,
            color: 'white',
            minWidth: '8.25rem',
            height: '2.25rem',
            padding: '0.5rem 0.75rem',
            gap: '0rem',
            borderRadius: '0.5rem',
            _hover: {
                bg: color.primary.dark,
                color: 'white',
            },
        },


    },

});





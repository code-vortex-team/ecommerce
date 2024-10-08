import React from 'react';
import {Box} from "@chakra-ui/react";

const Like = () => {
    return (
        <Box
            sx={{
                "*": {stroke: "#DFE3E8"},
                _hover: {
                    "*": {
                        fill: "#DB2777"
                    }
                },

            }}
        >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61564 2.38125L8.00002 3.01562L7.38439 2.38125C5.81564 0.759375 3.26564 0.496875 1.55314 1.95625C-0.409358 3.63125 -0.512483 6.6375 1.24377 8.45312L7.29064 14.6969C7.68127 15.1 8.31564 15.1 8.70627 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"
                    fill="transparent"/>
            </svg>


        </Box>
    );
};

export default Like;
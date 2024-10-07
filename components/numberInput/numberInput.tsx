"use client"
import React, {useState} from "react";
import {Box, Flex} from "@chakra-ui/react";
import {color} from "@/components/colors";

const NumberInput = ({defaultValue = 0, onChange}) => {
    const [value, setValue] = useState(defaultValue);

    const increase = () => {
        const newValue = value + 1
        setValue(newValue);
        onChange && onChange(newValue, "increase");

    };

    const decrease = () => {
        const newValue = value - 1
        setValue(newValue);
        onChange && onChange(newValue, "decrease");
    };

    return (
        <Flex borderRadius={8}
              width={"96px"}
              height={"40px"}
              border={"1px solid"}
              borderColor={color.base.textFieldStroke}
              bgColor={color.base.textField}
              display={"flex"}
              position="relative"
              alignItems={"center"}
              justifyContent={"flex-end"}
              p={1}
              pl={3}
        >
            <Box>{value}</Box>


            <Box>
                <Box onClick={increase}
                     position="absolute"
                     right={5} top={2}
                     transform={"rotate(180deg)"}
                     cursor={"pointer"}
                >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Box as="path"
                             d="M6.00005 4.2002L9.90005 0.300195C10.0834 0.116862 10.3167 0.0251952 10.6 0.0251952C10.8834 0.0251952 11.1167 0.116862 11.3 0.300195C11.4834 0.483529 11.575 0.716862 11.575 1.0002C11.575 1.28353 11.4834 1.51686 11.3 1.7002L6.70005 6.3002C6.60005 6.4002 6.49172 6.47103 6.37505 6.5127C6.25838 6.55436 6.13338 6.5752 6.00005 6.5752C5.86672 6.5752 5.74172 6.55436 5.62505 6.5127C5.50838 6.47103 5.40005 6.4002 5.30005 6.3002L0.700049 1.7002C0.516716 1.51686 0.425049 1.28353 0.425049 1.0002C0.425049 0.716862 0.516716 0.483529 0.700049 0.300195C0.883382 0.116862 1.11672 0.0251951 1.40005 0.0251951C1.68338 0.0251951 1.91672 0.116862 2.10005 0.300195L6.00005 4.2002Z"
                             fill={color.icon.primary}/>
                    </svg>

                </Box>
                <Box onClick={decrease}
                     position="absolute" right={5} bottom={2}
                     cursor={"pointer"}

                >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Box as="path"
                             d="M6.00005 4.2002L9.90005 0.300195C10.0834 0.116862 10.3167 0.0251952 10.6 0.0251952C10.8834 0.0251952 11.1167 0.116862 11.3 0.300195C11.4834 0.483529 11.575 0.716862 11.575 1.0002C11.575 1.28353 11.4834 1.51686 11.3 1.7002L6.70005 6.3002C6.60005 6.4002 6.49172 6.47103 6.37505 6.5127C6.25838 6.55436 6.13338 6.5752 6.00005 6.5752C5.86672 6.5752 5.74172 6.55436 5.62505 6.5127C5.50838 6.47103 5.40005 6.4002 5.30005 6.3002L0.700049 1.7002C0.516716 1.51686 0.425049 1.28353 0.425049 1.0002C0.425049 0.716862 0.516716 0.483529 0.700049 0.300195C0.883382 0.116862 1.11672 0.0251951 1.40005 0.0251951C1.68338 0.0251951 1.91672 0.116862 2.10005 0.300195L6.00005 4.2002Z"
                             fill={color.icon.primary}/>
                    </svg>
                </Box>
            </Box>
        </Flex>
    );
};

export default NumberInput;

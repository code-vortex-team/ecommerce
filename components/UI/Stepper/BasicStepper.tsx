"use client"
import {Box, Step, Stepper, StepSeparator, StepStatus, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {color} from "@/components/colors";

interface Interface {
    activeIndex: number
    list: Array<{
        title: string
    }>
}

const BasicStepper: React.FC<Interface> = ({activeIndex, list}) => {

    return (<>
        <Stepper index={activeIndex}>
            {list.map((item, index) => (<Step key={index}>
                <StepStatus
                    complete={<>
                        <VStack color={color.success.main}>
                            <Box
                                fontSize={16}
                                fontWeight={400}
                                color={color.text.primary}
                            >
                                {item.title}
                            </Box>
                            <Box>
                                ✅
                            </Box>
                        </VStack>
                    </>}
                    incomplete={<>
                        <Text
                            fontSize={16}
                            fontWeight={400}
                            color={color.text.primary}
                        >
                            {item.title}
                        </Text>
                    </>}
                    active={<Box>{item.title}</Box>}
                />


                <StepSeparator
                    _horizontal={{
                        backgroundColor: index < activeIndex ? color.success.main : 'gray',
                    }}
                />

            </Step>))}
        </Stepper>
    </>)
}

export default BasicStepper;
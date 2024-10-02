"use client"
import {Box, Container} from "@chakra-ui/react";
import BasicStepper from "@/components/UI/Stepper/BasicStepper";
import {useState} from "react";
import GetAddressForm from "@/components/Forms/getAddressForm";

const Page = (props) => {
    const [index, setIndex] = useState(1)


    const list = [
        {
            title: "ورود"
        },
        {
            title: "آدرس"
        },
        {
            title: "خلاصه خرید"
        },
    ]


    return (<>

        <Container maxW={"2xl"} py={5}>
            <Box dir={"ltr"}>
                <BasicStepper activeIndex={index} list={list}></BasicStepper>
            </Box>

            <Box pt={10}>
                {index === 1 &&
                    <GetAddressForm onSubmit={() => {
                        setIndex(2)
                    }}/>
                }

            </Box>
        </Container>


    </>)
}

export default Page;
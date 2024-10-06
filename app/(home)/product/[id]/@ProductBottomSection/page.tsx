"use client"
import {Box, Container, GridItem, SimpleGrid} from "@chakra-ui/react";
import {useMemo, useState} from "react";
import {color} from "@/components/colors";
import Related from "./related";
import Reviews from "./reviews";
import ReviewSubmit from "./reviewSubmit";

const ProductBottomSection = () => {

    const [step, setStep] = useState(0)

    const steps: Array<any> = useMemo(() => {
        return [
            {title: "ثبت نظر", component: <ReviewSubmit/>},
            {title: "مشاهده نظرات", component: <Reviews/>},
            {title: "محصولات مرتبط", component: <Related/>},

        ]
    }, [])


    return (<>
        <Container maxW={"100%"} pt={70} pb={70}>
            <SimpleGrid columns={{base: 6, md: 12}} pt={10}>
                <GridItem colSpan={3} display={"flex"} flexDirection={{md: "column", base: "row"}} gap={4} pb={3}
                          whiteSpace={"nowrap"}>
                    {steps.map((item, index) => (
                        <Box key={index}
                             color={color.text.primary}
                             fontWeight={index == step ? "bold" : 400}
                             cursor={"pointer"}
                             onClick={() => {
                                 setStep(index)
                             }}
                        >{item.title}</Box>
                    ))}

                </GridItem>
                <GridItem colSpan={9} minHeight={300}>
                    {steps.map((item, index) => (<Box key={index} display={index == step ? "" : "none"}>
                        {steps[index].component}
                    </Box>))}
                </GridItem>
            </SimpleGrid>
        </Container>
    </>)
}

export default ProductBottomSection;
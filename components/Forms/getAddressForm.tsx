import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Text,
    VStack
} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import {useForm} from "react-hook-form";
import {color} from "@/components/colors";

interface Interface {
    onSubmit: (data) => void
}

const GetAddressForm: React.FC<Interface> = ({onSubmit}) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    }: ReactNode | undefined = useForm<FormData>();


    return (<Box>

        <Heading as="h2" fontSize={24} fontWeight={500} color={color.text.primary}>
            آدرس دریافت

        </Heading>
        <VStack as="form" pt={5} gap={3} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.firstName} mb={4}>
                <FormLabel htmlFor="firstName">آدرس</FormLabel>
                <Input
                    id="firstName"
                    placeholder="آدرس را وارد نمایید"
                    {...register('firstName', {required: 'First name is required'})}
                />
                <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.firstName} mb={4}>
                <FormLabel htmlFor="firstName">شهر</FormLabel>
                <Input
                    id="firstName"
                    placeholder="شهر را وارد نمایید"
                    {...register('firstName', {required: 'First name is required'})}
                />
                <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.firstName} mb={4}>
                <FormLabel htmlFor="firstName">کشور</FormLabel>
                <Input
                    id="firstName"
                    placeholder="کشور را وارد نمایید"
                    {...register('firstName', {required: 'First name is required'})}
                />
                <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.firstName} mb={4}>
                <FormLabel htmlFor="firstName">کدپستی</FormLabel>
                <Input
                    id="firstName"
                    placeholder="کدپستی را وارد نمایید"
                    {...register('firstName', {required: 'First name is required'})}
                />
                <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
            </FormControl>
            <Box width={"100%"}>
                <Text>
                    روش پرداخت
                </Text>
                <Box py={3}>
                    <RadioGroup>
                        <Radio name="form-name" colorScheme={"pink"}> درگاه پرداخت پاسارگاد</Radio>
                    </RadioGroup>
                </Box>
            </Box>
            <Button type="submit" minWidth={"100%"} variant="roundedPinkButton">ادامه</Button>

        </VStack>
    </Box>)
}

export default GetAddressForm;
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
            <FormControl isInvalid={!!errors.address} mb={4}>
                <FormLabel htmlFor="address">آدرس</FormLabel>
                <Input
                    id="firstName"
                    placeholder="آدرس را وارد نمایید"
                    {...register('address', {required: 'آدرس خود را در این قسمت وارد کنید'})}
                />
                <FormErrorMessage>
                    {errors.address && errors.address.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.city} mb={4}>
                <FormLabel htmlFor="city">شهر</FormLabel>
                <Input
                    id="city"
                    placeholder="شهر را وارد نمایید"
                    {...register('city', {required: 'شهر خود را در این قسمت وارد کنید'})}
                />
                <FormErrorMessage>
                    {errors.city && errors.city.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.country} mb={4}>
                <FormLabel htmlFor="country">کشور</FormLabel>
                <Input
                    id="country"
                    placeholder="کشور را وارد نمایید"
                    {...register('country', {required: 'کشور خود را در این قسمت وارد کنید'})}
                />
                <FormErrorMessage>
                    {errors.country && errors.country.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.zipcode} mb={4}>
                <FormLabel htmlFor="zipcode">کدپستی</FormLabel>
                <Input
                    id="zipcode"
                    placeholder="کدپستی را وارد نمایید"
                    {...register('zipcode', {required: 'کدپستی خود را در این قسمت وارد کنید'})}
                />
                <FormErrorMessage>
                    {errors.zipcode && errors.zipcode.message}
                </FormErrorMessage>
            </FormControl>
            <Box width={"100%"}>
                <Text>
                    روش پرداخت
                </Text>
                <Box py={3}>
                    <RadioGroup>
                        <Radio name="form-name" colorScheme={"pink"} isChecked={true}> درگاه پرداخت پاسارگاد</Radio>
                    </RadioGroup>
                </Box>
            </Box>
            <Button type="submit" minWidth={"100%"} variant="roundedPinkButton">ادامه</Button>

        </VStack>
    </Box>)
}

export default GetAddressForm;
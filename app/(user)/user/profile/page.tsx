"use client";
import React, {ReactNode, useEffect} from "react";
import {useForm} from "react-hook-form";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    useToast,
    VStack
} from "@chakra-ui/react";
import {color} from "@/components/colors";
import {UserApi} from "@/lib/openapi/generated-client";
import {useRouter} from "next/navigation";


const Page = () => {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: {errors},
    }: ReactNode | undefined = useForm<FormData>();

    const password = watch("password");
    const toast = useToast()
    const {push} = useRouter()

    useEffect(() => {
        new UserApi().apiUsersProfileGet().then((r) => {
            reset(r.data)
        })
    }, []);


    const onSubmit = handleSubmit(data => {
        new UserApi().apiUsersProfilePut({
            "username": data.username,
            "email": data.email,
            "password": data.password
        }).then(() => {
            toast({
                title: 'تغیرات با موفقیت ثبت شد',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }).catch((e) => {
            toast({
                title: 'تغیرات با موفقیت ثبت شد',
                description: e?.response?.data?.message || "خطا در سرور !!",

                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        })
    });

    return (<Container pt={"10vh"} maxW={640}>

        <Box fontSize={24} fontWeight={500} color={color.text.primary}>
            پروفایل
        </Box>
        <VStack as="form" pt={5} gap={3} onSubmit={onSubmit}>
            <FormControl isInvalid={!!errors.username} mb={4}>
                <FormLabel htmlFor="username">نام</FormLabel>
                <Input
                    id="username"
                    placeholder="نام خود را وارد نمایید"
                    {...register('username', {required: 'نام خود را وارد نمایید'})}
                />
                <FormErrorMessage>
                    {errors.username && errors.username.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email} mb={4}>
                <FormLabel htmlFor="email">ایمیل</FormLabel>
                <Input
                    id="email"
                    placeholder="ایمیل را وارد نمایید"
                    {...register('email', {required: 'ایمیل را وارد نمایید'})}
                />
                <FormErrorMessage>
                    {errors.city && errors.city.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password} mb={4}>
                <FormLabel htmlFor="password">رمزعبور</FormLabel>
                <Input
                    id="password"
                    placeholder="رمزعبور را وارد نمایید"
                    {...register('password',)}
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.ConfirmPassword} mb={4}>
                <FormLabel htmlFor="ConfirmPassword">تکرار رمزعبور</FormLabel>
                <Input
                    id="ConfirmPassword"
                    placeholder="تکرار رمزعبور خود را وارد نمایید"
                    {...register('ConfirmPassword', {
                        validate: (value) => {

                            if (password == undefined) {
                                return true
                            }
                            return value === password || "رمزعبور و تأیید آن یکسان نیستند"
                        },


                    })}
                />
                <FormErrorMessage>
                    {errors.ConfirmPassword && errors.ConfirmPassword.message}
                </FormErrorMessage>
            </FormControl>
            <HStack justifyContent={"space-between"} width={"full"}>
                <Button minWidth={"auto"} display={"inline-block"} variant="regularPinkButton"
                        onClick={() => {
                            push("/user/orders")
                        }}

                >سفارشات
                    من</Button>
                <Button type="submit" minWidth={"auto"} display={"inline-block"}
                        variant="regularPinkButton">بروزرسانی</Button>
            </HStack>


        </VStack>
    </Container>)
}

export default Page;
'use client';
import {useForm} from "react-hook-form";
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Link, Text, useToast} from "@chakra-ui/react";
import {color} from "@/components/colors";
import {ReactNode, useState} from "react";
import {useRouter} from "next/navigation";

const Page = ({searchParams}) => {
    const {register, formState: {errors}, handleSubmit}: ReactNode | unknown = useForm<{
        email: string;
        password: string;
    }>();

    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast()
    const {push} = useRouter()

    const onSubmit = async (data) => {

        setIsLoading(true);
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": data.email,
                "password": data.password
            }),
        })
        if (res.ok) {
            toast({
                title: 'ورود انجام شد',
                description: "ورود شما با موفقیت انجام شد!",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            if (searchParams?.redirect) {
                push(searchParams?.redirect)
            } else {
                push("/")
            }

        } else {

            let data = await res.json()
            toast({
                title: 'ورود انجام نشد',
                description: data.message || "",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
        setIsLoading(false);
    };

    return (
        <>
            <Text color="text.primary" mb={2} fontWeight={500} fontSize='1.5rem'>
                ورود
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email != null}>
                    <FormLabel mt='2rem' mb='0.5rem' color="text.primary" fontSize='1rem'>ایمیل</FormLabel>
                    <Input placeholder={"ایمیل خود را وارد نمایید"} color={color.text.secondary} fontSize='1rem'
                           bg={color.base.textField} borderColor={color.base.textFieldStroke}
                           _focusVisible={{border: "none"}}
                           {...register("email", {
                               required: "فیلد ضروری میباشد"
                           })}
                    />
                    <FormErrorMessage>
                        {errors.email && `${errors.email.message}`}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.password != null}>
                    <FormLabel mt='1.5rem' mb='0.5rem' color={color.text.primary} fontSize='1rem'>رمزعبور</FormLabel>
                    <Input placeholder={"رمزعبور خود را وارد نمایید"} color={color.text.secondary} fontSize='1rem'
                           bg={color.base.textField} borderColor={color.base.textFieldStroke}
                           _focusVisible={{border: "none"}}
                           {...register("password", {
                               required: "فیلد ضروری میباشد"
                           })}
                    />
                    <FormErrorMessage>
                        {errors.password && `${errors.password.message}`}
                    </FormErrorMessage>
                </FormControl>
                <Button width="auto" mt="2rem" variant="regularPinkButton" type="submit"
                        isLoading={isLoading}>ورود</Button>
            </form>
            <Text mt="1.5rem" fontSize="1rem" fontWeight={400} color={color.text.primary}>
                عضو نیستید؟{' '}


            </Text>
            <Box>
                <Link href={"/register"} color="pink.500" fontWeight="bold"> ثبت نام</Link>
            </Box>
        </>
    );
}

export default Page;

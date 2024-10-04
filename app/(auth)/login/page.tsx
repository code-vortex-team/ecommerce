'use client';
import { useForm } from "react-hook-form";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { UserApi } from "@/lib/openapi/generated-client";
import { color } from "@/components/colors";
import { useState } from "react";

const Page = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<{ email: string; password: string; }>();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);
        new UserApi().apiUsersAuthPost({
            "email": data.email,
            "password": data.password
        })
            .then((r) => {
                alert("تو تونستی وارد بشی");
                console.log(r.data, "دیتات اینه");
            })
            .catch((e) => {
                alert("تو نتونستی وارد بشی متاسفم!");
                console.log(e.response?.data || e.message, "ارورت اینه");
            })
            .finally(() => {
                setIsLoading(false);
            });
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
                           _focusVisible={{ border: "none" }}
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
                           _focusVisible={{ border: "none" }}
                           {...register("password", {
                               required: "فیلد ضروری میباشد"
                           })}
                    />
                    <FormErrorMessage>
                        {errors.password && `${errors.password.message}`}
                    </FormErrorMessage>
                </FormControl>
                <Button width="auto" mt="2rem" variant="regularPinkButton" type="submit" isLoading={isLoading}>ورود</Button>
            </form>
            <Text mt="1.5rem" fontSize="1rem" fontWeight={400} color={color.text.primary}>
                عضو نیستید؟{' '}
                <NextLink href="../register" passHref>
                    <Link color="pink.500" fontWeight="bold"> ثبت نام</Link>
                </NextLink>
            </Text>
        </>
    );
}

export default Page;

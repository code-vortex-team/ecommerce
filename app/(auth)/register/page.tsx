'use client';
import {useForm} from "react-hook-form";
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Link, Text, useToast} from "@chakra-ui/react";
import {useState} from "react";
import {useRouter} from "next/navigation";

const Page = () => {
    const {register, formState: {errors}, handleSubmit, watch} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const password = watch("Password");
    const toast = useToast()
    const {push} = useRouter()
    const onSubmit = async (data) => {
        setIsLoading(true);


        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": data.Name,
                "email": data.Email,
                "password": data.Password,
                "confirm_Password": data.ConfirmPassword
            }),
        })
        if (res.ok) {
            toast({
                title: 'ثبت نام انجام شد',
                description: "ثبت نام شما با موفقیت انجام شد!",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            push("/")
        } else {

            let data = await res.json()

            toast({
                title: 'ثبت نام انجام نشد!!',
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
            <Text color="text.primary" mb={2} fontWeight={500} fontSize="1.5rem">
                ثبت نام
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.Name != null}>
                    <FormLabel mt="2rem" mb="0.5rem" color="text.primary" fontSize="1rem">
                        نام
                    </FormLabel>
                    <Input
                        placeholder="نام خود را وارد نمایید"
                        color="text.secondary"
                        fontSize="1rem"
                        bg="base.textField"
                        borderColor="base.textFieldStroke"
                        _focusVisible={{border: "none"}}
                        {...register("Name", {
                            required: "فیلد ضروری میباشد",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.Name && `${errors.Name.message}`}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.Email != null}>
                    <FormLabel mt="2rem" mb="0.5rem" color="text.primary" fontSize="1rem">
                        ایمیل
                    </FormLabel>
                    <Input
                        type="email"
                        placeholder="ایمیل خود را وارد نمایید"
                        color="text.secondary"
                        fontSize="1rem"
                        bg="base.textField"
                        borderColor="base.textFieldStroke"
                        _focusVisible={{border: "none"}}
                        {...register("Email", {
                            required: "فیلد ضروری میباشد",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.Email && `${errors.Email.message}`}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.Password != null}>
                    <FormLabel mt="1.5rem" mb="0.5rem" color="text.primary" fontSize="1rem">
                        رمزعبور
                    </FormLabel>
                    <Input
                        type="password"
                        placeholder="رمزعبور خود را وارد نمایید"
                        color="text.secondary"
                        fontSize="1rem"
                        bg="base.textField"
                        borderColor="base.textFieldStroke"
                        _focusVisible={{border: "none"}}
                        {...register("Password", {
                            required: "فیلد ضروری میباشد",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.Password && `${errors.Password.message}`}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.ConfirmPassword != null}>
                    <FormLabel mt="1.5rem" mb="0.5rem" color="text.primary" fontSize="1rem">
                        تکرار رمزعبور
                    </FormLabel>
                    <Input
                        type="password"
                        placeholder="رمزعبور خود را دوباره وارد نمایید"
                        color="text.secondary"
                        fontSize="1rem"
                        bg="base.textField"
                        borderColor="base.textFieldStroke"
                        _focusVisible={{border: "none"}}
                        {...register("ConfirmPassword", {
                            required: "فیلد ضروری میباشد",
                            validate: (value) =>
                                value === password || "رمزعبور و تأیید آن یکسان نیستند",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.ConfirmPassword && `${errors.ConfirmPassword.message}`}
                    </FormErrorMessage>
                </FormControl>

                <Button width="auto" mt="2rem" variant="regularPinkButton" type="submit" isLoading={isLoading}>
                    ثبت نام
                </Button>
            </form>

            <Text mt="1.5rem" fontSize="1rem" fontWeight={400} color="text.primary">
                عضو هستید؟{' '}


            </Text>
            <Box>
                <Link href={"/login"} color="pink.500" fontWeight="bold"> ورود</Link>
            </Box>
        </>
    );
};

export default Page;

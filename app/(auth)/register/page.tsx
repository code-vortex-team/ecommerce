'use client';
import {useForm} from "react-hook-form";
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Link, Text} from "@chakra-ui/react";

const Page = () => {
    const {register, formState: {errors}, handleSubmit, watch} = useForm();
    const password = watch("Password");

    const onSubmit = () => {
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

                <Button width="4px" mt="2rem" variant="regularPinkButton">
                    ثبت نام
                </Button>
            </form>

            <Text mt="1.5rem" fontSize="1rem" fontWeight={400} color="text.primary">
                عضو هستید ؟{' '}

                <Link href="../login" color="pink.500" fontWeight="bold"> ورود</Link>

            </Text>
        </>
    );
};

export default Page;

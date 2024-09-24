'use client';
import {useForm} from "react-hook-form";
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Text} from "@chakra-ui/react";

const Page = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const onSubmit = (data) => {

    }
    return (<>
        <Text color="text.primary" mb={2} fontWeight={500} fontSize='1.5rem'>
            ورود
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.Email != null}>
                <FormLabel mt='2rem' mb='0.5rem' color="text.primary" fontSize='1rem'>ایمیل</FormLabel>

                <Input placeholder={"ایمیل خود را وارد نمایید"} color="text.secondary" fontSize='1rem'
                       bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{border: "none"}}

                       {...register("Email", {
                           required: "فیلد ضروری میباشد"
                       })}
                />
                <FormErrorMessage>
                    {errors.Email && `${errors.Email.message}`}

                </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.Password != null}>
                <FormLabel mt='1.5rem' mb='0.5rem' color="text.primary" fontSize='1rem'>رمزعبور</FormLabel>

                <Input placeholder={"رمزعبور خود را وارد نمایید"} color="text.secondary" fontSize='1rem'
                       bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{border: "none"}}

                       {...register("Password", {
                           required: "فیلد ضروری میباشد"
                       })}
                />
                <FormErrorMessage>
                    {errors.Password && `${errors.Password.message}`}

                </FormErrorMessage>
            </FormControl>
            <Button width='4px' variant="regularPinkButton">ورود</Button>

        </form>
    </>)
}

export default Page;
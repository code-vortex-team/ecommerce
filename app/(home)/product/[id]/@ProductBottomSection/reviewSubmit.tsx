import {useForm} from 'react-hook-form';
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Select, Textarea, useToast} from '@chakra-ui/react';
import {ReactNode} from "react";
import {ProductsApi} from "@/lib/openapi/generated-client";
import {useParams} from "next/navigation";


export default function ReviewSubmit() {
    const {register, handleSubmit, formState: {errors}}: ReactNode | undefined = useForm();
    const {id} = useParams()
    const toast = useToast()
    const onSubmit = (data) => {
        new ProductsApi().apiProductsIdReviewsPost(id.toString(), {
            ...data
        }).then(() => {
            toast({
                title: 'نظرشما ثبت شد',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }).catch((e) => {
            toast({
                title: 'نظرشما ثبت نشد',
                status: 'error',
                description: e?.response?.data?.message || "متاسفانه ثبت نظر شما با مشکل مواجه شد!",
                duration: 3000,
                isClosable: true,
            })
        })

    };

    return (
        <Box pl={{base: 0, md: 30}} maxW={640}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.rating}>
                    <FormLabel htmlFor="rating">امتیاز</FormLabel>
                    <Select dir={"ltr"} {...register('rating', {required: 'امتیاز خود را وارد نمایید'})}
                            placeholder={"انتخاب امتیاز"}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                    <FormErrorMessage>{errors.rating && errors.rating.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.comment} mt={4}>
                    <FormLabel htmlFor="comment">نظر</FormLabel>
                    <Textarea

                        placeholder="نظر خود را وارد نمایید"
                        {...register('comment', {
                            required: 'نظر خود را وارد نمایید',

                        })}
                    />
                    <FormErrorMessage>{errors.comment && errors.comment.message}</FormErrorMessage>
                </FormControl>

                <Button mt={4} type={"submit"} variant={"regularPinkButton"} minWidth={"auto"}>
                    ثبت نظر
                </Button>
            </form>
        </Box>
    );
}

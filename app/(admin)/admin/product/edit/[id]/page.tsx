'use client';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    Input,
    Text,
    Textarea,
    useToast
} from "@chakra-ui/react";
import UploadImage from "@/components/Forms/UploadImage";
import {useParams} from "next/navigation";
import {ProductsApi} from "@/lib/openapi/generated-client";

interface ProductFormInputs {
    photo: FileList;
    productName: string;
    price: number;
    brand: string;
    description: string;
    customerLimit: number;
    stockQuantity: number;
}

const Page: React.FC = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ProductFormInputs>();
    const {id} = useParams()
    const toast = useToast()
    const onSubmit = (data: any) => {
        new ProductsApi().apiProductsIdPut(id.toString(), data).then(() => {
            toast({
                title: 'محصول ویرایش شد',
                status: 'info',
                duration: 3000,
                isClosable: false,
            })
        }).catch(() => {
            toast({
                title: 'خطا در ویرایش',
                status: 'error',
                duration: 3000,
                isClosable: false,
            })
        })
    };

    useEffect(() => {
        new ProductsApi().apiProductsIdGet(id.toString()).then((r: any) => {
            reset(r.data)
        })
    }, []);

    return (
        (<>

            <Box as="form" width="68.375rem"
                 height="47.75rem"
                 mt="6.625rem"
                 ml="25.8125rem"
                 position="relative" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" p={5}
                 boxShadow="md">
                <Text color="text.primary" mb="2rem" fontWeight={500} fontSize='1.5rem'>
                    محصول جدید
                </Text>
                <UploadImage/>

                <FormControl mt={4} isInvalid={!!errors.name}>
                    <FormLabel htmlFor="productName">نام</FormLabel>
                    <Input placeholder={"نام محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                           bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{border: "none"}}

                           {...register("name", {
                               required: "فیلد ضروری میباشد"
                           })}
                    />
                    <FormErrorMessage>{errors.productName && errors.productName.message}</FormErrorMessage>
                </FormControl>
                <Grid templateColumns="1fr 1fr" gap={4} mt={4}>
                    <FormControl mt={4} isInvalid={!!errors.price}>
                        <FormLabel htmlFor="price">قیمت</FormLabel>
                        <Input placeholder={"قیمت محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                               bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{border: "none"}}

                               {...register("price", {
                                   required: "فیلد ضروری میباشد"
                               })}
                        />
                        <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl mt={4} isInvalid={!!errors.brand}>
                        <FormLabel htmlFor="category">برند</FormLabel>
                        <Input placeholder={"برند محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                               bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{border: "none"}}

                               {...register("brand", {
                                   required: "فیلد ضروری میباشد"
                               })}
                        />
                        <FormErrorMessage>{errors.brand && errors.brand.message}</FormErrorMessage>
                    </FormControl>
                </Grid>


                <FormControl mt={4} isInvalid={!!errors.description}>
                    <FormLabel htmlFor="description">توضیحات</FormLabel>
                    <Textarea
                        placeholder={"توضیحات محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                        bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{border: "none"}}

                        {...register("description", {
                            required: "فیلد ضروری میباشد"
                        })}
                    />
                    <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
                </FormControl>

                <Grid templateColumns="1fr 1fr" gap={4} mt={4}>
                    <FormControl mt={4} isInvalid={!!errors.customerLimit}>
                        <FormLabel htmlFor="customerLimit">تعداد قابل خرید</FormLabel>
                        <Input placeholder={"تعداد قابل خرید را وارد نمایید"} color="text.secondary" fontSize='1rem'
                               bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{border: "none"}}

                               {...register("customerLimit", {
                                   required: "فیلد ضروری میباشد"
                               })}
                        />
                        <FormErrorMessage>{errors.customerLimit && errors.customerLimit.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl mt={4} isInvalid={!!errors.stockQuantity}>
                        <FormLabel htmlFor="stockQuantity">موجودی</FormLabel>
                        <Input placeholder={"موجودی"} color="text.secondary" fontSize='1rem'
                               bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{ border: "none" }}
                               {...register("stockQuantity", { required: "فیلد ضروری میباشد", valueAsNumber: true, validate: (value) => value >= 0 || "موجودی نمیتواند منفی باشد" })} />
                        <FormErrorMessage>{errors.stockQuantity && errors.stockQuantity.message}</FormErrorMessage>
                    </FormControl>
                </Grid>

                <Button mt='2rem' type={"submit"} variant="regularPinkButton">ویرایش محصول </Button>
            </Box>

        </>)

    );
};

export default Page;

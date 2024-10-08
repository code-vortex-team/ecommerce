'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, Input, Text, Textarea } from "@chakra-ui/react";
import UploadImage from "@/components/Forms/UploadImage";
import { ProductsApi } from '@/lib/openapi/generated-client';

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
    const { register, handleSubmit, formState: { errors } } = useForm<ProductFormInputs>();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (data: ProductFormInputs) => {
        const { productName, description, price, brand, customerLimit, stockQuantity, photo } = data;
        const formData = new FormData();

        formData.append("photo", photo[0]);
        formData.append("name", productName);
        formData.append("description", description);
        formData.append("price", price.toString());
        formData.append("brand", brand);
        formData.append("countInStock", stockQuantity.toString());
        formData.append("customerLimit", customerLimit.toString());

        setIsLoading(true);

        new ProductsApi().apiProductsPost(formData)
            .then((response) => {
                alert("محصول جدید با موفقیت ایجاد شد!");
                console.log(response.data);
            })
            .catch((error) => {
                setErrorMessage(error.response?.data.message || "خطایی پیش آمد");
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <Box as="form" width="68.375rem" height="auto" mt="6.625rem" ml="25.8125rem" position="relative" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" p={5} boxShadow="md">
                <Text color="text.primary" mb="2rem" fontWeight={500} fontSize='1.5rem'>محصول جدید</Text>
                <UploadImage />

                <FormControl mt={4} isInvalid={!!errors.photo}>
                    <FormLabel htmlFor="photo">عکس محصول</FormLabel>
                    <Input type="file" accept="image/*" {...register("photo", { required: "فیلد ضروری میباشد" })} />
                    <FormErrorMessage>{errors.photo && errors.photo.message}</FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors.productName}>
                    <FormLabel htmlFor="productName">نام</FormLabel>
                    <Input placeholder={"نام محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                           bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{ border: "none" }}
                           {...register("productName", { required: "فیلد ضروری میباشد" })} />
                    <FormErrorMessage>{errors.productName && errors.productName.message}</FormErrorMessage>
                </FormControl>

                <Grid templateColumns="1fr 1fr" gap={4} mt={4}>
                    <FormControl mt={4} isInvalid={!!errors.price}>
                        <FormLabel htmlFor="price">قیمت</FormLabel>
                        <Input placeholder={"قیمت محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                               bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{ border: "none" }}
                               {...register("price", { required: "فیلد ضروری میباشد", valueAsNumber: true, validate: (value) => value > 0 || "قیمت باید بیشتر از 0 باشد" })} />
                        <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl mt={4} isInvalid={!!errors.brand}>
                        <FormLabel htmlFor="brand">برند</FormLabel>
                        <Input placeholder={"برند محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                               bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{ border: "none" }}
                               {...register("brand", { required: "فیلد ضروری میباشد" })} />
                        <FormErrorMessage>{errors.brand && errors.brand.message}</FormErrorMessage>
                    </FormControl>
                </Grid>

                <FormControl mt={4} isInvalid={!!errors.description}>
                    <FormLabel htmlFor="description">توضیحات</FormLabel>
                    <Textarea placeholder={"توضیحات محصول را وارد نمایید"} color="text.secondary" fontSize='1rem'
                              bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{ border: "none" }}
                              {...register("description", { required: "فیلد ضروری میباشد" })} />
                    <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
                </FormControl>

                <Grid templateColumns="1fr 1fr" gap={4} mt={4}>
                    <FormControl mt={4} isInvalid={!!errors.customerLimit}>
                        <FormLabel htmlFor="customerLimit">تعداد قابل خرید</FormLabel>
                        <Input placeholder={"تعداد قابل خرید را وارد نمایید"} color="text.secondary" fontSize='1rem'
                               bg="base.textField" borderColor="base.textFieldStroke" _focusVisible={{ border: "none" }}
                               {...register("customerLimit", { required: "فیلد ضروری میباشد", valueAsNumber: true, validate: (value) => value > 0 || "تعداد باید بیشتر از 0 باشد" })} />
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

                <Button mt='2rem' variant="regularPinkButton" type="submit" isLoading={isLoading}>
                    ساخت محصول جدید
                </Button>

                {errorMessage && <Text color="red.500" mt={4}>{errorMessage}</Text>}
            </Box>
        </>
    );
};

export default Page;

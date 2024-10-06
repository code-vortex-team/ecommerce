import {NextResponse} from 'next/server';
import {CategoryApi, ProductsApi} from "@/lib/openapi/generated-client";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    const productId = params.id;


    const product: any = await new ProductsApi().apiProductsIdGet(productId)

    const productList: any = await new ProductsApi().apiProductsFilteredPost({
        "categories": [
            `${product.data.category}`
        ],
        "price": []
    })
    const categoryData: any = await new CategoryApi().apiCategoryIdGet(product.data.category)


    return NextResponse.json(productList.data.map(item => {
        item["category"] = categoryData.data
        return item
    }));
}
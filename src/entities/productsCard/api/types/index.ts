interface GetAllProd{
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: any
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface Data{
    limit: number;
    products: Array<GetAllProd>;
    skip: number;
    total: number;
    category?: string;
}


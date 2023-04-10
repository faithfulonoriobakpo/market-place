export interface Product {
    name: string;
    description: string;
    images: {main:string,icon:string}[];
    price: number;
    quantity: number;
    rating: number;
} 
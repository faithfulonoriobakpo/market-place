export interface Product {
    id:number;
    name: string;
    category: string,
    description: string;
    images: {main:string,icon:string}[];
    price: number;
    quantity: number;
    rating: number;
} 
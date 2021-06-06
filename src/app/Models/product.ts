export interface Product {
    id: number;
    title: string; 
    price: number; 
    stars: number;    
    discount: number;
    category: string; 
    colors: string[]; 
    sizes: string[]; 
    images: string[]; 
    description: string; 
    tags: string[]; 
    stock: number; 

    cart_quantity: number;
    color: number;
    size: number;
}
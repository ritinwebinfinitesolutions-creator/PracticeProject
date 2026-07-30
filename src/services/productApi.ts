import type { Product } from "../types/product";
export async function getProduct():Promise<Product[]>{
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        if(!response.ok){
            throw new Error("Failed to fetch products")
        }
        const data:Product[]= await response.json();
        return data.slice(0,4)
    }catch(error){
     throw new Error("Api failed")
    }
}

import Cards from "../components/home/Cards"
import Hero from "../components/home/Hero" 
import { getProduct } from "../services/productApi"
import type { Product } from "../types/product";

import { useEffect, useState } from "react"
const Home=()=>{
  const [products,setProducts]=useState<Product[]>([]);
  useEffect(()=>{
    const loadProducts=async()=>{
    const data = await getProduct();
    console.log("products",data)
    setProducts(data) 
  
    }
    loadProducts();
  },[])
    return(
      <>
      <div>
      <Hero/>
      <section className="py-10">
             <div className="text-4xl text-center p-5 italic "><h1>Our Products</h1></div>
      <Cards products={products}/>
      </section>
      </div>
      </>
    )
}
export default Home
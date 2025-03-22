import { useEffect, createContext,useContext, useState } from "react";
import { productDetails } from "../api";

const ContextProvider = createContext();


const  AppProvider = ({children})=>{
    const [products,setProducts] =  useState([])

    const fetch = async()=>{
        const data =  await productDetails("products")
        setProducts(data.products)

    }
    
    useEffect(()=>{
        fetch()

    },[])







    return(
        <ContextProvider.Provider value={{
            products
        }}>
        {
        children
        }</ContextProvider.Provider>
    )
}

const Provider = ()=>{
    return useContext(ContextProvider)
}


export {
    AppProvider,
    Provider
}



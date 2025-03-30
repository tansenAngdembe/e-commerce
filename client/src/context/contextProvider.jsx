import { useEffect, createContext, useContext, useState, useReducer } from "react";
import { productDetails } from "../api";
import reducer from "../reducer/Reducer";
import { toast } from "react-toastify"

const ContextProvider = createContext();

//inital state for reducer 
const initalState = {
    products: [],
    cart: [],
    totalItems: 0

}


// console.log(toataItems)
const AppProvider = ({ children }) => {
    const [isProductCategory,setIsProductByCategories] =  useState(null)
    const [state, dispatch] = useReducer(reducer, initalState);

    const addToCart = (id, quantity) => {
        dispatch({ type: "ADD_TO_CART", payload: { id: id, quantity: quantity } })
    }
   
    const successCart = () => {
        toast.success("Items added to Cart.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,  // Ensure it closes even if hovered
            draggable: true,
            progress: undefined,
            theme: "colored",

        });
    };

   
    const fetch = async () => {
        const data = await productDetails("products")
        dispatch({ type: "SET_ALL_PRODUCTS", payload: data.products })
        // setProducts(data.products)

    }


    useEffect(() => {
        fetch()

    }, [])



    return (
        <ContextProvider.Provider value={{
            state, dispatch, addToCart, successCart,isProductCategory,setIsProductByCategories
        }}>
            {
                children
            }</ContextProvider.Provider>
    )
}

const Provider = () => {
    return useContext(ContextProvider)
}


export {
    AppProvider,
    Provider
}



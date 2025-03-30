import { act } from "react"

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "ADD_TO_CART":
            const product_id = state.products.find(item => item._id === action.payload.id)
            const exist = state.cart.find(item => item.product_id._id === action.payload.id)
            console.log(exist)
            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.product_id._id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item)

                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { product_id, quantity: action.payload.quantity }],



                }
            }
        case "TOTAL_ITEMS":
            return {
                ...state,
                totalItems: action.payload
            }


        case "REMOVE_FROM_CART":
            const updateCart = state.cart.filter(item => item.product_id._id !== action.payload.id)
            return {
                ...state,
                cart: updateCart
            }
            
        default:
            return state
    }

}
export default reducer; 
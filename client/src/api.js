import axios from "axios"

const url = import.meta.env.VITE_URL
console.log(url)

const productDetails = async(endpoint)=>{
    try {
        const response = await axios.get(`${url}/${endpoint}`)
        return response.data;
                
    } catch (error) {
        console.log(error)
        
    }
}

export {
    productDetails
}
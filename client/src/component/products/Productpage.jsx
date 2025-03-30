import { useEffect, useState } from "react";
import { HeartIcon, TruckIcon, Undo2 } from "lucide-react";
import { Provider } from "../../context/contextProvider";
import { useParams } from "react-router-dom";


const uri = import.meta.env.VITE_IMAGE;
export default function Productpage() {
    const { id } = useParams()
    const { state, addToCart, successCart  } = Provider()
    const [quantity, setQuantity] = useState(1);
    const [keyExist, setKeyExist] = useState(false)
    const selectedProduct = state.products.find((val) => val._id === id)
    const [image, setImage] = useState(selectedProduct?.images[0])

   


    useEffect(() => {
        const isExist = Object.keys(selectedProduct).includes("sizes")
        setKeyExist(isExist)

    }, [selectedProduct])
 

 

    return (
        <>      
        <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto">          

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="flex  w-full">
                    <div className="flex flex-col w-[30%] p-4 m-4 gap-2 justify-items-start">
                        {
                            selectedProduct?.images?.map((img, index) => (
                                <div key={index} className=" bg-gray-100" onMouseEnter={() => setImage(img)}>
                                    <img src={`${uri}/static${img}`} alt={selectedProduct?.name} className="w-full mix-blend-multiply  cursor-pointer" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-gray-100 p-2  w-[70%] justify-center place-content-center">
                        <img src={`${uri}/static${image}`} alt="Gamepad" className="w-full mix-blend-multiply " />
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-2xl font-bold">{selectedProduct?.name}</h1>
                    <span className="text-yellow-500">⭐ {selectedProduct?.rating} ({selectedProduct?.reviewCount} reviews) </span>  <span className="text-green-500">  Stock: {selectedProduct?.stock} left</span>
                    <p className="text-gray-600">Rs.{selectedProduct?.price}</p>

                    <p className="mt-2 text-gray-700">
                        {selectedProduct?.description?.short}
                    </p>

                    {/* Size Options */}
                    {
                        keyExist &&
                        <div className="mt-4">
                            <span className="font-semibold">Size:</span>
                            <div className="flex gap-2 mt-2">
                                {["XS", "S", "M", "L", "XL"].map((size) => (
                                    <button key={size} className="border px-4 py-2 rounded hover:bg-gray-200">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    }




                    {/* Quantity Selector & Buy Button */}
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="flex items-center">
                            <button className="border  px-3 py-2 rounded cursor-pointer" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span className="px-4 p-2">{quantity}</span>
                            <button className="border  px-3 py-2 rounded cursor-pointer" onClick={() => setQuantity(quantity + 1)} disabled={selectedProduct?.stock <= quantity || quantity >= 15}>+</button>
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-blue-500 text-white px-6 py-2 rounded cursor-pointer">Buy Now</button>
                            <button className="bg-orange-500 text-white px-6 py-2 rounded cursor-pointer"
                                onClick={()=>{addToCart(selectedProduct._id,quantity); successCart()}}
                            // onClick={successCart}
                            >Add to Cart</button>

                        </div>
                    </div>

                    {/* Delivery & Return Info */}
                    <div className="mt-6 border p-4 rounded-lg">
                        <p className="flex items-center gap-2">
                            <TruckIcon className="text-blue-500" /> Free Delivery
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <Undo2 className="text-blue-500" /> Return Delivery (30 Days)
                        </p>
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <h1 className="text-lg bg-gray-50  mt-4 p-2 pb-3">Product details of {selectedProduct?.name}</h1>
                <span className="text-lg font-semibold mt-4">Description: </span><span>{selectedProduct?.description?.long}</span>
                <h2 className="text-lg font-semibold mt-4">Features:</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {selectedProduct?.features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <h2 className="text-lg font-semibold mt-4">Specifications:</h2>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    {Object.entries(selectedProduct?.specifications).map(([key, value], index) => (
                        <div key={index} className="border p-2 rounded-md bg-gray-50">
                            <strong>{key}:</strong> {value}
                        </div>
                    ))}
                </div>
            </div>

            {/* Related Items */}
            <h2 className="mt-12 text-xl font-semibold">Related Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {["item1.jpg", "item2.jpg", "item3.jpg", "item4.jpg"].map((img, index) => (
                    <div key={index} className="border p-4 rounded-lg text-center">
                        <img src={`/${img}`} alt="Related Item" className="w-full" />
                        <p className="mt-2 font-semibold">Item Name</p>
                        <p className="text-gray-600">Rs. 1200</p>
                    </div>
                ))}
            </div>
            
        </div>
        </>
    );
}

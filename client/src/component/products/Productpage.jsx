import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Provider } from "../../context/contextProvider";
import { ShoppingCart } from "lucide-react";
const uri = import.meta.env.VITE_IMAGE;
export default function Productpage() {
  // const [selectedProduct,setSelectedProduct] = useState({})

  const { id } = useParams()
  const { products } = Provider()

  const selectedProduct = products.find((val) => val._id === id)

  // console.log(id)
  // console.log(selectedProduct)


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">

      <h1 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h1>
      <p className="text-gray-600">{selectedProduct?.description?.short}</p>
      <div className="flex space-x-4 my-4">
        <div className="flex">

          {selectedProduct.images.map((img, index) => (
            <img key={index} src={`${uri}/static/${img}`} alt={selectedProduct.name} className="w-24 h-24 rounded-md shadow" />
          ))}
        </div>
        <div>
          <p className="text-xl font-semibold text-orange-500">Rs: {selectedProduct.price}</p>
          <span className="text-gray-500 line-through">Rs {selectedProduct.price + 100}</span> <span>-{Math.floor(100 / (selectedProduct.price + 100) * 100)}%</span>
          <p className="text-gray-500">Category: {selectedProduct.category}</p>
          <p className="text-gray-500">Stock: {selectedProduct.stock} left</p>
          <p className="text-yellow-500">⭐ {selectedProduct.rating} ({selectedProduct.reviewCount} reviews)</p>
        </div>        
      </div>   <div className="relative size-32 w-full mb-6">
        <div className="absolute">
          add less
        </div>

        <div className="absolute right-0 bottom-0 ">
          <button className="flex justify-between items-center  bg-[#000000] text-white text-xs px-4 py-2.5 mt-2 rounded transition hover:bg-[#121212] cursor-pointer">
            Add to Cart
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

      </div>

   

      <hr></hr>
      <h1 className="text-lg font-semibold mt-4">Product details of {selectedProduct.name}</h1>
      <span className="text-lg font-semibold mt-4">Description:</span><span>{selectedProduct.description.long}</span>
      <h2 className="text-lg font-semibold mt-4">Features:</h2>
      <ul className="list-disc pl-5 text-gray-700">
        {selectedProduct.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mt-4">Specifications:</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        {Object.entries(selectedProduct.specifications).map(([key, value], index) => (
          <div key={index} className="border p-2 rounded-md bg-gray-50">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
}

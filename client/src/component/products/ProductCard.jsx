import { Heart, Eye, Star, ShoppingCart } from "lucide-react";

import { Provider } from "../../context/contextProvider";
import { Link } from "react-router-dom";

const uri = import.meta.env.VITE_IMAGE;
const ProductCard = () => {
  const { state, addToCart, successCart } = Provider();
  return (
    <section className="grid grid-cols-6 max-sm:grid-cols-2  m-4 gap-4 " >
      {state.products.map((data) => (

        <div key={data._id} className=" flex flex-col   group mb-7 w-[200px]   outline outline-gray-300 rounded p-2 transition duration-300 hover:shadow-lg hover:scale-105" >

          <div className="flex justify-between items-center text-xs">
            <span className="bg-red-500 text-white px-1.5 py-0.5 rounded">-{Math.floor(100 / (data.price + 100) * 100)} %</span>
            <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition cursor-pointer">
              <Heart className="w-4 h-4" />
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <Link to={`/product/${data.name}/${data._id}`} className="flex items-center justify-center ">
            <img src={`${uri}/static/${data.images[0]}`} alt="" className="w-[100px] h-[100px] object-cover rounded bg-blend-multiply" />
          </Link>

          <p className="text-sm font-semi-bold mt-2 leading-tight h-[35px]">
            {data.name}
          </p>


          <div className="flex justify-center items-start flex-col  gap-1 mt-1">
            <div className=" text-sm flex  gap-10 justify-center items-start">
              <span className="text-orange-600 font-light">Rs: {data.price}</span>
              <span className="line-through text-gray-500">Rs: {data.price + 100}</span>
            </div>
            <div className="flex items-center gap-0.5 text-xs">
              <Star className="w-3 h-3" />
              <Star className="w-3 h-3" />
              <Star className="w-3 h-3" />
              <p className="text-gray-600">({data.reviewCount})</p>
            </div>
          </div>


          <button type="button"
            className="flex justify-between items-center   w-full bg-[#413232] text-white text-xs px-4 py-2.5 mt-2 rounded transition hover:bg-[#121212] cursor-pointer"
            onClick={async () => {
              {
                await addToCart(data._id, 1);
                successCart()
              }
            }}
          >
            Add to Cart
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

      ))}
    </section>

  );
};


export default ProductCard;

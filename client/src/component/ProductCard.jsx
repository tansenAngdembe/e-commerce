import { Heart, Eye, Star } from "lucide-react";
import Img from "../assets/console.png";
const ProductCard = ({ title, price, disPrice, disRate, ratingCount }) => {
  return (
    <section className="">
      <div className="group max-w-[90%] sm:max-w-[300px] outline outline-gray-300 rounded-lg p-3 transition-all duration-300 hover:shadow-lg">
        
  {/* Discount & Icons */}
  <div className="flex justify-between">
    <span className="bg-red-500 text-white px-2  py-1 h-max rounded-md text-sm">-40%</span>
    <div className="flex flex-col gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
      <Heart />
      <Eye />
    </div>
  </div>

  {/* Product Image */}
  <div className="overflow-hidden">
    <img src={Img} alt="" className="w-full transition-transform duration-300 hover:scale-110" />
  </div>

  {/* Product Info */}
  <div>
    <p className="text-[1rem] font-bold m-1.5 leading-none">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempore!
    </p>

    {/* Price */}
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-orange-600 font-bold">Rs: 100</span>
      <span className="line-through text-gray-500">Rs: 200</span>
    </div>

    {/* Star Ratings */}
    <div className="flex items-center gap-1 mt-1">
      <Star />
      <Star />
      <Star />
      <p className="text-gray-600">(90)</p>
    </div>

    {/* Add to Cart Button */}
    <button className="w-full bg-black text-white px-4 py-2 mt-3 rounded-lg transition-all duration-300 hover:bg-sky-800 cursor-pointer">
      Add to Cart
    </button>
  </div>
</div>

    </section>
  );
};


export default ProductCard;

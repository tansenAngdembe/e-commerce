import { Heart, Eye, Star } from "lucide-react";
import Img from "../assets/console.png";
const ProductCard = ({ title, price, disPrice, disRate, ratingCount }) => {
  return (
    <section className="flex items-center justify-center">
      <div className="h-max  w-72">
        <div className="flex justify-between ">
          <span>-40%</span>
          <div className="flex flex-col gap-4 ">
            <Heart />
            <Eye />
          </div>
        </div>
        <div>
            <img src={Img} alt="" className="w-lvh" />
          </div>

        <div>
          <p className="text-[1rem] font-bold m-1.5 leading-none">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            tempore!
          </p>
          <div>
          <span>Rs: 100</span>
          <span className="line-through">Rs: 200</span>
          </div>
          <div className="flex">
            <Star />
            <Star />
            <Star />
            <p>(90)</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProductCard;

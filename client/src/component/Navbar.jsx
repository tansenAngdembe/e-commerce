import { Heart, Search, ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <div className="border-b-2 border-b-[var(--border)] h-24 flex flex-col justify-center bg-white">
      <nav className="flex items-center justify-around">
        <div>
          <h1 className="text-2xl font-bold font-sans">Quick Kart</h1>
        </div>
        <div>
          <ul className="flex gap-12 text-[1rem] font-semibold">
            <li>
            <a href="#">
              Home
            </a>
            </li>
            <li>
            <a href="#">
              Contact
            </a>
            </li>
            <li>
            <a href="#">
              About
            </a>
            </li>
            <li>
            <a href="#">
              Sign In
            </a>
            </li>
          </ul>
        </div>
        <div className="flex">
            <div className="relative m-5">
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-700" />
           <input type="search" name="search" id="" placeholder="What are you looking for?" 
           className=" shadow-[var(--p-shadow)] rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-sky-200
           p-2"
           />
            </div>
          <div className="flex justify-center items-center">
            <ul className="flex justify-center items-center gap-5">
          
            <li>
            <a href="#">
              <ShoppingCart />
            </a>
            </li>

            <li>
            <a href="#">
              <Heart />
            </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;

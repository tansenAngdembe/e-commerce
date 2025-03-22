import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Advertisement from "./Advertisement";
const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path
      ? "text-sky-950 font-bold underline-offset-1"
      : "";
  };

  return (
    <div className="border-b-2 border-b-[var(--border)] h-28 flex flex-col justify-center bg-white">
      <>
        <Advertisement />
      </>
      <nav className="flex items-center justify-around">
        <div>
          <h1 className="text-2xl font-bold font-sans">
            {" "}
            <Link to="/">Quick Kart</Link>{" "}
          </h1>
        </div>
        <div>
          <ul className="flex gap-12 text-[1rem] font-light">
            <li>
              <Link to="/" className={`${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${isActive("/contact")}`}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${isActive("/about")}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/sign" className={`${isActive("/sign")}`}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="relative m-5">
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-700" />
            <input
              type="search"
              name="search"
              id=""
              placeholder="What are you looking for?"
              className=" shadow-[var(--p-shadow)] rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-sky-200
           p-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex justify-center items-center gap-5">
              <li>
                <Link to="#">
                  <ShoppingCart />
                </Link>
              </li>

              <li>
                <Link to="#">
                  <Heart />
                </Link>
              </li>
              <li className="shadow-[var(--p-shadow)] rounded-full h-10 w-10 flex justify-center items-center hover:rotate-[360deg] duration-700 ease-in-out">
                <Link to="#">
                  <User />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

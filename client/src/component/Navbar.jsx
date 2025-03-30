import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Advertisement from "./Advertisement";
import { Provider } from "../context/contextProvider";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const { state, dispatch ,setIsProductByCategories} = Provider();
  const isLogin = true
  const isActive = (path) => {
    return location.pathname === path
      ? "text-sky-950 font-bold underline-offset-1"
      : "";
  };

  const totalItems = state.cart.reduce((accum, inital) => {
    return accum += inital.quantity
  }, 0)
  useEffect(() => {
    dispatch({ type: "TOTAL_ITEMS", payload: totalItems })

  }, [totalItems])


  return (
    <div className="border-b-2 border-b-[var(--border)] h-28 flex flex-col justify-center bg-white sticky top-0 z-50">

      <>
        <Advertisement />
      </>
      <nav className="flex items-center justify-around">
        <div>
          <h1 className="text-2xl font-bold font-sans">
            {" "}
            <Link to="/" onMouseEnter={()=>setIsProductByCategories(null)} >Quick Kart</Link>{" "}
          </h1>
        </div>
        <div>
          <ul className="flex gap-12 text-[1rem] font-light">
            <li>
              <Link to="/" className={`${isActive("/")}`} onClick={()=>setIsProductByCategories(null)}>
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
              type="text"
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
                <Link to="/cart">
                  <div className="flex relative">
                    <ShoppingCart />
                    {state.cart.length !== 0 ? <span className=" flex  h-full w-full place-content-between justify-center text-[15px] bg-black text-white  rounded-xl absolute left-4 bottom-1">{state.totalItems}</span> : ""}

                  </div>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <Heart />
                </Link>
              </li>
              {isLogin &&
                <li className="shadow-[var(--p-shadow)] rounded-full h-10 w-10 flex justify-center items-center hover:rotate-[360deg] duration-700 ease-in-out">
                  <Link to="#">
                    <User />
                  </Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;

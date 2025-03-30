
import Aside from "./Aside.jsx";
import ProductCard from "./products/ProductCard.jsx";
import ImageSlider from "./ImageSlider.jsx";
import Category from "./Category/Category.jsx";

import CategoryHead from "../component/Category/CategoryHead.jsx";
import { Provider } from "../context/contextProvider"
import ProductByCategory from "./Category/ProductByCategory"
const Home = () => {
  const { isProductCategory } = Provider();
  return (
    <>
      {/* <div className="flex flex-col gap-1">  */}
      <div className="grid grid-cols-[260px_minmax(950px,_1fr)_100px] gap-2">
        {/* Sidebar */}
        <div className="sticky top-28 h-[24rem] hidden lg:block">
          <Aside />
        </div>


        {/* </div> */}
        {isProductCategory ? <ProductByCategory cata={isProductCategory} /> :
          <div className="w-full">
            <div >
              <ImageSlider />
            </div>

            <h1 className="text-center m-8 font-medium text-2xl mt-10">Top Selling Products</h1>
            <div >
              <ProductCard />
            </div>
            <div>
              <CategoryHead cHeading={"Browse By Categories"} cTitle={"Categories"} />
              <section className="flex items-center justify-around  p-10 w-[100%]">
                <Category />
              </section>
            </div>
            <div>
              <CategoryHead cHeading={"Best Selling Products"} cTitle={"This Month"} />

              <section >
                <ProductCard />
              </section>

              <CategoryHead cHeading={"Explore Our Products"} cTitle={"Our Products"} />
              <section >
                <ProductCard />
              </section>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Home;

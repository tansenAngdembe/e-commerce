
import Aside from "./Aside.jsx";
import ProductCard from "./products/ProductCard.jsx";
import ImageSlider from "./ImageSlider.jsx";
import Category from "./Category/Category.jsx";

import CategoryHead from "../component/Category/CategoryHead.jsx";

const Home = () => {
  return (
    <>
      <div className="flex gap-1 lg:gap-2">
        {/* Sidebar */}
        <div className="w-1/5">
          <Aside />
        </div>

        <div >         
            <ImageSlider />         
        </div>

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
    </>
  );
};

export default Home;

import Aside from "./Aside.jsx";
import ProductCard from "./ProductCard.jsx";
import ImageSlider from "./ImageSlider.jsx";
import Category from "./Category/Category.jsx";
import CellPhone from "../assets/cellphone.svg";
import Computer from "../assets/computer.svg";
import SmartWatch from "../assets/watch.svg";
import Camera from "../assets/camera.svg";
import HeadPhone from "../assets/headphone.svg";
import Gaming from "../assets/gaming.svg";
import CategoryHead from "../component/Category/CategoryHead.jsx";


const Home = () => {
  return (
    <>
      <div className="flex gap-12 lg:gap-20">
        {/* Sidebar */}
        <div className="w-1/5">
          <Aside />
        </div>

        <section className="flex items-center justify-start w-2/3">
  <div className="w-[90%] h-[400px] overflow-hidden flex items-center justify-center">
    <ImageSlider />
  </div>
</section>

      </div>
      <h1 className="text-center font-medium text-2xl">Top Selling Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 m-4">
        {[...Array(10)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <CategoryHead cHeading = {"Browse By Categories"} cTitle ={"Categories"}/>
      <section className="flex items-center justify-around  p-10 w-[100%]">
      <Category categoryName={"Hacker Docx"}  categoryImage={CellPhone}/>
      <Category categoryName={"Hacker Docx"}  categoryImage={Computer}/>
      <Category categoryName={"Hacker Docx"}  categoryImage={HeadPhone}/>
      <Category categoryName={"Hacker Docx"}  categoryImage={Gaming}/>
      <Category categoryName={"Hacker Docx"}  categoryImage={SmartWatch}/>
      <Category categoryName={"Hacker Docx"}  categoryImage={Camera}/>
      </section>

      <CategoryHead cHeading = {"Best Selling Products"} cTitle ={"This Month"}/>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 m-4">
        {[...Array(5)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </section>

      <CategoryHead cHeading = {"Explore Our Products"} cTitle ={"Our Products"}/>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 m-4">
        {[...Array(5)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </section>
    </>
  );
};

export default Home;
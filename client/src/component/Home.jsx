import Aside from "./Aside"
import ProductCard from "./ProductCard"

const Home = ()=>{
    return(
        <>
        
        
        <div className="flex gap-2">
            <div className="w-1/5">
            <Aside/>
            </div>
            <div className="w-4/5">
              <h1><b>This is home page </b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus quos veniam ullam, ipsa iste ea dignissimos dolores doloremque ad eaque corporis veritatis cupiditate eius! Ab nobis commodi minus consectetur. Animi totam officiis, incidunt qui ipsam, quam expedita commodi illum quidem ratione temporibus id! Vitae!</h1>
            </div>
        </div>
       <div className="flex flex-wrap items-center justify-center w-[100%] gap-8 my-4">
       <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
       </div>
        </>

    )
}
export default Home;
import Advertisement from "./component/Advertisement.jsx";
import Navbar from "./component/Navbar.jsx";
import Aside from "./component/Aside.jsx";
import ProductCard from "./component/ProductCard.jsx";

function App() {
  return (
    <>
     <Advertisement />
     <Navbar />
     <section className="flex  items-center">
     <Aside />
     </section>
     <ProductCard  title={"Addidas Boxer Pant for boys"} disPrice={300} disRate={30} ratingCount={100}/>
    </>
  )
}

export default App;

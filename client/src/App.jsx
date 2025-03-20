import Advertisement from "./component/Advertisement.jsx";
import Navbar from "./component/Navbar.jsx";
import Aside from "./component/Aside.jsx"
import Gallery from "./component/Gallery.jsx";
function App() {
  return (
    <>
     <Advertisement />
     <Navbar />
     <section className="flex  items-center">
     <Aside />
     <Gallery />
     </section>
    </>
  )
}

export default App;

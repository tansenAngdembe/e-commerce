import {Routes,Route} from "react-router-dom"
import Layout from "./component/Layout.jsx";
import About from "./component/About.jsx";
import Home from "./component/Home.jsx"
import Contact from "./component/Contact.jsx";
import Signin from "./component/Signin.jsx"


function App() {
  return (
    <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>} />           
           <Route path="/about" element={<About/>}/>
           <Route path="/contact"  element={<Contact/>}/>        
           <Route path ="/sign" element={<Signin/>}/>     

         </Route>
    </Routes>
  )
}

export default App;

import { Routes, Route } from "react-router-dom"
import Layout from "./component/Layout.jsx";
import About from "./component/About.jsx";
import Home from "./component/Home.jsx"
import Contact from "./component/Contact.jsx";
import Signin from "./component/Signin.jsx"
import Productpage from "./component/products/Productpage.jsx";
import ProductByCategory from "./component/Category/ProductByCategory.jsx";

import Notfound from "./Notfound.jsx";
import Cart from "./component/products/Cart.jsx";
import CheckoutPage from "./component/products/CheckoutPage.jsx";
import AccountPage from "./component/AccountPage.jsx";


function App() {
  
  return (
    <Routes>     
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<Signin />} />
        <Route path="/product/:name/:id" element={<Productpage />} />
        <Route path="/cart" element = {<Cart/>}/>       
        <Route path="*" element={<Notfound />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/account" element={<AccountPage />} />

      </Route>
    </Routes>
  )
}

export default App;
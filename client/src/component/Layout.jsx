import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
const Layout = ()=>{
// Outlet with render the child components of define route 
    return (
        <div>
            <Navbar/>
            <main className="ml-10 mr-10">
                <Outlet/> 
            </main>
            <Footer/>
        </div>
    )


}
export default Layout;




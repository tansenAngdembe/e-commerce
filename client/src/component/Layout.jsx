import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
const Layout = ()=>{
// Outlet with render the child components of define route 
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/> 
            </main>
        </div>
    )


}
export default Layout;




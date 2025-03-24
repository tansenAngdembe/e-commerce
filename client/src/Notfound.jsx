import { Link } from "react-router-dom";

export default function Notfound() {

    return (
        <div className="flex  place-content-center min-h-[24.2rem] items-center">
            <div className=" flex flex-col items-center  ">
                <div className="flex flex-col items-center">
                    <h1 className="text-8xl">404 Not Found</h1>
                    <p className="m-5">Your visited page not found. You may go home page.</p>
                </div>
                <div className=" bg-red-500 mt-8 p-2 pl-8 pr-8 text-amber-50 w-fit rounded-md">                  
                   <Link to="/"> <div>Back to home page</div>  </Link>                    
                </div>
            </div>

        </div>
    )
}


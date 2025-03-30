import { useState } from "react";
import { Provider } from "../context/contextProvider";
const Aside = () => {
  const [showList, setShowList] = useState(null)
  const { setIsProductByCategories } = Provider();
  const aside = [
    { name: "Women's Fashion", lists: ["Clothing", "Shoes", "Bags", "Watches", "Accessories"] },
    { name: "Men's Fashion", lists: ["Clothes", "Shoes", "Bags", "Watches", "Accessories"] },
    { name: "Electronics", lists: ["Electronics"] }


  ]
  


  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold mb-3 text-gray-700 ">Categories</h2>
      <ul className="flex flex-col gap-3">
        {/* {[
      "Women's Fashion",
      "Men's Fashion",
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Babies & Toys",
      "Groceries & Pets",
      "Health & Beauty",
      
    ].map((category, index) => (
      <li key={index} onMouseEnter={()=> console.log(category)}>
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-gray-600 transition-all duration-300 hover:bg-sky-100 hover:text-gray-600"
        >
          {category}
        </a>
      </li>
    ))} */}
        {
          aside.map((val, index) => (
            <li key={index} onMouseEnter={() => setShowList(index)} onMouseLeave={() => {setShowList(null)}} className="cursor-pointer hover:text-orange-500">
              {val.name}
              {showList === index && <div className="flex flex-col place-items-start gap-1 bg-gray-200 text-black  rounded-2xl p-4 m-2">{
                val.lists.map((item) => 
                  < a key={item} className={`cursor-pointer hover:text-orange-500 w-full `} onClick={()=> setIsProductByCategories(item + " " + val.name)} > {item}</a> 
                  
                )
              }</div>}
            </li>
          ))
        }
      </ul>
    </div >


  );
};

export default Aside;

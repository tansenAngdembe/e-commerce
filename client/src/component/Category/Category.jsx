import CellPhone from "../../assets/cellphone.svg";
import Computer from "../../assets/computer.svg";
import SmartWatch from "../../assets/watch.svg";
import Camera from "../../assets/camera.svg";
import HeadPhone from "../../assets/headphone.svg";
import Gaming from "../../assets/gaming.svg";



const Category = () => {
  const categoryTypes = [
    { name: "Hacker Docx", img: CellPhone },
    { name: "Hacker Docx", img: Computer },
    { name: "Hacker Docx", img: SmartWatch },
    { name: "Hacker Docx", img: Camera },
    { name: "Hacker Docx", img: HeadPhone },
    { name: "Hacker Docx", img: Gaming }
  ]
  // flex items-center justify-around  p-10 w-[100%]
  return (

    <div className="flex items-center justify-center gap-8 ">      
        {
          categoryTypes.map((types)=>(
            <div className="flex flex-col items-center justify-center outline-1  w-36 h-36 rounded-2xl  cursor-pointer outline-gray-500 hover:bg-gray-500 hover:text-white"> 
              <img src={types.img} alt={"Category Images"} className="w-max object-cover fill-current" />
              <span>{types.name}</span>
            </div>
          ))
        }
      
    </div>

  );
};

export default Category;

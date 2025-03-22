import { useState, useEffect } from "react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Photo from "../assets/gallery.jpeg";
import Photo2 from "../assets/console.png";
import Photo3 from "../assets/african.jpeg";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/525575671/vector/smart-watch-isolated-with-icons-on-white-background-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=Vd8ezRO77Ux8T2NdFqOqYEVlMgxE6uc1W9bfK5yjl8Y=",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    "https://i.pinimg.com/736x/3d/bd/88/3dbd885b326e461ae2cdc39f0e610edf.jpg",
    "https://i.pinimg.com/736x/dd/de/14/ddde149b1134c4387cd174a99b8d2e31.jpg",
    "https://i.pinimg.com/736x/96/3c/48/963c48f7f5be5b7cf05df0eedf845cb6.jpg",
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    handlePrev();
  }, []);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="overflow-hidden w-[800px] h-80 rounded-lg">
        <img
          src={images[current]}
          alt="Gallery"
          className="w-full h-full object-contain cursor-pointer hover:rotate-12 duration-300 ease-in"
        />
      </div>

      <div className="flex gap-4">
        <button
          className=" flex items-center justify-center bg-sky-50 hover:bg-sky-100 p-2.5 w-14 h-8 rounded cursor-pointer"
          onClick={handlePrev}
        >
          <MoveLeftIcon />
        </button>
        <button
          className="flex items-center justify-center bg-sky-50  hover:bg-sky-100  p-2.5 w-14 h-8 rounded cursor-poniter "
          onClick={handleNext}
        >
          <MoveRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

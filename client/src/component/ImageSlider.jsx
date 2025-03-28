
// import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Banner from "../assets/banner.png";
import Banner2 from "../assets/banner2.png";
import Banner3  from "../assets/banner3.png";

const ImageSlider = () => {
  const images = [
    Banner3,
    Banner,
    Banner2
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)

    }, 5000)
    return () => clearInterval(interval)

  }, [images.length])


  return (

    <div className="w-[100%] h-[30rem] pt-4 overflow-hidden relative">
      <div className="flex  transition-transform duration-700 ease-in-out  h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {
          images.map((img, i) => (
            <img key={i} src={img} alt="banner" className="w-full flex-shrink-0 " />
          ))
        }
      </div>
    </div>

  );
};

export default ImageSlider;

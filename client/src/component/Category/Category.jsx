const Category = ({ categoryImage, categoryName }) => {
  return (
    
      <div className=" flex flex-col  items-center justify-center gap-2.5 outline-1  outline-gray-500 w-36 h-36 rounded-2xl  hover:bg-gray-500 hover:text-white cursor-pointer">
        <img src={categoryImage} alt={"Category Images"} className="w-max object-cover fill-current" />
        <span>{categoryName}</span>
      </div>
    
  );
};

export default Category;

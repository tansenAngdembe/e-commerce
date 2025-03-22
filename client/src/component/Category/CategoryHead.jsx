
const CategoryHead = ({cTitle, cHeading}) => {
  return (
    <div className=" mt-20 pl-4 flex flex-col items-start justify-center gap-5">
       <div className="flex gap-5 text-orange-700 font-bold">
        <span className="bg-orange-700 min-w-4 min-h-9 rounded"></span>
        <p>{cTitle}</p>
       </div>
       <h1 className="font-extrabold text-2xl">{cHeading}</h1>
    </div>
  )
}

export default CategoryHead
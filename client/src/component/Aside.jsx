const Aside = () => {
  return (
<div className="w-64 bg-white shadow-lg rounded-lg p-4">
  <h2 className="text-lg font-bold mb-3 text-gray-700 ">Categories</h2>
  <ul className="flex flex-col gap-2">
    {[
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
      <li key={index}>
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-gray-600 transition-all duration-300 hover:bg-sky-100 hover:text-gray-600"
        >
          {category}
        </a>
      </li>
    ))}
  </ul>
</div>


  );
};

export default Aside;

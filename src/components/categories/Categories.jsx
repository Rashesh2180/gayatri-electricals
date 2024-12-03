import React, { useState } from "react";
import { FaLightbulb, FaSearch, FaCogs, FaPaintBrush } from "react-icons/fa"; // Example icons

// Data for categories and additional details (including an image URL for each category)
const categories = [
  {
    id: 1,
    name: "Panel Lights",
    icon: <FaLightbulb />,
    items: 25,
    img: "https://via.placeholder.com/150",
    price: "$50",
    warranty: "2 years",
    lightName: "Panel LED Light",
  },
  {
    id: 2,
    name: "Flood Lights",
    icon: <FaSearch />,
    items: 15,
    img: "https://via.placeholder.com/150",
    price: "$80",
    warranty: "3 years",
    lightName: "Flood LED Light",
  },
  {
    id: 3,
    name: "COB Lights",
    icon: <FaCogs />,
    items: 30,
    img: "https://via.placeholder.com/150",
    price: "$60",
    warranty: "1 year",
    lightName: "COB LED Lamp",
  },
  {
    id: 4,
    name: "Lamps",
    icon: <FaCogs />,
    items: 30,
    img: "https://via.placeholder.com/150",
    price: "$60",
    warranty: "1 year",
    lightName: "COB LED Lamp",
  },

  {
    id: 5,
    name: "Hangings",
    icon: <FaLightbulb />,
    items: 10,
    img: "https://via.placeholder.com/150",
    price: "$100",
    warranty: "2 years",
    lightName: "Hanging LED Light",
  },
  {
    id: 6,
    name: "Zummer",
    icon: <FaSearch />,
    items: 20,
    img: "https://via.placeholder.com/150",
    price: "$70",
    warranty: "2 years",
    lightName: "Zummer Wall LED Light",
  },

  {
    id: 7,
    name: "LED Strip",
    icon: <FaPaintBrush />,
    items: 50,
    img: "https://via.placeholder.com/150",
    price: "$25",
    warranty: "1 year",
    lightName: "LED Strip Light",
  },
  {
    id: 8,
    name: "Street Lights",
    icon: <FaPaintBrush />,
    items: 50,
    img: "https://via.placeholder.com/150",
    price: "$25",
    warranty: "1 year",
    lightName: "LED Strip Light",
  },
  {
    id: 9,
    name: "High Bave",
    icon: <FaPaintBrush />,
    items: 50,
    img: "https://via.placeholder.com/150",
    price: "$25",
    warranty: "1 year",
    lightName: "LED Strip Light",
  },
  {
    id: 10,
    name: "Driver Led",
    icon: <FaPaintBrush />,
    items: 50,
    img: "https://via.placeholder.com/150",
    price: "$25",
    warranty: "1 year",
    lightName: "LED Strip Light",
  },
  {
    id: 11,
    name: "Wall",
    icon: <FaSearch />,
    items: 20,
    img: "https://via.placeholder.com/150",
    price: "$70",
    warranty: "2 years",
    lightName: "Zummer Wall LED Light",
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (id) => {
    setSelectedCategory(selectedCategory === id ? null : id);
  };

  // Find the details of the selected category
  const selectedCategoryDetails = categories.find(
    (category) => category.id === selectedCategory
  );

  return (
    <div className="flex flex-col items-center py-6  total-width  px-10   mx-auto ">
      <div className=" mt-4 mb-6 flex justify-between items-center w-full">
        <div>
          <h2 className=" text-white text-xl font-semibold">Explore</h2>
          <h3 className=" text-white text-xl font-semibold">Categories</h3>
        </div>
        <button className="bg-[#11113b] px-7 py-3 max-sm:px-4 max-sm:text-xs rounded-full text-sm text-white font-semibold">
          View All
        </button>
      </div>
      <div className=" flex gap-4 mb-8 overflow-x-auto w-full mt-2 ">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleClick(category.id)}
            className={`flex flex-col items-center justify-center min-w-[152.82px] p-6   rounded-lg cursor-pointer transition-all duration-300 ${
              selectedCategory === category.id
                ? "!bg-orange-600 text-white"
                : "bg-secondary"
            }`}
          >
            <div className="text-2xl mb-3 text-white">{category.icon}</div>
            <h2 className="text-lg mt-3 text-center font-semibold mb-1 text-white">
              {category.name}
            </h2>
            <p
              className={` text-sm ${
                selectedCategory === category.id
                  ? " text-white "
                  : " text-gray-400"
              }`}
            >
              {category.items} Items
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Features from "../features/Features";

// Sample data for LED lights
const lightsData = [
  {
    id: 1,
    name: "accent",
    price: "$10",
    imageUrl:
      "https://pasolite.s3.ap-south-1.amazonaws.com/aslam/pasolite/wp-content/uploads/slim-surface-panel-light.jpg",
    wallOptions: ["Wall 1", "Wall 2", "Wall 3"],
    watt: "15",
  },
  {
    id: 2,
    name: "flood",
    price: "$15",
    imageUrl:
      "https://www.lampshoponline.com/media/wysiwyg/solo-floodlight.jpg",
    wallOptions: ["Wall 4", "Wall 5"],
    watt: "17",
  },
  {
    id: 3,
    name: "Cob lamps",
    price: "$20",
    imageUrl:
      "data:image/jpeg;base64,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",
    wallOptions: ["Wall 6", "Wall 7", "Wall 8"],
    watt: "18",
  },
  {
    id: 4,
    name: "LED Strip",
    price: "$12",
    imageUrl:
      "https://m.media-amazon.com/images/I/71bAcIVLs1L._AC_UF1000,1000_QL80_.jpg",
    wallOptions: ["Wall 9", "Wall 10"],
    watt: "15",
  },
  {
    id: 5,
    name: "Hangings",
    price: "$20",
    imageUrl:
      "https://haroldelectricals.com/cdn/shop/products/LED-Light-Gold-Crystal-Hanging-light_3_11zon.jpg?v=1665350243",
    wallOptions: ["Wall 6", "Wall 7", "Wall 8"],
    watt: "18",
  },
  {
    id: 6,
    name: "Zummer",
    price: "$12",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR253wB6401cO3t34dAozspAUwUUZplJnp0HA&s",
    wallOptions: ["Wall 9", "Wall 10"],
    watt: "15",
  },
  {
    id: 7,
    name: "Wall Led",
    price: "$20",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3-NTcZZVaG-1tvZ2ywHs829W8C-SytVr1w&s",
    wallOptions: ["Wall 6", "Wall 7", "Wall 8"],
    watt: "18",
  },
  {
    id: 8,
    name: "Zummer",
    price: "$12",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3-NTcZZVaG-1tvZ2ywHs829W8C-SytVr1w&s",
    wallOptions: ["Wall 9", "Wall 10"],
    watt: "15",
  },
];

const Products = () => {
  return (
    <div className="py-4 total-width mx-auto  px-10  my-14">
      
        <div className="overflow-x-auto flex gap-5 w-full">
        {lightsData.map((ele) => (
        
        <div key={ele.id} className="p-4 bg-secondary shrink-0 cursor-pointer rounded-xl shadow-lg mx-auto max-w-[250px]">
          <div className=" h-52">
            <img
              src={ele.imageUrl}
              alt={ele.name}
              className="w-full h-full object-cover object-center mb-4 rounded-xl"
            />
          </div>
          <div className=" flex justify-between items-center mt-3">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {ele.name}
              </h3>
              <h2 className=" mt-1 text-sm text-gray-400">
                {ele.watt} Watt
              </h2>
            </div>
            <p className="text-sm text-orange-600 ">{ele.price}</p>
          </div>
        </div>
    ))}
        </div>
    
    </div>
  );
};

export default Products;
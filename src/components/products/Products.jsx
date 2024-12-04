import React from "react";
import { Link } from "react-router-dom";
import { lightsData } from "../../helpers/helpers";

const Products = () => {
  return (
    <div className="py-4 total-width mx-auto px-10 my-14">
      <div className="overflow-x-auto flex gap-5 w-full">
        {lightsData.map((ele) => (
          <Link
            key={ele.id}
            to={`/product/${ele.id}`} // Dynamically create the URL using product id
            className="p-4 bg-secondary shrink-0 cursor-pointer rounded-xl shadow-lg mx-auto min-w-[240px] max-w-[250px]"
          >
            <div className="h-52 w-full">
              <img
                src={ele.imageUrl}
                alt={ele.name}
                className="w-full h-full object-cover object-center mb-4 rounded-xl"
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{ele.name}</h3>
                <h2 className="mt-1 text-sm text-gray-400">{ele.watt} Watt</h2>
              </div>
              <p className="text-sm text-orange-600">{ele.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

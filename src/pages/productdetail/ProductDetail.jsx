import React from "react";
import { useParams } from "react-router-dom";
import { lightsData } from "../../helpers/helpers"; // Import the lightsData or use your data source

const ProductDetail = () => {
  // Get the product id from the URL using useParams hook
  const { id } = useParams();

  // Find the product with the given id
  const product = lightsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className=" max-w-[1200px] mx-auto w-full py-10 px-5">
      <div className="flex w-full justify-center items-center">
        <div className=" w-full p-6 bg-secondary rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-[3]">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-[250px] object-cover rounded-xl"
              />
            </div>
            <div className="flex-[9]">
              <div className=" flex justify-between items-center gap-2">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    {product.watt} Watt
                  </p>
                </div>
                <p className=" text-lg font-semibold text-orange-600"> ₹ {product.price}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg text-white">Product Description</h3>
                <p className="text-slate-300 text-sm mt-1">
                  {product.description || "No description available"}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
               <div>
               <h3 className="text-xl text-white">Features</h3>
                <ul className="list-disc ml-5 mt-3 text-gray-300 text-sm">
                  {product.features && product.features.length > 0 ? (
                    product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))
                  ) : (
                    <li>No features listed</li>
                  )}
                </ul>
               </div>
               <button className="bg-orange-600 px-7 py-3 max-sm:px-4 max-sm:text-xs rounded-full text-sm text-white font-semibold">
          Buy Now
        </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

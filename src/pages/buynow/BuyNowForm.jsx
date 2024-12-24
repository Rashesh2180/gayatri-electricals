import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { lightsData } from "../../helpers/helpers"; // Import the lightsData or your data source

const BuyNowForm = () => {
  const { id } = useParams();
  const product = lightsData.find((item) => item.id === parseInt(id));

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the message to send to WhatsApp
    const message = `
      *New Order Details:*
      *Product:* ${product.name}
      *Price:* ₹${product.price}
      *Wattage:* ${product.watt}
      *Description:* ${product.description || "No description available"}
      
      *Customer Details:*
      *Phone:* ${phone}
      *Email:* ${email}
    `;

    const whatsappNumber = "+919106824852"; 

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className="max-w-[600px] h-full flex flex-col justify-center items-center mx-auto w-full py-10 px-5">
      <div className="flex w-full justify-center items-center">
        <div className="w-full p-6 bg-secondary rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-white">Fill Your Details</h2>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-white" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 mt-2 rounded-md bg-gray-800 text-white"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-2 rounded-md bg-gray-800 text-white"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-full text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowForm;

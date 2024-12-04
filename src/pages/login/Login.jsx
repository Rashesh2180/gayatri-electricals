import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server or API
    console.log("Form submitted", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="w-full p-8 rounded-lg shadow-lg h-screen flex flex-col justify-center items-center">
        <h1 className=" text-3xl text-white mb-10">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[450px] mx-auto p-8 border-4 border-slate-600 rounded-2xl">
        <div className="flex  flex-col gap-5">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3  bg-secondary flex-1 w-full text-xs text-white  outline-none rounded-sm"
            required
            placeholder="Enter your email"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 flex-1 w-full  bg-secondary text-xs text-white  outline-none rounded-sm"
            placeholder="Enter your phone number"
          />
        </div>
        <NavLink className=" text-slate-400 ml-auto  text-sm font-semibold flex justify-end w-full">
            Forgot Password
        </NavLink>

        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md "
        >
          Submit
        </button>

        <NavLink className=" mt-5 text-slate-400 ml-auto  text-sm font-semibold flex justify-center w-full">
            Dont have account ?
        </NavLink>
      </form>
    </div>
  );
};

export default Login;

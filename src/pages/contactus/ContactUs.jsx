import React, { useState } from "react";

const ContactUs = () => {
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
    <div className="custom-bg h-full mx-auto px-4 py-12 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-white mb-3 ">
        Contact Us
      </h1>
      <p className="mb-2 text-center sm:max-w-[60%] mx-auto text-lg text-white">
        Whether you have a question about our LED lighting products, need
        customer support, or want to request a quote, feel free to reach out to
        us!
      </p>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-lg bg-[#09092a] p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3  bg-secondary text-xs text-white  outline-none rounded-sm"
                required
                placeholder="Enter your first name"
              />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3  bg-secondary text-xs text-white  outline-none rounded-sm"
                required
                placeholder="Enter your Last name"
              />
            </div>

            <div className="flex  gap-4">
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

            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="p-3 flex-1 w-full  bg-secondary text-xs text-white  outline-none rounded-sm"
                required
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

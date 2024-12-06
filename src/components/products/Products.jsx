import React, { useState } from "react";
import { Link } from "react-router-dom";
import { lightsData } from "../../helpers/helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
const Products = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="py-4 total-width mx-auto px-10 my-14">
      <div className="w-full flex justify-end gap-5  mb-5 items-center">
        {/* Left Button */}
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12 bg-orange-600 shrink-0 rounded-full flex justify-center items-center"
        >
         <FaAngleLeft className=" text-white" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => swiperRef?.slideNext()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12 shrink-0  bg-orange-600 rounded-full flex justify-center items-center"
        >
         <FaAngleRight className=" text-white" />
        </button>
      </div>

      {/* Swiper Component */}
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Pagination, Navigation, A11y]}
        className="!py-5 !px-2 w-full !mx-auto mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600:{
            slidesPerView: 2,

          },
          768: {
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 4,

          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {/* Loop through lightsData to create slides */}
        {lightsData.map((ele) => (
          <SwiperSlide key={ele.id} className="justify-start mx-auto !p-4 bg-secondary rounded-xl">
            <Link
              to={`/product/${ele.id}`} // Dynamically create the URL using product id
              className=" shrink-0 cursor-pointer h-full  shadow-lg mx-auto min-w-[240px] max-w-[250px]"
            >
              <div className="h-52 max-sm:h-60 w-full">
                <img
                  src={ele.imageUrl}
                  alt={ele.name}
                  className="w-full h-full object-cover object-center mb-4 rounded-xl"
                />
              </div>
              <div className="flex justify-between items-center mt-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {ele.name}
                  </h3>
                  <h2 className="mt-1 text-sm text-gray-400">
                    {ele.watt} Watt
                  </h2>
                </div>
                <p className="text-sm text-orange-600">₹ {ele.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;

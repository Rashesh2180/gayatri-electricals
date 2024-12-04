import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade,Pagination  } from "swiper/modules";
import { lightsData } from "../../helpers/helpers";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const LedLights = () => {
  return (
    <div className=" w-full">
      <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
       
      >
        {lightsData &&
          lightsData.map((ele) => (
            <SwiperSlide key={ele.id} className="m-auto">
                <img src={ele.imageUrl} alt="" className=" rounded-xl bg-red-50  h-[400px] w-full object-cover object-center" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LedLights;

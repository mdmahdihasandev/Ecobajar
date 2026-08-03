import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import productSmall1 from '../assets/Productsixe-small(1).png';

import Container from "../Components/Layuots/Container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Details() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container>
      <div className="flex gap-[10px]">

        {/* ================= LEFT SWIPER ================= */}

        <div className="w-[90px] h-[550px] mt-[10px]">

          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            navigation={true}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper h-[550px]"
          >

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src={productSmall1}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-2.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-3.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-4.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-5.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-6.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-7.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-8.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-9.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[125px] object-cover cursor-pointer"
                src="https://swiperjs.com/demos/images/abstract-10.jpg"
                alt=""
              />
            </SwiperSlide>

          </Swiper>

        </div>


        {/* ================= RIGHT BIG SWIPER ================= */}

        <div className="w-[550px] h-[550px]">

          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed
                  ? thumbsSwiper
                  : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-full h-full"
          >

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-1.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-2.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-3.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-4.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-5.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-6.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-7.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-8.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-9.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://swiperjs.com/demos/images/abstract-10.jpg"
                alt=""
              />
            </SwiperSlide>

          </Swiper>

        </div>

      </div>
    </Container>
  );
}
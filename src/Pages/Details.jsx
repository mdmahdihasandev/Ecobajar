import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import productSmall1 from '../assets/Productsixe-small1.png'
import productSmall2 from '../assets/Productsixe-small2.png'
import productSmall3 from '../assets/Productsixe-small3.png'
import productSmall4 from '../assets/Productsixe-small4.png'

import Container from "../Components/Layuots/Container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Details() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container>
      <div className="flex gap-[10px] my-[35px]">

        {/* ================= LEFT SWIPER ================= */}

        <div className="w-[90px] h-[550px] mt-[40px] ">

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
            className="mySwiper h-[500px]"
          >

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall1}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall2}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall3}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall4}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall1}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall2}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall3}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall4}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall2}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[100px] object-cover cursor-pointer"
                src={productSmall3}
                alt=""
              />
            </SwiperSlide>

          </Swiper>

        </div>


        {/* ================= RIGHT BIG SWIPER ================= */}

        <div className="w-[550px] h-[550px] ">

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
                className="w-full h-full object-cover "
                src={productSmall1}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall2}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall3}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall4}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall1}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall2}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall3}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall4}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall2}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productSmall3}
                alt=""
              />
            </SwiperSlide>

          </Swiper>

        </div>

      </div>
    </Container>
  );
}
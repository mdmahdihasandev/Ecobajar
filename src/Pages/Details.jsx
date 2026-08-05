import React, { useState } from "react";


import ReactImageZoom from "react-image-zoom";


import { FaArrowDown } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowUp } from "react-icons/fa";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import productSmall1 from '../assets/Productsixe-small1.png'
import Bannerlogo from '../../src/assets/bannerpic.webp'
import productSmall3 from '../assets/Productsixe-small3.png'
import productSmall4 from '../assets/Productsixe-small4.png'
import productbigg from '../assets/Productsixebig.png'

import Container from "../Components/Layuots/Container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Details() {
  const props = {
 
  zoomWidth: 600,
  img: Bannerlogo,
};

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <Container>
      <div className="flex gap-[10px] my-[35px] relative ">

        {/* ================= LEFT SWIPER ================= */}



        <div className="w-[90px] h-[550px]   sm:h-[200px]  md:h-[300px]  lg:h-[550px] mt-[40px]">



          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
              breakpoints={{
            640: {
                slidesPerView: 4,
            },
        }}
            // navigation={true}
            navigation={{
              nextEl: '.custom-nextf',
              prevEl: '.custom-prevf',
            }}
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
                src={productSmall1}
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
                src={productSmall3}
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
                src={productSmall4}
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


         <div className="custom-nextf cursor-pointer absolute  top-[-10px] left-[30px] ">
            <FaArrowUp className="text-[25px]" />
         </div>
         <div className="custom-prevf cursor-pointer absolute   left-[30px] ">
            <FaArrowDown className="text-[25px]" />
         </div>

        </div>



        {/* ================= RIGHT BIG SWIPER ================= */}

        <div className="w-[230px] h-[230px]    sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[550px] lg:h-[550px] ">

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
                src={productbigg}
                alt=""

              />

               

            </SwiperSlide>

            <SwiperSlide>
              {/* <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
                
              /> */}
              <ReactImageZoom  {...props} />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={productbigg}
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
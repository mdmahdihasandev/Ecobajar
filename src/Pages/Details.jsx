import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

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
      <div className="flex gap-[24px] my-[35px] relative ">

        {/* ================= LEFT SWIPER ================= */}



      <div className="flex ">
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



                <div  className="w-full">
                 <h2 className=" flex items-center font-poppins font-extrabold text-[40px]  text-[#1A1A1A]">Chinese Cabbage    <span className=" mt-[5px] bg-[#c1dac1d0] text-[#2C742F] rounded-[5px]   py-[6px] px-[10px] ml-[10px] font-poppins font-medium text-[15px] ">In Stock</span> </h2>

                 <div className=" mt-[10px]">
                  <p className="flex items-center">
                    <FaStar className="text-[#FF8A00] mr-[3px] " />
                   
                    <FaStar className="text-[#FF8A00] mr-[3px] " />
                   
                    <FaStar className="text-[#FF8A00] mr-[3px] " />
                   
                    <FaStar className="text-[#FF8A00] mr-[3px] " />
                   
                    <FaStar className="text-[#FF8A00] mr-[3px] " />
                   
                    <span className="font-poppins font-medium text-[14px] text-[#666666] pl-[4px] relative after:w-[5px] after:h-[5px] after:rounded-[5px] after:bg-[#B3B3B3] after:content-[''] after:absolute gap-3.5 after:top-[9px] after:left-[70px]  "> 4 Review</span>

                  <h4 className="pl-[30px] font-poppins font-medium text-[14px]">SKU: <span className="text-[#666666]">2,51,594</span></h4>

                  </p>
                 </div>

                 <div className="flex items-center my-[20px] ">
                  <h2 className="line-through text-[#B3B3B3] font-poppins font-medium text-[23px] pr-[5px]">$48.00</h2>
                  <h2 className="text-[#2C742F] font-poppins pr-[13px] font-medium text-[23px]">$17.28</h2>
                  <p className="font-poppins font-medium text-[15px] text-[#EA4B48] py-[3px] px-[13px] rounded-[30px] bg-[#d38d8d2d]">64% Off</p>
                
                 </div>

                 <div className="border border-b-[#E5E5E5]"></div>

                 <div className="flex justify-between">
                  <h1>Brand:</h1>
                  <p>sadfgsdg</p>
                 </div>
              
                </div>


      </div>
    </Container>
  );
}
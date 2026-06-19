import React from 'react'
import Container from './Layuots/Container'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaDove } from "react-icons/fa";
import chotpic from '../assets/chotpic.webp'
import chotopic from '../assets/picchipix(1).webp'
import chotopictow from '../assets/picchipix (2).webp'
import { IoStar } from "react-icons/io5";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const Client = () => {
  return (
    <div className='bg-[#F2F2F2] mb-[50px] pb-[10px]'>
        <Container>

       <div className='pt-[50px] pb-[25px]'>
         <h2 className='font-poppins font-semibold text-[32px] text-[#1A1A1A]'>Client Testimonials</h2>
       </div>










         <div className='flex gap-[24px] '>


            
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
             <div className='w-[424px] bg-[#FFFFFF]  border border-[#e5e2e2] mb-[40px] '>

            <div className='pl-[24px] pt-[24px] pb-[10px]'>
                <FaDove className='w-[20px] h-[20px] text-[#00B207] ' />
            </div>
                    
                  <div className='w-[370px]'>
                      <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[14px] text-[#4D4D4D] '>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>

                        </div>

                    <div className='pl-[24px]  pb-[24px] flex items-center relative'>
                        <img src={chotpic} alt="" />

                       <div className='pl-[10px]'>
                         <p className='font-poppins font-medium text-[16px] text-[#1A1A1A]'>Robert Fox</p>
                         <p className='font-poppins font-normal text-[14px] text-[#999999]' >Customer</p>
                       </div>

                        <div className=' flex absolute top-[20px] right-[25px] text-[#FF8A00]'>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>

                   
             </div>

        </SwiperSlide>
        <SwiperSlide>
             <div className='w-[424px] bg-[#FFFFFF]  border border-[#e5e2e2] mb-[40px] '>

            <div className='pl-[24px] pt-[24px] pb-[10px]'>
                <FaDove className='w-[20px] h-[20px] text-[#00B207] ' />
            </div>
                    
                  <div className='w-[370px]'>
                      <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[14px] text-[#4D4D4D] '>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>

                        </div>

                    <div className='pl-[24px]  pb-[24px] flex items-center relative'>
                        <img src={chotopic} alt="" />

                       <div className='pl-[10px]'>
                         <p className='font-poppins font-medium text-[16px] text-[#1A1A1A]'>Robert Fox</p>
                         <p className='font-poppins font-normal text-[14px] text-[#999999]' >Customer</p>
                       </div>

                        <div className=' flex absolute top-[20px] right-[25px] text-[#FF8A00]'>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>

                   
             </div>
    
        </SwiperSlide>
        <SwiperSlide>
         <div className='w-[424px] bg-[#FFFFFF]  border border-[#e5e2e2] mb-[40px] '>

            <div className='pl-[24px] pt-[24px] pb-[10px]'>
                <FaDove className='w-[20px] h-[20px] text-[#00B207] ' />
            </div>
                    
                  <div className='w-[370px]'>
                      <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[14px] text-[#4D4D4D] '>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>

                        </div>

                    <div className='pl-[24px]  pb-[24px] flex items-center relative'>
                        <img src={chotopictow} alt="" />

                       <div className='pl-[10px]'>
                         <p className='font-poppins font-medium text-[16px] text-[#1A1A1A]'>Robert Fox</p>
                         <p className='font-poppins font-normal text-[14px] text-[#999999]' >Customer</p>
                       </div>

                        <div className=' flex absolute top-[20px] right-[25px] text-[#FF8A00]'>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>

                   
             </div>

        </SwiperSlide>
        <SwiperSlide>
         <div className='w-[424px] bg-[#FFFFFF]  border border-[#e5e2e2] mb-[40px] '>

            <div className='pl-[24px] pt-[24px] pb-[10px]'>
                <FaDove className='w-[20px] h-[20px] text-[#00B207] ' />
            </div>
                    
                  <div className='w-[370px]'>
                      <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[14px] text-[#4D4D4D] '>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>

                        </div>

                    <div className='pl-[24px]  pb-[24px] flex items-center relative'>
                        <img src={chotpic} alt="" />

                       <div className='pl-[10px]'>
                         <p className='font-poppins font-medium text-[16px] text-[#1A1A1A]'>Robert Fox</p>
                         <p className='font-poppins font-normal text-[14px] text-[#999999]' >Customer</p>
                       </div>

                        <div className=' flex absolute top-[20px] right-[25px] text-[#FF8A00]'>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>

                   
             </div>

        </SwiperSlide>
        <SwiperSlide>
         <div className='w-[424px] bg-[#FFFFFF]  border border-[#e5e2e2] mb-[40px] '>

            <div className='pl-[24px] pt-[24px] pb-[10px]'>
                <FaDove className='w-[20px] h-[20px] text-[#00B207] ' />
            </div>
                    
                  <div className='w-[370px]'>
                      <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[14px] text-[#4D4D4D] '>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>

                        </div>

                    <div className='pl-[24px]  pb-[24px] flex items-center relative'>
                        <img src={chotpic} alt="" />

                       <div className='pl-[10px]'>
                         <p className='font-poppins font-medium text-[16px] text-[#1A1A1A]'>Robert Fox</p>
                         <p className='font-poppins font-normal text-[14px] text-[#999999]' >Customer</p>
                       </div>

                        <div className=' flex absolute top-[20px] right-[25px] text-[#FF8A00]'>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>

                   
             </div>

        </SwiperSlide>
       
      </Swiper>


               
         </div>
        </Container>
    </div>
  )
}

export default Client
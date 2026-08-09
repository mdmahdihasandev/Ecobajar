import React from 'react'
import Container from '../Components/Layuots/Container'
import aboutpic from '../assets/about.png'
import bg from '../assets/BG.png'
import images from '../assets/Image.png'
import delivery from '../assets/delivery.png'
import { GiPriceTag } from 'react-icons/gi'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaDove } from "react-icons/fa";
import chotpic from '../assets/chotpic.webp'
import chotopic from '../assets/picchipix(1).webp'
import chotopictow from '../assets/picchipix (2).webp'
import { IoStar } from "react-icons/io5";

// swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation , Autoplay } from 'swiper/modules';
import Group from '../assets/Grou.webp'

const About = () => {
  return (
    <>
    <Container>

    {/* fast div */}
     <div className='flex my-[50px] items-center justify-between'>
      <div className='w-[600px]'>
        <h2 className='font-poppins font-bold text-[40px] w-[400px] pb-[15px]'>100% Trusted Organic Food Store</h2>

        <p className='font-poppins font-medium text-[14px] text-[#666666] w-[430px]'>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
        </p>

      </div>
      <div className='w-[650px]'>
        <img src={aboutpic} alt="" />
      </div>
     </div>
    {/* secend div */}

    {/* ===== 2 ====== */}

    <div className='flex items-center my-[40px]'>
      <div className='w-[700px] relative'>
        <img src={bg} alt="" />
        <img className='absolute top-0 left-[125px] w-[460px]' src={images} alt="" />
      </div>
      <div className='w-[500px]'>
        <h2 className='font-poppins font-bold text-[40px] w-[400px] pb-[15px]'>100% Trusted Organic Food Store</h2>

        <p className='font-poppins font-medium text-[14px] text-[#666666] w-[430px]'>Morbi porttitor ligula in nunc varius Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. 
        </p>

          <div className="flex items-center  gap-[7px] flex-wrap  rounded-[7px] p-[10px]">
        
   
                        <div>
                          <GiPriceTag className="text-[25px] text-[#00B207]" />
                        </div>
                        <div className="pr-[20px] ">
                          <h5 className="font-poppins font-medium text-[15px] text-[#1A1A1A]">64% Discount</h5>
                          <p className="font-poppins font-normal text-[14px] text-[#808080]">Save your 64% money with us</p>
                        </div>
                        <div>
                          <GiPriceTag className="text-[25px] text-[#00B207]" />
                        </div>
                        <div className=" ">
                          <h5 className="font-poppins font-medium text-[15px] text-[#1A1A1A]">64% Discount</h5>
                          <p className="font-poppins font-normal text-[14px] text-[#808080]">Save your 64% money with us</p>
                        </div>
        
                      </div>
          <div className="flex items-center  gap-[7px] flex-wrap  rounded-[7px] p-[10px]">
        
   
                        <div>
                          <GiPriceTag className="text-[25px] text-[#00B207]" />
                        </div>
                        <div className="pr-[20px] ">
                          <h5 className="font-poppins font-medium text-[15px] text-[#1A1A1A]">64% Discount</h5>
                          <p className="font-poppins font-normal text-[14px] text-[#808080]">Save your 64% money with us</p>
                        </div>
                        <div>
                          <GiPriceTag className="text-[25px] text-[#00B207]" />
                        </div>
                        <div className=" ">
                          <h5 className="font-poppins font-medium text-[15px] text-[#1A1A1A]">64% Discount</h5>
                          <p className="font-poppins font-normal text-[14px] text-[#808080]">Save your 64% money with us</p>
                        </div>
        
                      </div>
          <div className="flex items-center  gap-[7px] flex-wrap  rounded-[7px] p-[10px]">
        
   
                        <div>
                          <GiPriceTag className="text-[25px] text-[#00B207]" />
                        </div>
                        <div className="pr-[20px] ">
                          <h5 className="font-poppins font-medium text-[15px] text-[#1A1A1A]">64% Discount</h5>
                          <p className="font-poppins font-normal text-[14px] text-[#808080]">Save your 64% money with us</p>
                        </div>
                        <div>
                          <GiPriceTag className="text-[25px] text-[#00B207]" />
                        </div>
                        <div className=" ">
                          <h5 className="font-poppins font-medium text-[15px] text-[#1A1A1A]">64% Discount</h5>
                          <p className="font-poppins font-normal text-[14px] text-[#808080]">Save your 64% money with us</p>
                        </div>
        
                      </div>
        
      </div>
    </div>

    {/* ===== 2 ====== */}


    {/* ===== 3 ===== */}

     <div className='flex my-[50px] items-center justify-between'>
      <div className='w-[600px] ml-[100px]'>
        <h2 className='font-poppins font-bold text-[40px] w-[400px] pb-[15px]'>We Delivered, You Enjoy Your Order.</h2>

        <p className='font-poppins font-medium text-[14px] text-[#666666] w-[430px]'>
          Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
        </p>

        <p className='flex gap-[5px] items-center my-[5px] font-poppins font-medium text-[14px] text-[#666666]'>
         <FaCheck className='text-[#00B207]' /> Sed in metus pellentesque.
        </p>
        <p className='flex gap-[5px] items-center my-[5px] font-poppins font-medium text-[14px] text-[#666666]'>
         <FaCheck className='text-[#00B207]' /> Sed in metus pellentesque.
        </p>
        <p className='flex gap-[5px] items-center my-[5px] font-poppins font-medium text-[14px] text-[#666666]'>
         <FaCheck className='text-[#00B207]' /> Sed in metus pellentesque.
        </p>

        <button className='font-poppins font-medium text-[15px] text-[white] mt-[15px] bg-[#00B207] py-[5px] px-[55px] rounded-[20px] '>Now</button>

      </div>
      <div className='w-[650px]'>
        <img src={delivery} alt="" />
      </div>
     </div>

    {/* ===== 3 ===== */}


    {/* ==== 4 ===== */}




    <div className='w-[550px] mx-auto text-center mb-[40px]'>
      <h2 className='font-poppins font-bold text-[45px]'>Our Awesome Team</h2>
      <p className='font-poppins font-medium text-[#666666] text-[16px] '>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
    </div>



      {/* swiper */}

      
    

    <div className='flex gap-[25px]'>

      <Swiper navigation={true}
       modules={[Navigation]}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30} 
       className="mySwiper">

        <SwiperSlide>
          <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>

        <SwiperSlide>
           
      <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
           
      <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
           
      <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
           
      <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
           
      <div className=' mb-[80px]'>
          <img src={aboutpic} alt="" />
          <div className='bg-[#f5f2f2]'>
           <div className='pl-[15px] py-[7px]'>
             <h5 className='font-poppins font-bold text-[14px]'>Jenny Wilson</h5>
            <p className='text-[#808080] font-poppins font-medium text-[14px]'>Ceo & Founder</p>
           </div>
          </div>
      </div>
        </SwiperSlide>
       
      </Swiper>
    
      
    
    
    
     
    </div>

    {/* ==== 4 ===== */}



    {/* ===== 5 ===== */}

       

    {/* ===== 5 ===== */}

    </Container>

    {/* 2 number container */}

           <div className='bg-[#F2F2F2] mb-[50px] pb-[10px] mt-[30px] '>
            <Container>

                <div className='pt-[50px] pb-[25px]'>
                    <h2 className='font-poppins font-semibold text-[32px] text-[#1A1A1A]'>Client Testimonials</h2>
                </div>





                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    //   autoplay={{
                    //   delay: 2000,
                    //   disableOnInteraction: false,
                    //   pauseOnMouseEnter: true,
                    // }}

                      breakpoints={{
                        640: {
                            slidesPerView:3,
                            
                        },
                        }}

                    className="clientSwiper "
                    
                   
                >
                    <SwiperSlide>
                        <div className='w-[424px]  bg-[#FFFFFF]  border border-[#e5e2e2]  mb-[40px] '>

                            <div className='pl-[24px] pt-[24px] pb-[10px]'>
                                <FaDove className='w-[20px] h-[20px] text-[#00B207] ' />
                            </div>

                            <div className='sm:w-[370px] w-[297px]'>
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

                            <div className='sm:w-[370px] w-[297px]'>
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

                            <div className='sm:w-[370px] w-[297px]'>
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

                            <div className='sm:w-[370px] w-[297px]'>
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

                            <div className='sm:w-[370px] w-[297px]'>
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

                            <div className='sm:w-[370px] w-[297px]'>
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



            </Container>
        </div>

         <div className='flex  flex-wrap justify-center justify-between my-[50px] '>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] text-[blue] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
              
            </div>

         {/* 2 number container */}

    </>
  )
}

export default About
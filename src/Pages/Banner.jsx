import React from 'react'
import Container from '../Components/Layuots/Container'
import Bannerlogo from '../../src/assets/bannerpic.webp'
import BannerRigt from '../../src/assets/BannerRigt.webp'
import BannerRigt2 from '../../src/assets/BannerRigt2.webp'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import { Navigation } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';

import { Autoplay, Pagination, Navigation ,Scrollbar} from 'swiper/modules';

const Banner = () => {
  return (
    <div>
        <Container>
           <div className='sm:flex sm:justify-between sm:mb-[24px]'>
             <div className='max-w-[872px] relative'>
              
               <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                     navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                      }}
                   modules={[Navigation, Pagination , Autoplay]}
                    // pagination={{
                    //    clickable: true,
                    // }} 

                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}

                    loop={true}
                 
                  >
                    <SwiperSlide>
                      <img className='pt-[24px]' src={Bannerlogo} alt="Bannerlogo" />
                    </SwiperSlide>
                    <SwiperSlide>
                       <img className='pt-[24px]' src={Bannerlogo} alt="Bannerlogo" />
                    </SwiperSlide>
                    <SwiperSlide>
                       <img className='pt-[24px]' src={Bannerlogo} alt="Bannerlogo" />
                    </SwiperSlide>
                    <SwiperSlide>
                       <img className='pt-[24px]' src={Bannerlogo} alt="Bannerlogo" />
                    </SwiperSlide>
                    
                </Swiper>

                   <div className="custom-prev w-[20px] h-[20px] bg-[#f7f7f7] sm:w-[36px] sm:h-[36px] sm:bg-[white] absolute ml-[15px] sm:ml-[36px] text-[10px] sm:text-[20px]">
                     <FaArrowLeft  />
                    </div>
                    <div className="custom-next  w-[20px] h-[20px] bg-[#f7f7f7] sm:w-[36px] sm:h-[36px] sm:bg-[white] absolute ml-[15px] sm:ml-[36px] text-[10px] sm:text-[20px]">
                      
                       <FaArrowRight /> 
                  </div>

              </div>
            <div className='max-w-[423px] hidden sm:block'>
                <div>
                
       <Swiper
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
             scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
              
              >
              <SwiperSlide>
                <img className='sm:pt-[24px] sm:pb-[24px]' src={BannerRigt} alt="BannerRigt" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sm:pt-[24px] sm:pb-[24px]' src={BannerRigt} alt="BannerRigt" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sm:pt-[24px] sm:pb-[24px]' src={BannerRigt} alt="BannerRigt" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sm:pt-[24px] sm:pb-[24px]' src={BannerRigt} alt="BannerRigt" />
              </SwiperSlide>
    </Swiper>
                
                </div>

                <div className=''>
       <Swiper
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
           
            pagination={{
              clickable: true,
           }}
            modules={[Pagination]}
              
              >
              <SwiperSlide>
                <img src={BannerRigt2} alt="BannerRigt2" />
              </SwiperSlide>
              <SwiperSlide>
               <img src={BannerRigt2} alt="BannerRigt2" />
              </SwiperSlide>
              <SwiperSlide>
               <img src={BannerRigt2} alt="BannerRigt2" />
              </SwiperSlide>
              <SwiperSlide>
              <img src={BannerRigt2} alt="BannerRigt2" />
              </SwiperSlide>
    </Swiper>
                
                </div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Banner
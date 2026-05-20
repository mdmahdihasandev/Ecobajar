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
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
        <Container>
           <div className='flex justify-between mb-[24px]'>
             <div className='max-w-[872px] relative'>
              
               <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                     navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                      }}
                    modules={[Navigation]}
                    autoplay={true}
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

                   <div className="custom-prev">
                     <FaArrowLeft />
                    </div>
                    <div className="custom-next">
                      
                       <FaArrowRight /> 
                  </div>

              </div>
            <div className='max-w-[423px]'>
                <div><img className='pt-[24px] pb-[24px]' src={BannerRigt} alt="BannerRigt" /></div>
                <div><img src={BannerRigt2} alt="BannerRigt2" /></div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Banner
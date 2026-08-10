import React from 'react'
import Container from '../Components/Layuots/Container'
import Bannerlogo from '../../src/assets/bannerpic.webp'
import BannerRigt from '../../src/assets/BannerRigt.webp'
import BannerRigt2 from '../../src/assets/BannerRigt2.webp'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <div className='py-4 lg:py-6'>
      <Container>
        <div className='flex flex-col lg:flex-row justify-between gap-6 mb-6'>
          
          {/* Main Banner Slider (Left Side) */}
          <div className='w-full lg:max-w-[872px] relative group'>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              className='rounded-2xl overflow-hidden'
            >
              <SwiperSlide>
                <img className='w-full h-auto object-cover rounded-2xl' src={Bannerlogo} alt="Bannerlogo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full h-auto object-cover rounded-2xl' src={Bannerlogo} alt="Bannerlogo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full h-auto object-cover rounded-2xl' src={Bannerlogo} alt="Bannerlogo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full h-auto object-cover rounded-2xl' src={Bannerlogo} alt="Bannerlogo" />
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button className="custom-prev z-10 w-8 h-8 sm:w-11 sm:h-11 bg-white/80 hover:bg-white text-black flex justify-center items-center rounded-full shadow-md absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 transition-all cursor-pointer">
              <FaArrowLeft className='text-xs sm:text-base' />
            </button>
            <button className="custom-next z-10 w-8 h-8 sm:w-11 sm:h-11 bg-white/80 hover:bg-white text-black flex justify-center items-center rounded-full shadow-md absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 transition-all cursor-pointer">
              <FaArrowRight className='text-xs sm:text-base' />
            </button>
          </div>

          {/* Right Side Banners (Visible on Desktop / Tablet) */}
          <div className='w-full lg:max-w-[423px] flex flex-col gap-6 hidden sm:flex'>
            
            {/* Top Right Slider */}
            <div className='w-full overflow-hidden rounded-2xl'>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                scrollbar={{
                  hide: true,
                }}
                modules={[Scrollbar, Autoplay]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt} alt="BannerRigt" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt} alt="BannerRigt" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt} alt="BannerRigt" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt} alt="BannerRigt" />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Bottom Right Slider */}
            <div className='w-full overflow-hidden rounded-2xl'>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt2} alt="BannerRigt2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt2} alt="BannerRigt2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt2} alt="BannerRigt2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-auto object-cover rounded-2xl' src={BannerRigt2} alt="BannerRigt2" />
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
import React, {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Components/Layuots/Container';
 


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function Details() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(thumbsSwiper);
  
  

  return (
    <>

  
     <Container>
        <div className='flex gap-[10px] relative'>

      <div className='w-[400px] h-[550px] mt-[10px] bg-[red] absolute'>

      <Swiper
        onSwiper={setThumbsSwiper}

          direction={'vertical'}
           
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        // freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
       

    
        <SwiperSlide >
          <img  src="https://swiperjs.com/demos/images/abstract-1.jpg" />
        </SwiperSlide>
          <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-10.jpg" />
        </SwiperSlide>


      </Swiper>

    gfhfgjhfgjh
      </div>


      {/* secend  */}

       <div className='w-full'>
       <Swiper
      
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-10.jpg" />
        </SwiperSlide>
      </Swiper>
      
      </div>
       </div>

     </Container>

     
    </>
  );
}

import React from 'react'
import { useSwiper } from 'swiper/react';

const Customicom = () => {

   
  const swiper = useSwiper();

  return (
   <>
    <div className="controls">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
   </>
  )
}

export default Customicom
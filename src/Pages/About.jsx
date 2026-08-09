import React from 'react'
import Container from '../Components/Layuots/Container'
import aboutpic from '../assets/about.png'
import bg from '../assets/BG.png'
import images from '../assets/Image.png'
import { GiPriceTag } from 'react-icons/gi'
import { FaCheck } from "react-icons/fa6";

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
      <div className='w-[600px]'>
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
        <img src={aboutpic} alt="" />
      </div>
     </div>

    {/* ===== 3 ===== */}

    </Container>
    </>
  )
}

export default About
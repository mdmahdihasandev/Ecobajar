import React from 'react'
import Container from './Layuots/Container'
import card from '../assets/card (1).webp'
import cardone from '../assets/card (2).webp'
import cardtow from '../assets/card (3).webp'
import { GoTag } from "react-icons/go"
import { FaRegUser } from "react-icons/fa";
import { CiChat2 } from "react-icons/ci";
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";

const LatestNews = () => {
  return (
    <div>
        <Container>
           <div className='flex justify-center mb-[32px]'>
             <h2 className='font-poppins font-semibold  text-[32px] text-[#1A1A1A]'>Latest News</h2>
           </div>

            <div className='flex justify-between'>
                <div>
                    <img src={card} alt="card" />
                </div>
                <div>
                      <img src={cardone} alt="card" />
                </div>
                <div>
                      <img src={cardtow} alt="card" />
                     
                </div>
               
            </div>
            
            <div className='flex justify-between mb-[60px]'>


                 <div className='w-[424px]   border border-[#e5e2e2]'>

                   <div className='flex '>
                     <p className='flex pt-[24px] pl-[20px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <GoTag className='text-[20px] text-[#FFFFFF]  ' /> Food </p>

                    <p className='flex pt-[24px] pl-[24px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <FaRegUser  className='text-[20px] text-[#FFFFFF]  ' /> By Admin </p>

                    <p className='flex pt-[24px] pl-[24px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <CiChat2  className='text-[23px] text-[#FFFFFF]  ' /> 65 Comments </p>

                   </div>
                    
                        <div className='w-[376px]'>
                            <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[18px]  text-[#2C742F]'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>

                            <Link className='font-poppins font-semibold text-[17px] pl-[24px]  pb-[18px] flex items-center gap-2 text-[#00B207]'>Read More <FaLongArrowAltRight /></Link>

                        </div>
                   
                 </div>
                 <div className='w-[424px]   border border-[#e5e2e2]'>

                   <div className='flex '>
                     <p className='flex pt-[24px] pl-[20px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <GoTag className='text-[20px] text-[#FFFFFF]  ' /> Food </p>

                    <p className='flex pt-[24px] pl-[24px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <FaRegUser  className='text-[20px] text-[#FFFFFF]  ' /> By Admin </p>

                    <p className='flex pt-[24px] pl-[24px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <CiChat2  className='text-[23px] text-[#FFFFFF]  ' /> 65 Comments </p>

                   </div>
                    
                        <div className='w-[376px]'>
                            <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[18px]  text-[#2C742F]'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>

                            <Link className='font-poppins font-semibold text-[17px] pl-[24px]  pb-[18px] flex items-center gap-2 text-[#00B207]'>Read More <FaLongArrowAltRight /></Link>

                        </div>
                   
                 </div>
                 <div className='w-[424px]   border border-[#e5e2e2]'>

                   <div className='flex '>
                     <p className='flex pt-[24px] pl-[20px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <GoTag className='text-[20px] text-[#FFFFFF]  ' /> Food </p>

                    <p className='flex pt-[24px] pl-[24px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <FaRegUser  className='text-[20px] text-[#FFFFFF]  ' /> By Admin </p>

                    <p className='flex pt-[24px] pl-[24px] gap-1.5 font-poppins font-medium text-[16px] text-[#4D4D4D]'> <CiChat2  className='text-[23px] text-[#FFFFFF]  ' /> 65 Comments </p>

                   </div>
                    
                        <div className='w-[376px]'>
                            <p className='pl-[24px] pt-[8px] pb-[20px] font-poppins font-medium text-[18px]  text-[#2C742F]'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>

                            <Link to='#' className='font-poppins font-semibold text-[17px] pl-[24px]  pb-[18px] flex items-center gap-2 text-[#00B207]'>Read More <FaLongArrowAltRight /></Link>

                        </div>
                   
                 </div>
                    



            </div>

        </Container>
    </div>
  )
}

export default LatestNews
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
    <div className='py-6 sm:py-10'>
        <Container>
           {/* Section Title */}
           <div className='flex justify-center mb-6 sm:mb-[32px]'>
             <h2 className='font-poppins font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#1A1A1A] text-center'>
               Latest News
             </h2>
           </div>

            {/* Cards Grid Container */}
            <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-6 sm:gap-8'>

               {/* Card 1 */}
               <div className='group cursor-pointer w-full sm:w-[80%] md:w-[48%] lg:w-[32%] mx-auto lg:mx-0'>
                 <div className='transition-transform duration-300 group-hover:scale-105 h-full flex flex-col'>
                    <img src={card} alt="card" className='w-full object-cover' />
                    <div className='w-full border border-[#e5e2e2] flex-1 flex flex-col justify-between'>

                       <div className='flex flex-wrap items-center pt-[24px] px-[16px] sm:px-[20px] gap-3 sm:gap-4'>
                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <GoTag className='text-[18px] sm:text-[20px] text-[#b9b4b4]' /> Food 
                         </p>

                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <FaRegUser className='text-[18px] sm:text-[20px] text-[#b9b4b4]' /> By Admin 
                         </p>

                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <CiChat2 className='text-[20px] sm:text-[23px] text-[#b9b4b4]' /> 65 Comments 
                         </p>
                       </div>
                       
                        <div className='w-full px-[16px] sm:px-[24px]'>
                            <p className='pt-[8px] pb-[20px] font-poppins font-medium text-[16px] sm:text-[18px] text-[#2C742F] leading-snug'>
                              Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                            </p>

                            <Link to='#' className='font-poppins font-semibold text-[15px] sm:text-[17px] pb-[18px] flex items-center gap-2 text-[#00B207]'>
                              Read More <FaLongArrowAltRight />
                            </Link>
                        </div>
                   </div>
                 </div>
               </div>

               {/* Card 2 */}
               <div className='group cursor-pointer w-full sm:w-[80%] md:w-[48%] lg:w-[32%] mx-auto lg:mx-0'>
                 <div className='transition-transform duration-300 group-hover:scale-105 h-full flex flex-col'>
                      <img src={cardone} alt="card" className='w-full object-cover' />
                      <div className='w-full border border-[#e5e2e2] flex-1 flex flex-col justify-between'>

                       <div className='flex flex-wrap items-center pt-[24px] px-[16px] sm:px-[20px] gap-3 sm:gap-4'>
                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <GoTag className='text-[18px] sm:text-[20px] text-[#b9b4b4]' /> Food 
                         </p>

                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <FaRegUser className='text-[18px] sm:text-[20px] text-[#b9b4b4]' /> By Admin 
                         </p>

                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <CiChat2 className='text-[20px] sm:text-[23px] text-[#b9b4b4]' /> 65 Comments 
                         </p>
                       </div>
                       
                        <div className='w-full px-[16px] sm:px-[24px]'>
                            <p className='pt-[8px] pb-[20px] font-poppins font-medium text-[16px] sm:text-[18px] text-[#2C742F] leading-snug'>
                              Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                            </p>

                            <Link to='#' className='font-poppins font-semibold text-[15px] sm:text-[17px] pb-[18px] flex items-center gap-2 text-[#00B207]'>
                              Read More <FaLongArrowAltRight />
                            </Link>
                        </div>
                   </div>
                 </div>
               </div>

               {/* Card 3 */}
               <div className='group cursor-pointer w-full sm:w-[80%] md:w-[48%] lg:w-[32%] mx-auto lg:mx-0'>
                  <div className='transition-transform duration-300 group-hover:scale-105 h-full flex flex-col'>
                      <img src={cardtow} alt="card" className='w-full object-cover' />
                      <div className='w-full border border-[#e5e2e2] flex-1 flex flex-col justify-between'>

                       <div className='flex flex-wrap items-center pt-[24px] px-[16px] sm:px-[20px] gap-3 sm:gap-4'>
                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <GoTag className='text-[18px] sm:text-[20px] text-[#b9b4b4]' /> Food 
                         </p>

                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <FaRegUser className='text-[18px] sm:text-[20px] text-[#b9b4b4]' /> By Admin 
                         </p>

                         <p className='flex items-center gap-1.5 font-poppins font-medium text-[14px] sm:text-[16px] text-[#4D4D4D]'> 
                           <CiChat2 className='text-[20px] sm:text-[23px] text-[#b9b4b4]' /> 65 Comments 
                         </p>
                       </div>
                       
                        <div className='w-full px-[16px] sm:px-[24px]'>
                            <p className='pt-[8px] pb-[20px] font-poppins font-medium text-[16px] sm:text-[18px] text-[#2C742F] leading-snug'>
                              Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                            </p>

                            <Link to='#' className='font-poppins font-semibold text-[15px] sm:text-[17px] pb-[18px] flex items-center gap-2 text-[#00B207]'>
                              Read More <FaLongArrowAltRight />
                            </Link>
                        </div>
                   </div>
                 </div>
               </div>
               
            </div>
        </Container>
    </div>
  )
}

export default LatestNews
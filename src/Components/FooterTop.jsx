import React from 'react'
import Container from './Layuots/Container'
import { TfiFacebook } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';


const FooterTop = () => {
  return (
    <div className='py-[40px] bg-[#E6E6E6]'>
        <Container>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='font-poppins font-semibold text-[24px] mb-[4px]'>Subcribe our Newsletter</h3>
                    <p className='font-poppins font-semibold text-[14px] text-[#999999] max-w-[415px]'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div>
                    <input className='w-[480px] py-[14px] pl-[20px] rounded-tl-full rounded-bl-full shadow-[0_0px_3px_rgba(0,0,0,0.2)] rounded-md' type="text"placeholder='Your email address' />
                    <button className='text-[white] cursor-pointer bg-[#00B207] py-[16px] px-[40px] leading-[138%] rounded-full relative left-[-30px] '>Subscribe</button>
                </div>
                <div className='flex gap-[8px] cursor-pointer'>
                   <div className='w-[40px] h-[40px] hover:bg-primary hover:text-white flex justify-center items-center rounded-full' >
                    <Link to="https://www.facebook.com/"> <TfiFacebook className='text-[18px]' /></Link>
                   </div>
                   <div className='w-[40px] h-[40px] hover:bg-primary hover:text-white flex justify-center items-center rounded-full' >
                     <Link to="https://x.com/home"><IoLogoTwitter className='text-[18px]' /></Link>
                   </div>
                   <div className='w-[40px] h-[40px] hover:bg-primary hover:text-white flex justify-center items-center rounded-full' >
                     <Link to="https://www.instagram.com/?hl=en"><FaInstagram className='text-[18px]' /></Link>
                   </div>
                   <div className='w-[40px] h-[40px] hover:bg-primary hover:text-white flex justify-center items-center rounded-full' >
                     <Link to="https://www.linkedin.com/feed/"><FaLinkedinIn className='text-[18px] ' /></Link>
                   </div> 
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FooterTop
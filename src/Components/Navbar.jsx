import React from 'react'
import Container from './Layuots/Container'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
   
         <div className='bg-[#1A1A1A] text-[white]'> 
          <Container>
        <div className='flex justify-between items-center'>
            <ul className='flex gap-[32px] relative font-poppins font-medium  text-sm text-[#999999] items-center'>

                <li className=' p-4 bg-primary mr-[200px]'>
                <FaBars className='text-[white] w-[32px] h-[32px] cursor-pointer'/>  
                </li>

                <li>
                    <Link className='font-poppins bg-[#333333] text-[20px]  font-bold absolute top-0 left-[64px] py-[17px] px-[20px] text-[white] flex items-center ' to='#'>All Categories <FaAngleDown className=' cursor-pointer flex pl-[4px] ml-[40px] text-[20px]'/></Link>
                </li>

                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Home <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Shop <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Pages <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Blog <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
               
                <li ><Link className='flex items-center hover:text-[white]'>About Us</Link>  </li>
                <li ><Link className='flex items-center hover:text-[white]'>Contact Us</Link>  </li>
                
            </ul>
           
           <div>
            <Link to='tel:(219) 555-0114' className='flex items-center gap-2.5 font-poppins font-medium text-[14px]'><FiPhoneCall className='text-[20px]'/> (219) 555-0114</Link>
           </div>

        </div>
     </Container>
   </div>
   
   
  
  )
}

export default Navbar
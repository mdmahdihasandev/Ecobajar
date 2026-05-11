import React from 'react'
import Container from '../Components/Layuots/Container'
import { Link } from 'react-router'

const Registration = () => {
  return (
   
     <div>
     
        <div className='max-w-[520px] shadow-[0_0px_6px_rgba(0,0,0,0.4)] p-[20px] mx-auto my-[80px] rounded-md'>
          <h2 className='text-center font-poppins font-semibold text-[32px] py-[20px]'>Create Account</h2>
        <form action="">
           
           <input type="email" placeholder='Email' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />
           <input type="password" placeholder='Password' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />
           <input type="password" placeholder='Confirm Password' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />
         
        <div className='flex items-center my-[8px]'>
          <input type="checkbox" className='mr-2 w-[18px] h-[18px]' />
         <label className='font-poppins font-md text-sm text-[#666666]' htmlFor="">Accept all terms & Conditions</label>
        </div>
        <button className='bg-primary w-full cursor-pointer py-[10px] my-[12px] rounded-full text-white font-poppins font-semibold text-sm hover:bg-blue-700 '>Create Account</button>

        <p className='font-poppins font-sm text-sm text-[#666666] text-center py-[10px]'>Already have account 
          <Link to="/login" className='font-poppins font-semibold hover:text-blue-600 font-sm text-black'> Login</Link>
        </p>
        
        </form>
        </div>
     
    </div>
 
  )
}

export default Registration
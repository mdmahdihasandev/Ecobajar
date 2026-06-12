import React, { useRef, useState } from 'react'
import Container from './Layuots/Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import useOutsideClick from '../Hooks/OutsiteClick';
import { Link } from 'react-router';

const TopBar = () => {

  let [open, setOpen] = useState(false)
  let [opentow, setOpentow] = useState(false)
  const dropDown = useRef(null)
  const dropDowntow = useRef(null)

  useOutsideClick(dropDown, () => setOpen(false), open)
  useOutsideClick(dropDowntow, () => setOpentow(false), opentow)

  return (

    <div className='border-b border-solid border-b-gry-50 items-center font-poppins text-[#666666]  text-sm py-[12px]'>
      <Container>
        <div className='flex justify-between'>
          <div className='flex items-center  gap-[6px]'> <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
          <div className='flex gap-[20px] '>


            {/* //! DropDown */}
           <div className='relative inline-block' onMouseEnter={() => setOpen(true)}  onMouseLeave={() => setOpen(false)}
          >

          <div className='flex items-center cursor-pointer'>
            Eng <FaAngleDown  className={`duration-300 ml-1 ${open ? "rotate-180" : "rotate-0"}`} />
          </div>

              {
                open &&
                <div className='absolute top-full left-[-20px] bg-[#afaeae] text-center text-black cursor-pointer  py-[10px] w-[70px]'>
                  <ul className=''>
                    <li className='hover:bg-[white] hover:text-blue-600 mb-[5px]'>BG</li>
                    <li className='hover:bg-[white] hover:text-blue-600  mb-[5px]'>CH</li>
                    <li className='hover:bg-[white] hover:text-blue-600  mb-[5px]'>IN</li>
                    <li className='hover:bg-[white] hover:text-blue-600 '>PK</li>
                  </ul>
                </div>
              }

            </div>

              {/* Sidebar */}
            {/* <div onClick={() => setOpen(!open)} className='flex items-center' ref={dropDown}>
              Eng <FaAngleDown />
              {
                open &&
                <div className='fixed inset-0 flex z-50 '>
                 <div className='"w-[200px]   px-[50px] h-full bg-black   p-4"'>
                   <ul className='text-white'>
                    <li className='pb-2.5 text-[20px] hover:text-amber-300 hover:bg-red-500 px-[30px]'>BG</li>
                    <li className='pb-2.5 text-[20px] hover:text-amber-300  hover:bg-red-500 px-[30px]'>CH</li>
                    <li className='pb-2.5 text-[20px] hover:text-amber-300  hover:bg-red-500 px-[30px]'>IN</li>
                    <li className='pb-2.5 text-[20px] hover:text-amber-300  hover:bg-red-500 px-[30px]'>IN</li>
                  </ul>
                 </div>
                </div>
              }
            </div> */}

            <div className='relative inline-block' onMouseEnter={() => setOpentow(true)}  onMouseLeave={() => setOpentow(false)}
          >

          <div className='flex items-center cursor-pointer'>
            USD <FaAngleDown  className={`duration-300 ml-1 ${opentow ? "rotate-180" : "rotate-0"}`} />
          </div>

              {
                opentow &&
                <div className='absolute top-full left-[-20px] bg-[#afaeae] text-center text-black cursor-pointer  py-[10px] w-[70px] z-20'>
                  <ul className=''>
                    <li className='hover:bg-[white] hover:text-blue-600 mb-[5px]'>USDT</li>
                    <li className='hover:bg-[white] hover:text-blue-600  mb-[5px]'>TRX</li>
                    <li className='hover:bg-[white] hover:text-blue-600  mb-[5px]'>USD</li>
                    <li className='hover:bg-[white] hover:text-blue-600 '>BTC</li>
                  </ul>
                </div>
              }

            </div>

            <div className='flex items-center relative after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:top-[2px] after:left-[-12px] after:content-[""] after:absolute gap-3.5'>
               <Link className='hover:font-medium hover:text-blue-500' to="/login">Sign In</Link>   /   <Link className='hover:font-medium hover:text-blue-500' to="/registration">Sign Up </Link>
                </div>
          </div>
        </div>
      </Container>

    </div>


  )
}

export default TopBar
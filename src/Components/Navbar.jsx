import React, { useRef, useState } from 'react'
import Container from './Layuots/Container'
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from 'react-router';
import { FiPhoneCall } from "react-icons/fi";
import useOutsideClick from '../Hooks/OutsiteClick';
import { IoSearch } from "react-icons/io5";
import Food from '../Icons/Food';
import Apple from '../Icons/Apple';
import Fish from '../Icons/Fish';
import Meet from '../Icons/Meet';
import Coffe from '../Icons/Coffe';
import IceCrim from '../Icons/IceCrim';
import Cake from '../Icons/Cake';
import Pie from '../Icons/Pie';
import Fody from '../Icons/Fody';
import { DiApple } from "react-icons/di";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {

  let [show, setShow] = useState(false)
  let [sidebar, setSidebar] = useState(false)
  let [dropDown, setDropDown] = useState(false)
  let [dropDowntow, setDropDowntow] = useState(false)
  let [dropDownthre, setDropDownthre] = useState(false)
  let [dropDownfor, setDropDownfor] = useState(false)
  let [dropDownfive, setDropDownfive] = useState(false)

  let Sidebarref = useRef(null);
  let DropDownref = useRef(null);
  let DropDowntowref = useRef(null);
  let DropDownthreref = useRef(null);
  let DropDownforref = useRef(null);
  let DropDownfiveref = useRef(null);

  useOutsideClick(Sidebarref, () => setSidebar(false), sidebar)
  useOutsideClick(DropDownref, () => setDropDown(false), dropDown)
  useOutsideClick(DropDowntowref, () => setDropDowntow(false), dropDowntow)
  useOutsideClick(DropDownthreref, () => setDropDownthre(false), dropDownthre)
  useOutsideClick(DropDownforref, () => setDropDownfor(false), dropDownfor)
  useOutsideClick(DropDownfiveref, () => setDropDownfive(false), dropDownfive)

  return (
    <div className='bg-[#1A1A1A] text-[#ebe8e8] py-[12px] sm:py-0 relative z-40'>
      <Container>
        {/* Mobile Header Bar */}
        <div className='flex justify-between items-center px-[20px] sm:px-0'>
          <FaBarsStaggered className='block sm:hidden text-white w-[25px] h-[25px] cursor-pointer' onClick={() => setShow(!show)} />
          <div className='sm:hidden'>
            <Link to='tel:(219) 555-0114' className='flex items-center gap-2.5 font-poppins font-medium text-[14px]'>
              <FiPhoneCall className='text-[20px]' /> (219) 555-0114
            </Link>
          </div>
        </div>

        {/* Main Navbar Links */}
        <div className={`sm:flex justify-between items-center ${show ? 'block' : 'hidden'} mt-3 sm:mt-0`}>
          <ul className='sm:flex gap-[20px] lg:gap-[32px] font-poppins font-medium text-sm text-[#999999] items-center flex-col sm:flex-row'>

            {/* Sidebar Toggle & Drawer */}
            <div className="relative w-full sm:w-auto" ref={Sidebarref}>
              <li onClick={() => setSidebar(!sidebar)} className='mt-[10px] sm:mt-0 p-4 bg-primary flex justify-center sm:block cursor-pointer'>
                <FaBars className='text-white w-[32px] h-[20px] sm:h-[32px]' />
              </li>

              {sidebar && (
                <div onClick={() => setSidebar(false)} className="fixed inset-0 bg-black/40 z-40"></div>
              )}

              <div className={`fixed top-0 left-0 h-screen w-[280px] sm:w-[300px] bg-white shadow-2xl z-50 duration-300 overflow-y-auto text-black ${sidebar ? "translate-x-0" : "-translate-x-full"}`}>
                
                {/* Drawer Header */}
                <div className="bg-[#2C742F] py-6 px-6 relative">
                  <h2 className="text-white text-[22px] sm:text-[26px] font-bold font-pop">
                    Dashboard
                  </h2>
                  <input className='mt-[7px] py-[5px] pl-[15px] pr-[45px] w-full border border-[#E6E6E6] outline-0 rounded-[5px]' type="text" placeholder="Search..." />
                  <div className='absolute top-[63px] right-[32px] text-[20px] w-[35px] h-[35px] bg-[#ffffff] flex justify-center items-center rounded-[10px] hover:bg-blue-600 hover:text-white cursor-pointer'>
                    <IoSearch />
                  </div>
                </div>

                {/* Drawer Categories */}
                <ul className="py-5 font-pop items-center">
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className='mr-[12px]'><Food /></span> Fresh Fruit</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><Apple /></span> Vegetables</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><Fish /></span> River Fish</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><Meet /></span> Chicken & Meat</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><Coffe /></span> Drink & Water</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><IceCrim /></span> Yogurt & Ice Cream</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><Cake /></span> Cake & Bread</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><Pie /></span> Butter & Cream</li>
                  <li className="flex px-6 py-4 text-[16px] sm:text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b"><span className="mr-[12px]"><Fody /></span> Cooking</li>
                  <li className="px-6 py-4 text-[16px] sm:text-[18px] text-red-500 hover:bg-red-500 hover:text-white duration-300 cursor-pointer"><span className='text-[24px] mr-2'>+</span> View all Category</li>
                </ul>
              </div>
            </div>

            {/* All Categories Dropdown */}
            <li ref={DropDownref} className='relative w-full sm:w-auto text-center sm:text-left py-2 sm:py-0'>
              <button onClick={() => setDropDown(!dropDown)} className='font-poppins bg-[#333333] text-[15px] sm:text-[18px] lg:text-[20px] font-bold py-[12px] sm:py-[17px] px-[15px] lg:px-[20px] text-white flex items-center justify-between sm:justify-start w-full sm:w-auto rounded-sm'>
                All Categories <FaAngleDown className={`cursor-pointer duration-300 ${dropDown ? 'rotate-180' : 'rotate-0'} text-[18px] ml-2`} />
              </button>

              {dropDown && (
                <div className='shadow shadow-[#797777] bg-white sm:w-[200px] w-full static sm:absolute sm:top-[60px] left-0 z-50 text-black rounded-b-md'>
                  <ul className='h-full font-poppins font-medium text-[16px] sm:text-[19px]'>
                    <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center cursor-pointer'><DiApple className='mr-[10px]' /> home</li>
                    <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center cursor-pointer'><DiApple className='mr-[10px]' /> About</li>
                    <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center cursor-pointer'><DiApple className='mr-[10px]' /> Blog</li>
                    <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center cursor-pointer'><DiApple className='mr-[10px]' /> Page</li>
                    <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center cursor-pointer'><DiApple className='mr-[10px]' /> Shop</li>
                  </ul>
                </div>
              )}
            </li>

            {/* Home Dropdown */}
            <li ref={DropDowntowref} className='relative w-full sm:w-auto text-center sm:text-left py-2 sm:py-0'>
              <Link onClick={() => setDropDowntow(!dropDowntow)} className='flex items-center justify-center sm:justify-start py-[7px] sm:py-0 hover:text-white' to='#'>
                Home <FaAngleDown className={`cursor-pointer duration-300 text-[17px] ml-1 ${dropDowntow ? 'rotate-180' : 'rotate-0'}`} />
              </Link>
              {dropDowntow && (
                <div className='static sm:absolute sm:top-[40px] left-0 z-50 bg-gray-200 w-full sm:w-[120px] text-black rounded-md'>
                  <ul className='font-poppins font-medium text-[15px] text-center'>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>home</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>About</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Shop</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Contact</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Skills</li>
                  </ul>
                </div>
              )}
            </li>

            {/* Shop Dropdown */}
            <li ref={DropDownthreref} className='relative w-full sm:w-auto text-center sm:text-left py-2 sm:py-0'>
              <Link onClick={() => setDropDownthre(!dropDownthre)} className='flex items-center justify-center sm:justify-start py-[7px] sm:py-0 hover:text-white' to='#'>
                Shop <FaAngleDown className={`cursor-pointer duration-300 text-[17px] ml-1 ${dropDownthre ? 'rotate-180' : 'rotate-0'}`} />
              </Link>
              {dropDownthre && (
                <div className='static sm:absolute sm:top-[40px] left-0 z-50 bg-gray-200 w-full sm:w-[120px] text-black rounded-md'>
                  <ul className='font-poppins font-medium text-[15px] text-center'>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Item 1</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Item 2</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Item 3</li>
                  </ul>
                </div>
              )}
            </li>

            {/* Pages Dropdown */}
            <li ref={DropDownforref} className='relative w-full sm:w-auto text-center sm:text-left py-2 sm:py-0'>
              <Link onClick={() => setDropDownfor(!dropDownfor)} className='flex items-center justify-center sm:justify-start py-[7px] sm:py-0 hover:text-white' to='#'>
                Pages <FaAngleDown className={`cursor-pointer duration-300 text-[17px] ml-1 ${dropDownfor ? 'rotate-180' : 'rotate-0'}`} />
              </Link>
              {dropDownfor && (
                <div className='static sm:absolute sm:top-[40px] left-0 z-50 bg-gray-200 w-full sm:w-[120px] text-black rounded-md'>
                  <ul className='font-poppins font-medium text-[15px] text-center'>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Page 1</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Page 2</li>
                  </ul>
                </div>
              )}
            </li>

            {/* Blog Dropdown */}
            <li ref={DropDownfiveref} className='relative w-full sm:w-auto text-center sm:text-left py-2 sm:py-0'>
              <Link onClick={() => setDropDownfive(!dropDownfive)} className='flex items-center justify-center sm:justify-start py-[7px] sm:py-0 hover:text-white' to='#'>
                Blog <FaAngleDown className={`cursor-pointer duration-300 text-[17px] ml-1 ${dropDownfive ? 'rotate-180' : 'rotate-0'}`} />
              </Link>
              {dropDownfive && (
                <div className='static sm:absolute sm:top-[40px] left-0 z-50 bg-gray-200 w-full sm:w-[120px] text-black rounded-md'>
                  <ul className='font-poppins font-medium text-[15px] text-center'>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Blog 1</li>
                    <li className='hover:bg-primary hover:text-black py-[8px] cursor-pointer'>Blog 2</li>
                  </ul>
                </div>
              )}
            </li>

            <li className='w-full sm:w-auto text-center sm:text-left py-2 sm:py-0'><Link className='flex justify-center sm:justify-start hover:text-white' to='#'>About Us</Link></li>
            <li className='w-full sm:w-auto text-center sm:text-left py-2 sm:py-0'><Link className='flex justify-center sm:justify-start hover:text-white' to='#'>Contact Us</Link></li>
          </ul>

          {/* Desktop Phone */}
          <div className='hidden sm:block mt-4 sm:mt-0'>
            <Link to='tel:(219) 555-0114' className='flex items-center gap-2.5 font-poppins font-medium text-[14px]'>
              <FiPhoneCall className='text-[20px]' /> (219) 555-0114
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar;
import React, { useRef, useState } from 'react';
import Container from './Layuots/Container';
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import useOutsideClick from '../Hooks/OutsiteClick';
import { Link } from 'react-router';

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const dropDown = useRef(null);
  const dropDownTwo = useRef(null);

  useOutsideClick(dropDown, () => setOpen(false), open);
  useOutsideClick(dropDownTwo, () => setOpenTwo(false), openTwo);

  return (
    <div className="border-b border-[#E6E6E6] bg-white font-poppins text-[#666666] text-xs sm:text-sm py-2 sm:py-2.5">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          
          {/* Store Location */}
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <CiLocationOn className="text-lg sm:text-xl text-[#333333] shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none">
              Store Location: Lincoln- 344, Illinois, Chicago
            </span>
          </div>

          {/* Right Section: Language, Currency, Auth */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            
            {/* Language Dropdown */}
            <div
              ref={dropDown}
              className="relative inline-block"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button 
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 cursor-pointer hover:text-[#00B207] transition-colors py-1"
              >
                Eng
                <FaAngleDown className={`duration-300 text-xs ${open ? "rotate-180" : "rotate-0"}`} />
              </button>

              {open && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-50 bg-white text-[#333333] rounded-md shadow-lg border border-gray-100 py-1.5 min-w-[70px] text-center">
                  <ul className="space-y-1">
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">Eng</li>
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">BN</li>
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">HN</li>
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">AR</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div
              ref={dropDownTwo}
              className="relative inline-block"
              onMouseEnter={() => setOpenTwo(true)}
              onMouseLeave={() => setOpenTwo(false)}
            >
              <button 
                onClick={() => setOpenTwo(!openTwo)}
                className="flex items-center gap-1 cursor-pointer hover:text-[#00B207] transition-colors py-1"
              >
                USD
                <FaAngleDown className={`duration-300 text-xs ${openTwo ? "rotate-180" : "rotate-0"}`} />
              </button>

              {openTwo && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-50 bg-white text-[#333333] rounded-md shadow-lg border border-gray-100 py-1.5 min-w-[70px] text-center">
                  <ul className="space-y-1">
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">USD</li>
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">BDT</li>
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">EUR</li>
                    <li className="hover:bg-[#f2f2f2] hover:text-[#00B207] py-1 px-2 cursor-pointer transition-colors">BTC</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Vertical Divider */}
            <span className="h-3.5 w-[1px] bg-[#E6E6E6]"></span>

            {/* Auth Links */}
            <div className="flex items-center gap-1.5">
              <Link className="hover:text-[#00B207] transition-colors" to="/login">
                Sign In
              </Link>
              <span>/</span>
              <Link className="hover:text-[#00B207] transition-colors" to="/registration">
                Sign Up
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default TopBar;
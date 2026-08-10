import React from 'react';
import Container from './Layuots/Container';
import logo from '../assets/Logo.webp';
import { IoSearchOutline } from "react-icons/io5";
import LoveIcon from '../Icons/LoveIcon';
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router';

const SearchBar = () => {
  return (
    <div className="border-b border-[#E6E6E6] bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 gap-4 md:gap-0">
          
          {/* Logo Section */}
          <div className="shrink-0">
            <Link to="/">
              <img 
                className="h-8 sm:h-9 md:h-10 object-contain mx-auto md:mx-0" 
                src={logo} 
                alt="logo" 
                fetchpriority="high"
              />
            </Link>
          </div>

          {/* Search Box */}
          <div className="w-full md:max-w-[400px] lg:max-w-[480px] px-2 sm:px-0">
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center w-full">
              <div className="relative flex-1">
                <IoSearchOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg sm:text-xl pointer-events-none" />
                <input
                  className="w-full py-2.5 sm:py-3 pl-10 pr-3 font-poppins font-medium text-xs sm:text-sm text-[#1A1A1A] placeholder:text-[#808080] placeholder:font-normal border border-r-0 border-[#808080] rounded-l-md focus:outline-none focus:border-[#00B207]"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <button
                type="submit"
                className="text-white font-poppins text-xs sm:text-sm font-medium cursor-pointer bg-[#00B207] hover:bg-[#008a05] transition-colors py-2.5 sm:py-3 px-4 sm:px-6 rounded-r-md shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          {/* Wishlist & Cart Section */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Wishlist Icon */}
            <Link to="/wishlist" className="cursor-pointer hover:opacity-80 transition-opacity">
              <LoveIcon />
            </Link>

            {/* Vertical Divider */}
            <span className="h-6 w-[1px] bg-[#CCCCCC]"></span>

            {/* Shopping Cart & Total Price */}
            <div className="flex items-center gap-3">
              <Link to="/cart" className="relative cursor-pointer">
                <span className="w-5 h-5 bg-[#2C742F] text-white font-poppins text-xs font-semibold absolute -top-1.5 -right-2 flex items-center justify-center rounded-full border-2 border-white">
                  2
                </span>
                <IoBagOutline className="text-2xl sm:text-3xl text-[#1A1A1A]" />
              </Link>

              <div className="text-left font-poppins">
                <p className="font-normal text-xs text-[#4D4D4D] leading-tight">
                  Shopping cart:
                </p>
                <p className="font-semibold text-xs sm:text-sm text-[#1A1A1A] leading-tight mt-0.5">
                  $57.00
                </p>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
import React from 'react'
import Container from '../Components/Layuots/Container'
import { Minus, Plus, X } from "lucide-react";
import cartpic from '../assets/cartpage.png'
import cartpictow from '../assets/cartpagetow.png'

const Cart = () => {
  return (
  <>
  <Container>
   <div>
     <div className="min-h-screen bg-white p-6 md:p-10">
      <h2 className='font-poppins font-bold text-[32px] text-[#1A1A1A] text-center pb-[15px]' >My Shopping Cart</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6">


          {/* Cart table card */}
          <div className="border border-gray-200 rounded-md">


            {/* Header row */}
            <div className="grid grid-cols-[2fr_1fr_1.4fr_1fr_40px] px-6 py-4 border-b border-gray-100">
              <span className="text-xs tracking-widest text-gray-400 font-medium">
                PRODUCT
              </span>
              <span className="text-xs tracking-widest text-gray-400 font-medium">
                PRICE
              </span>
              <span className="text-xs tracking-widest text-gray-400 font-medium">
                QUANTITY
              </span>
              <span className="text-xs tracking-widest text-gray-400 font-medium">
                SUBTOTAL
              </span>
              <span />
            </div>

 
            {/* Row 1 - Green Capsicum */}
            <div className="grid grid-cols-[2fr_1fr_1.4fr_1fr_40px] items-center px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-4">
              <img src={cartpic} alt="" />
                <span className="font-medium text-gray-900 text-sm">
                  Green Capsicum
                </span>
              </div>
              <span className="text-sm text-gray-700">$14.00</span>
              <div className="flex items-center bg-gray-50 rounded-full w-fit px-1 py-1 gap-3">
                <button className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
                  <Minus size={14} />
                </button>
                <span className="text-sm font-medium w-4 text-center">5</span>
                <button className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
                  <Plus size={14} />
                </button>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                $70.00
              </span>
              <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition">
                <X size={12} />
              </button>
            </div>
 
            {/* Row 2 - Red Capsicum */}
            <div className="grid grid-cols-[2fr_1fr_1.4fr_1fr_40px] items-center px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-4">
               <img src={cartpictow} alt="" />
                <span className="font-medium text-gray-900 text-sm">
                  Red Capsicum
                </span>
              </div>
              <span className="text-sm text-gray-700">$14.00</span>
              <div className="flex items-center bg-gray-50 rounded-full w-fit px-1 py-1 gap-3">
                <button className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
                  <Minus size={14} />
                </button>
                <span className="text-sm font-medium w-4 text-center">5</span>
                <button className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
                  <Plus size={14} />
                </button>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                $14.00
              </span>
              <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition">
                <X size={12} />
              </button>
            </div>
 
            {/* Footer buttons */}
            <div className="flex items-center justify-between px-6 py-5">
              <button className="bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-200 transition">
                Return to shop
              </button>
              <button className="bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-200 transition">
                Update Cart
              </button>
            </div>
          </div>
 
          {/* Coupon card */}
          <div className="border border-gray-200 rounded-md px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
            <h3 className="font-semibold text-gray-900 text-base whitespace-nowrap">
              Coupon Code
            </h3>
            <div className="flex flex-1 w-full items-center border border-gray-200 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 px-5 py-2.5 text-sm outline-none placeholder:text-gray-400"
              />
              <button className="bg-gray-900 text-white text-sm font-medium px-6 py-2.5 rounded-full m-1 hover:bg-gray-800 transition whitespace-nowrap">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
 
        {/* Right column - Cart Total */}
        <div className="border border-gray-200 rounded-md px-6 py-6">
          <h3 className="font-semibold text-gray-900 text-lg mb-5">
            Cart Total
          </h3>
 
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-sm text-gray-500">Subtotal:</span>
            <span className="text-sm font-semibold text-gray-900">
              $84.00
            </span>
          </div>
 
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-sm text-gray-500">Shipping:</span>
            <span className="text-sm font-semibold text-gray-900">Free</span>
          </div>
 
          <div className="flex items-center justify-between py-3 mb-5">
            <span className="text-sm text-gray-500">Total:</span>
            <span className="text-sm font-bold text-gray-900">$84.00</span>
          </div>
 
          <button className="w-full bg-green-600 text-white font-semibold text-sm py-3.5 rounded-full hover:bg-green-700 transition">
            Proceed to checkout
          </button>
        </div>

        
      </div>
    </div>
   </div>
  </Container>
  </>
  )
}

export default Cart
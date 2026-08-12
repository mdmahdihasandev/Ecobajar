import React, { useState } from 'react'
import Container from '../Components/Layuots/Container'
import { Minus, Plus, X } from "lucide-react";
import cartpic from '../assets/cartpage.png'
import cartpictow from '../assets/cartpagetow.png'
import { Link } from 'react-router';

const Cart = () => {

  let [count, setCount] = useState(0)
  let [counttow, setCounttow] = useState(0)

  let [show, setShow] = useState(true)
  let [showtow, setShowtow] = useState(true)

  let price = 20.00
  let pricetow = 20.00


  let subTotal = (count * price) + (counttow * pricetow)
  let total = subTotal

  let handleClickPlus = () => {
    if (count < 10) {

      setCount(count + 1)
    }
  }

  let handleClickMinus = () => {
    if (count > 0) {

      setCount(count - 1)
    }
  }

  let handleClickPlustow = () => {
    if (counttow < 10) {

      setCounttow(counttow + 1)
    }
  }

  let handleClickMinustow = () => {
    if (counttow > 0) {

      setCounttow(counttow - 1)
    }
  }

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



                  {show && (
                    <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">

                      {/* Desktop / Tablet */}
                      <div className="hidden sm:grid grid-cols-[2fr_1fr_1.4fr_1fr_40px] items-center gap-3">

                        {/* Product */}
                        <div className="flex items-center gap-3">
                          <img
                            src={cartpic}
                            alt="Green Capsicum"
                            className="w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0" />

                          <span className="font-medium text-gray-900 text-sm">
                            Green Capsicum
                          </span>
                        </div>

                        {/* Price */}
                        <span className="text-sm text-gray-700">
                          $14.00
                        </span>

                        {/* Quantity */}
                        <div className="flex items-center bg-gray-50 rounded-full w-fit px-1 py-1 gap-2">

                          <button
                            onClick={handleClickMinus}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="text-sm font-medium w-4 text-center">
                            {count}
                          </span>

                          <button
                            onClick={handleClickPlus}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
                          >
                            <Plus size={15} />
                          </button>

                        </div>

                        {/* Subtotal */}
                        <span className="text-sm font-semibold text-gray-900">
                          ${count * price}
                        </span>

                        {/* Remove */}
                        <button
                          onClick={() => setShow(false)}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-red-500 hover:bg-gray-100 transition"
                        >
                          <X size={15} />
                        </button>

                      </div>


                      {/* Mobile */}
                      <div className="flex sm:hidden items-center gap-3">

                        {/* Product Image */}
                        <img
                          src={cartpic}
                          alt="Green Capsicum"
                          className="w-16 h-16 object-contain flex-shrink-0"
                        />

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">

                          <div className="flex items-start justify-between gap-2">

                            <div>
                              <h3 className="font-medium text-gray-900 text-sm truncate">
                                Green Capsicum
                              </h3>

                              <p className="text-xs text-gray-500 mt-1">
                                $14.00
                              </p>
                            </div>

                            {/* Remove */}
                            <button
                              onClick={() => setShow(false)}
                              className="w-7 h-7 flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-red-500 hover:bg-gray-100 transition"
                            >
                              <X size={14} />
                            </button>

                          </div>


                          {/* Bottom section */}
                          <div className="flex items-center justify-between mt-3">

                            {/* Quantity */}
                            <div className="flex items-center bg-gray-50 rounded-full px-1 py-1 gap-2">

                              <button
                                onClick={handleClickMinus}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition"
                              >
                                <Minus size={14} />
                              </button>

                              <span className="text-sm font-medium w-4 text-center">
                                {count}
                              </span>

                              <button
                                onClick={handleClickPlus}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
                              >
                                <Plus size={14} />
                              </button>

                            </div>

                            {/* Subtotal */}
                            <span className="text-sm font-semibold text-gray-900">
                              ${count * price}
                            </span>

                          </div>

                        </div>

                      </div>

                    </div>
                  )}




                  {/* Row 2 - Red Capsicum */}

                  {
                    showtow && (
                      <div className="border-b border-gray-100 px-4 sm:px-6 py-4 sm:py-5">

                        {/* ================= DESKTOP / TABLET ================= */}
                        <div className="hidden sm:grid grid-cols-[2fr_1fr_1.4fr_1fr_40px] items-center gap-3">

                          {/* Product */}
                          <div className="flex items-center gap-3">
                            <img
                              src={cartpictow}
                              alt="Red Capsicum"
                              className="w-16 h-16 object-contain flex-shrink-0"
                            />

                            <span className="font-medium text-gray-900 text-sm">
                              Red Capsicum
                            </span>
                          </div>

                          {/* Price */}
                          <span className="text-sm text-gray-700">
                            $14.00
                          </span>

                          {/* Quantity */}
                          <div className="flex items-center bg-gray-50 rounded-full w-fit px-1 py-1 gap-3">

                            <button
                              onClick={handleClickMinustow}
                              className="w-7 h-7 rounded-full flex items-center justify-center text-black font-bold hover:bg-gray-200 transition"
                            >
                              <Minus size={16} />
                            </button>

                            <span className="text-sm font-medium w-4 text-center">
                              {counttow}
                            </span>

                            <button
                              onClick={handleClickPlustow}
                              className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
                            >
                              <Plus size={15} />
                            </button>

                          </div>

                          {/* Subtotal */}
                          <span className="text-sm font-semibold text-gray-900">
                            ${counttow * pricetow}
                          </span>

                          {/* Remove */}
                          <button
                            onClick={() => setShowtow(false)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-red-500 hover:bg-gray-100 transition"
                          >
                            <X size={15} />
                          </button>

                        </div>


                        {/* ================= MOBILE ================= */}
                        <div className="flex sm:hidden items-center gap-3">

                          {/* Image */}
                          <img
                            src={cartpictow}
                            alt="Red Capsicum"
                            className="w-16 h-16 object-contain flex-shrink-0"
                          />

                          {/* Product information */}
                          <div className="flex-1 min-w-0">

                            {/* Name + Close */}
                            <div className="flex items-start justify-between gap-2">

                              <div className="min-w-0">

                                <h3 className="font-medium text-gray-900 text-sm truncate">
                                  Red Capsicum
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                  $14.00
                                </p>

                              </div>

                              {/* Close */}
                              <button
                                onClick={() => setShowtow(false)}
                                className="w-7 h-7 flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-red-500 hover:bg-gray-100 transition"
                              >
                                <X size={14} />
                              </button>

                            </div>


                            {/* Quantity + Subtotal */}
                            <div className="flex items-center justify-between mt-3">

                              {/* Quantity */}
                              <div className="flex items-center bg-gray-50 rounded-full px-1 py-1 gap-2">

                                <button
                                  onClick={handleClickMinustow}
                                  className="w-6 h-6 rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition"
                                >
                                  <Minus size={14} />
                                </button>

                                <span className="text-sm font-medium w-4 text-center">
                                  {counttow}
                                </span>

                                <button
                                  onClick={handleClickPlustow}
                                  className="w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
                                >
                                  <Plus size={14} />
                                </button>

                              </div>

                              {/* Subtotal */}
                              <span className="text-sm font-semibold text-gray-900">
                                ${counttow * pricetow}
                              </span>

                            </div>

                          </div>

                        </div>

                      </div>
                    )
                  }

                  {/* Footer buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5">
                    <button className="w-full sm:w-auto bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-200 transition">
                      Return to shop
                    </button>

                    <button className="w-full sm:w-auto bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-200 transition">
                      Update Cart
                    </button>
                  </div>
                </div>

                {/* Coupon card */}
                <div className="border border-gray-200 rounded-md px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row items-stretch md:items-center gap-4">

                  <h3 className="font-semibold text-gray-900 text-base whitespace-nowrap">
                    Coupon Code
                  </h3>

                  <div className="flex flex-1 w-full min-w-0 items-center border border-gray-200 rounded-full overflow-hidden">

                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 min-w-0 px-4 sm:px-5 py-2.5 text-sm outline-none placeholder:text-gray-400"
                    />

                    <button
                      className="bg-gray-900 text-white text-sm font-medium px-4 sm:px-6 py-2.5 rounded-full m-1 hover:bg-gray-800 transition whitespace-nowrap flex-shrink-0"
                    >
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
                    ${total}.00
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Shipping:</span>
                  <span className="text-sm font-semibold text-gray-900">Free</span>
                </div>

                <div className="flex items-center justify-between py-3 mb-5">
                  <span className="text-sm text-gray-500">Total:</span>
                  <span className="text-sm font-bold text-gray-900">${total}.00</span>
                </div>

                <button className="w-full bg-green-600 text-white font-semibold text-sm py-3.5 rounded-full hover:bg-green-700 transition">
                 <Link to="/checkout"> Proceed to checkout</Link>
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
import React, { useEffect, useRef, useState } from 'react'
import Container from '../Components/Layuots/Container'
import { FaAngleDown } from "react-icons/fa6";
import Accordian from '../Components/Accordian';
import useOutsideClick from '../Hooks/OutsiteClick';
import { CgFilters } from 'react-icons/cg';
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import disspic from "../assets/iscount.webp";
import product from "../../src/assets/Product.png"
import productone from "../../src/assets/Product (1).png"
import producttow from "../../src/assets/Product (2).png"
import axios from 'axios';
import ProduactShowcas from '../Components/ProduactShowcas';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const Shop = () => {
  //! API Product
  let [allpro, setAllpro] = useState([])
  let [currentPages, setCurrent] = useState(1)

  // Mobile sidebar filter toggle state
  let [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    async function allProduct() {
      let product = await axios.get('https://dummyjson.com/products')
      setAllpro(product.data.products.slice(0, 24));
    }
    allProduct()
  }, [])

  let perpage = 6;
  let pagination = Math.ceil(allpro.length / perpage);
  let arry = new Array(pagination).fill(0);
  let showPro = allpro.slice((currentPages - 1) * perpage, currentPages * perpage);

  let refdrop = useRef(null)
  let [open, setOpen] = useState(false)

  useOutsideClick(refdrop, () => setOpen(false), open)

  let [showinput, setShowinput] = useState(false)
  let [showRating, setShowRating] = useState(false)
  let [showPopular, setShowPopular] = useState(false)

  // rating function
  function rattin(count) {
    let index = Math.floor(count);
    let hasHalf = count % 1 !== 0;
    let arry = [];

    for (let i = 0; i < 5; i++) {
      if (i < index) {
        arry.push("color");
      } else if (i === index && hasHalf) {
        arry.push("haff");
      } else {
        arry.push("gray");
      }
    }
    return arry;
  }

  return (
    <>
      <Container>

        {/* Top Filter & Sort Bar */}
        <div className='flex flex-wrap md:flex-nowrap justify-between gap-4 my-[20px] md:my-[30px] items-center px-4 md:px-0'>
          
          {/* Mobile Screen Filter Button */}
          <div 
            onClick={() => setShowSidebar(!showSidebar)} 
            className='w-[120px] sm:w-[131px] h-[40px] sm:h-[45px] bg-[#00B207] flex justify-center rounded-[40px] items-center cursor-pointer select-none'
          >
            <h2 className='font-semibold text-[13px] sm:text-[14px] text-white flex gap-[8px] sm:gap-[10px] items-center'>
              Filter <CgFilters className='text-[18px]' />
            </h2>
          </div>

          <div className='flex items-center gap-2 sm:gap-4'>
            <div className='pt-0 sm:pt-[8px] pr-0 sm:pr-[13px]'>
              <p className='font-poppins font-medium text-[12px] sm:text-[14px] text-[#808080]'>Sort by:</p>
            </div>
            <div className='w-[140px] sm:w-[166px] h-[36px] sm:h-[40px] border border-solid border-[#808080] flex items-center relative' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <h4 className='w-full flex justify-between items-center px-[10px] font-poppins font-medium text-[12px] sm:text-[14px] text-[#4D4D4D] cursor-pointer'>
                Latest <FaAngleDown className={`duration-300 ml-1 ${open ? "rotate-180" : "rotate-0"}`} />
              </h4>

              {open && (
                <div className='absolute z-20 top-[35px] right-0 w-[100px] flex justify-center bg-[#cecccc] shadow-md cursor-pointer rounded-b-md'>
                  <ul className='py-[10px] text-center w-full'>
                    <li className='pb-[8px] hover:text-[blue]'>MH</li>
                    <li className='pb-[8px] hover:text-[blue]'>XS</li>
                    <li className='pb-[8px] hover:text-[blue]'>AW</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className='flex gap-[7px] items-center'>
            <h3 className='font-poppins font-semibold text-[14px] sm:text-[16px] text-[#1A1A1A]'>52</h3>
            <p className='text-[14px] sm:text-[16px] font-poppins font-normal text-[#666666]'> Results Found</p>
          </div>
        </div>


        {/* Main Content Area */}
        <div className='flex flex-col lg:flex-row gap-6 px-4 md:px-0'>

          {/* Sidebar / Filters Section */}
          <div className={`w-full lg:w-[315px] ${showSidebar ? 'block' : 'hidden lg:block'}`}>

            {/* All Category */}
            <h2 onClick={() => setShowinput(!showinput)} className='flex items-center justify-between font-poppins font-medium text-[20px] sm:text-[25px] text-[#1A1A1A] cursor-pointer select-none'>
              All Category <FaAngleDown className={`duration-300 ${showinput ? "rotate-180" : "rotate-0"}`} />
            </h2>

            {showinput && (
              <div className='mt-[15px] space-y-3'>
                <div>
                  <input className='catagory-input cursor-pointer hidden' id='checkoutone' type="checkbox" />
                  <label className='catagory-label cursor-pointer font-poppins font-medium text-[15px] sm:text-[16px]' htmlFor="checkoutone">Fresh Fruit <span className='text-[#808080] font-poppins font-medium text-[15px] sm:text-[16px]'> (134)</span> </label>
                </div>
                <div>
                  <input className='catagory-input cursor-pointer hidden' id='checkouttow' type="checkbox" />
                  <label className='catagory-label cursor-pointer font-poppins font-medium text-[15px] sm:text-[16px]' htmlFor="checkouttow">Vegetables <span className='text-[#808080] font-poppins font-medium text-[15px] sm:text-[16px]'> (150)</span> </label>
                </div>
                <div>
                  <input className='catagory-input cursor-pointer hidden' id='checkoutthree' type="checkbox" />
                  <label className='catagory-label cursor-pointer font-poppins font-medium text-[15px] sm:text-[16px]' htmlFor="checkoutthree">Cooking <span className='text-[#808080] font-poppins font-medium text-[15px] sm:text-[16px]'> (54)</span> </label>
                </div>
                <div>
                  <input className='catagory-input cursor-pointer hidden' id='checkoutfour' type="checkbox" />
                  <label className='catagory-label cursor-pointer font-poppins font-medium text-[15px] sm:text-[16px]' htmlFor="checkoutfour">Snacks <span className='text-[#808080] font-poppins font-medium text-[15px] sm:text-[16px]'> (47)</span> </label>
                </div>
                <div>
                  <input className='catagory-input cursor-pointer hidden' id='checkoutfive' type="checkbox" />
                  <label className='catagory-label cursor-pointer font-poppins font-medium text-[15px] sm:text-[16px]' htmlFor="checkoutfive">Beverages <span className='text-[#808080] font-poppins font-medium text-[15px] sm:text-[16px]'> (43)</span> </label>
                </div>
                <div>
                  <input className='catagory-input cursor-pointer hidden' id='checkoutsix' type="checkbox" />
                  <label className='catagory-label cursor-pointer font-poppins font-medium text-[15px] sm:text-[16px]' htmlFor="checkoutsix">Beauty & Health <span className='text-[#808080] font-poppins font-medium text-[15px] sm:text-[16px]'> (38)</span> </label>
                </div>
                <div>
                  <input className='catagory-input cursor-pointer hidden' id='checkoutseven' type="checkbox" />
                  <label className='catagory-label cursor-pointer font-poppins font-medium text-[15px] sm:text-[16px]' htmlFor="checkoutseven">Bread & Bakery <span className='text-[#808080] font-poppins font-medium text-[15px] sm:text-[16px]'> (15)</span> </label>
                </div>
              </div>
            )}

            <div className='border-b border-solid border-[#CCCCCC] w-full my-[20px] sm:my-[30px]'></div>


            {/* Rating */}
            <h2 onClick={() => setShowRating(!showRating)} className='flex items-center justify-between font-poppins font-medium text-[20px] sm:text-[25px] text-[#1A1A1A] cursor-pointer select-none'>
              Rating <FaAngleDown className={`duration-300 ${showRating ? "rotate-180" : "rotate-0"}`} />
            </h2>

            {showRating && (
              <div className='mt-[15px] space-y-[12px]'>
                {[5, 4, 3, 2, 1].map((ratingVal) => (
                  <div key={ratingVal}>
                    <input className='ratting-input cursor-pointer hidden' id={`rating${ratingVal}`} type='checkbox' />
                    <label className='ratting-label cursor-pointer flex items-center gap-[5px]' htmlFor={`rating${ratingVal}`}>
                      {rattin(ratingVal).map((star, index) => (
                        star === "color" ? (
                          <IoIosStar key={index} className='text-[#FF8A00] text-[20px] sm:text-[24px]' />
                        ) : (
                          <IoIosStar key={index} className='text-gray-300 text-[20px] sm:text-[24px]' />
                        )
                      ))}
                      <span className='text-[#1A1A1A] font-poppins font-medium text-[16px] sm:text-[19px] ml-[5px]'> {ratingVal}.0</span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            <div className='border-b border-solid border-[#CCCCCC] w-full my-[20px] sm:my-[30px]'></div>


            {/* Popular Tag */}
            <h2 onClick={() => setShowPopular(!showPopular)} className='flex items-center justify-between font-poppins font-medium text-[20px] sm:text-[25px] text-[#1A1A1A] cursor-pointer select-none'>
              Popular Tag <FaAngleDown className={`duration-300 ${showPopular ? "rotate-180" : "rotate-0"}`} />
            </h2>

            {showPopular && (
              <div className='mt-[15px]'>
                <div className='flex flex-wrap gap-[8px] sm:gap-[10px]'>
                  {["Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins", "Bread", "Meat", "Snacks", "Tiffin", "Launch", "Dinner", "Breackfast", "Fruit"].map((tag, idx) => (
                    <div key={idx} className='mt-[5px]'>
                      <input className='popularinput cursor-pointer hidden' id={`checkoutpopular-${idx}`} type="checkbox" />
                      <label className='popularlabel cursor-pointer font-poppins font-medium text-[14px] sm:text-[16px] inline-block px-3 py-1 bg-gray-100 rounded-full' htmlFor={`checkoutpopular-${idx}`}>
                        {tag}
                      </label>
                    </div>
                  ))}
                </div>

                <img className='mt-[25px] sm:mt-[30px] w-full max-w-[300px] mx-auto object-cover' src={disspic} alt="Discount Banner" />

                <h2 className='font-medium font-poppins text-[22px] sm:text-[26px] mt-6 mb-3'>Sale Products</h2>
                <div className='space-y-3'>
                  <img className='hover:border border-[#00B207] w-full max-w-[300px] mx-auto' src={product} alt="Product" />
                
                  <img className='hover:border border-[#00B207] w-full max-w-[300px] mx-auto' src={producttow} alt="Product 2" />

                  <img className='hover:border border-[#00B207] w-full max-w-[300px] mx-auto' src={product} alt="Product" />
                </div>
              </div>
            )}

            <div className='border-b border-solid border-[#CCCCCC] w-full my-[20px] sm:my-[30px]'></div>

          </div>

          {/* Product Showcase Section */}
          <div className='w-full lg:w-[calc(100%-330px)] mb-[20px]'>
            <ProduactShowcas type='product' allData={showPro} columns={3} showTitle={false} />
            
            {/* Pagination Controls */}
            <div className='mt-8'>
              <ul className='flex flex-wrap gap-[10px] sm:gap-[20px] justify-center items-center'>

                <button
                  onClick={() => {
                    if (currentPages > 1) {
                      setCurrent(currentPages - 1)
                    }
                  }}
                  className='text-gray-700 hover:text-black transition-colors'
                  aria-label="Previous Page"
                >
                  <FaRegArrowAltCircleLeft className='text-[22px] sm:text-[26px]' />
                </button>

                {arry.map((item, index) => (
                  <li 
                    key={index}
                    onClick={() => setCurrent(index + 1)} 
                    className={`w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] hover:bg-[#fa2003] rounded-full cursor-pointer flex items-center justify-center text-[12px] sm:text-[14px] text-white transition-all ${currentPages === index + 1 ? "bg-red-500 font-bold" : "bg-[#bdb8b8]"}`}
                  >
                    {index + 1}
                  </li>
                ))}

                <button
                  onClick={() => {
                    if (currentPages < pagination) {
                      setCurrent(currentPages + 1)
                    }
                  }}
                  className='text-gray-700 hover:text-black transition-colors'
                  aria-label="Next Page"
                >
                  <FaRegArrowAltCircleRight className='text-[22px] sm:text-[26px]' />
                </button>

              </ul>
            </div>
          </div>

        </div>

      </Container>
    </>
  )
}

export default Shop
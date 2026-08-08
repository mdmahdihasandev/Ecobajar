import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import ReactImageZoom from "react-image-zoom";
import { GoHeart } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowUp } from "react-icons/fa";
import detailspic from '../assets/details-pic.webp'
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import productSmall1 from '../assets/Productsixe-small1.png'
import Bannerlogo from '../../src/assets/bannerpic.webp'
import productSmall3 from '../assets/Productsixe-small3.png'
import productSmall4 from '../assets/Productsixe-small4.png'
import productbigg from '../assets/Productsixebig.png'

import Container from "../Components/Layuots/Container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router";

export default function Details() {
  const props = {

    zoomWidth: 600,
    img: Bannerlogo,
  };

  let [count, setCount] = useState(1)

  let handleClickPlus = () => {
    if (count < 50) {
      setCount(count + 1)
    }
  }
  let handleClickMinus = () => {
    if (count > 1) {

      setCount(count - 1)

    }
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 0,
      title: "Descriptions",
    },
    {
      id: 1,
      title: "Additional Information",
    },
    {
      id: 2,
      title: "Customer Feedback",
    },
  ];

  const contents = [
    {
      leftTitle: "Product Description",

      leftText:
        "Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.   Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ",


      rightTitle: "Fresh & Healthy",


      rightText:
        "Our vegetables are selected with care to provide you with fresh, nutritious and high-quality products for your family.",

    },

    {
      leftTitle: "Additional Information",
      leftItems: [
        ["Weight:", "03"],
        ["Color:", "Green"],
        ["Type:", "Organic"],
        ["Category:", "Vegetables"],
        ["Stock Status:", "Available (5,413)"],
      ],
      rightTitle: "Product Details",

      rightText:
        "This product is organically grown and carefully selected. It is suitable for healthy meals and everyday cooking.",
    },

    {
      leftTitle: "Customer Feedback",

      leftText:
        "Our customers love the freshness and quality of this product. Your feedback helps us improve our products and services.",

      rightTitle: "What Customers Say",

      rightText:
        "Fresh vegetables, great quality and excellent value for money. Customers can share their experience and rating here.",
    },
    
  ];





  return (
    <Container>
      <div className="flex gap-[24px] my-[35px] relative ">

        {/* ================= LEFT SWIPER ================= */}



        <div className="flex ">
          <div className="w-[90px] h-[550px]   sm:h-[200px]  md:h-[300px]  lg:h-[550px] mt-[40px]">



            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              loop={true}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
              }}
              // navigation={true}
              navigation={{
                nextEl: '.custom-nextf',
                prevEl: '.custom-prevf',
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper h-[500px]"
            >


              <SwiperSlide>

                <img

                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall1}
                  alt=""
                />

              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall1}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall3}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall4}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall1}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall3}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall3}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall4}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall4}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-[100px] object-cover cursor-pointer"
                  src={productSmall3}
                  alt=""
                />
              </SwiperSlide>

            </Swiper>


            <div className="custom-nextf cursor-pointer absolute  top-[-10px] left-[30px] ">
              <FaArrowUp className="text-[25px]" />
            </div>
            <div className="custom-prevf cursor-pointer absolute   left-[30px] ">
              <FaArrowDown className="text-[25px]" />
            </div>

          </div>

          {/* ================= RIGHT BIG SWIPER ================= */}

          <div className="w-[230px] h-[230px]    sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[550px] lg:h-[550px] ">

            <Swiper
              loop={true}
              spaceBetween={10}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed
                    ? thumbsSwiper
                    : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 w-full h-full"
            >

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover "
                  src={productbigg}
                  alt=""

                />



              </SwiperSlide>

              <SwiperSlide>
                {/* <img
                className="w-full h-full object-cover"
                src={productbigg}
                alt=""
                
              /> */}
                <ReactImageZoom  {...props} />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productbigg}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productbigg}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productbigg}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productbigg}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productbigg}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productbigg}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productbigg}
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={productSmall3}
                  alt=""
                />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>



        <div className="w-full">
          <h2 className=" flex items-center font-poppins font-extrabold text-[40px]  text-[#1A1A1A]">Chinese Cabbage    <span className=" mt-[5px] bg-[#c1dac1d0] text-[#2C742F] rounded-[5px]   py-[6px] px-[10px] ml-[10px] font-poppins font-medium text-[15px] ">In Stock</span> </h2>

          <div className=" mt-[10px]">
            <p className="flex items-center">
              <FaStar className="text-[#FF8A00] mr-[3px] " />

              <FaStar className="text-[#FF8A00] mr-[3px] " />

              <FaStar className="text-[#FF8A00] mr-[3px] " />

              <FaStar className="text-[#FF8A00] mr-[3px] " />

              <FaStar className="text-[#FF8A00] mr-[3px] " />

              <span className="font-poppins font-medium text-[14px] text-[#666666] pl-[4px] relative after:w-[5px] after:h-[5px] after:rounded-[5px] after:bg-[#B3B3B3] after:content-[''] after:absolute gap-3.5 after:top-[9px] after:left-[70px]  "> 4 Review</span>

              <h4 className="pl-[30px] font-poppins font-medium text-[14px]">SKU: <span className="text-[#666666]">2,51,594</span></h4>

            </p>
          </div>

          <div className="flex items-center my-[20px] ">
            <h2 className="line-through text-[#B3B3B3] font-poppins font-medium text-[23px] pr-[5px]">$48.00</h2>
            <h2 className="text-[#2C742F] font-poppins pr-[13px] font-medium text-[23px]">$17.28</h2>
            <p className="font-poppins font-medium text-[15px] text-[#EA4B48] py-[3px] px-[13px] rounded-[30px] bg-[#d38d8d2d]">64% Off</p>

          </div>

          <div className="border border-b-[#E5E5E5]"></div>

          <div className="flex justify-between">
            <div className="flex items-center ">
              <h1 className="font-poppins font-medium text-[15px]  ">Brand:</h1>
              <img src={detailspic} alt="" />
            </div>

            <div className="flex items-center">
              <p className="font-poppins font-medium text-[14px] pr-[10px]">Share item:</p>
              <div className="w-[40px] h-[40px]  gap-[20px] hover:bg-[#00B207] hover:text-[white] rounded-[30px] flex justify-center items-center ">
                <Link><FaFacebookF className="text-[18px]" /></Link>
              </div>
              <div className="w-[40px] h-[40px]  gap-[20px] hover:bg-[#00B207] hover:text-[white] rounded-[30px] flex justify-center items-center ">
                <Link><FaTwitter className="text-[18px]" /></Link>
              </div>
              <div className="w-[40px] h-[40px]  gap-[20px] hover:bg-[#00B207] hover:text-[white] rounded-[30px] flex justify-center items-center ">
                <Link><FaGoogleDrive className="text-[18px]" /></Link>
              </div>
              <div className="w-[40px] h-[40px]  gap-[20px] hover:bg-[#00B207] hover:text-[white] rounded-[30px] flex justify-center items-center ">
                <Link><FaInstagram className="text-[18px]" /></Link>
              </div>

            </div>
          </div>


          <div className="w-[540px] mt-[17px] mb-[25px]">
            <p className="font-poppins font-medium text-[14px] text-[#808080]">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
          </div>


          <div className="border border-b-[#ffffff]"></div>


          <div className="flex justify-between my-[20px] items-center ">
            <div className="flex gap-[20px] border border-[#c7c4c4] p-[5px] rounded-[50px] items-center ">
              <div onClick={() => handleClickMinus()} className="w-[35px] h-[35px] cursor-pointer bg-[#F2F2F2] flex justify-center items-center rounded-[35px]">
                <button className="text-[25px] cursor-pointer">-</button>
              </div>
              <h2>{count}</h2>
              <div onClick={() => handleClickPlus()} className="w-[35px] h-[35px] bg-[#F2F2F2] cursor-pointer  flex justify-center items-center rounded-[35px]">
                <button className="text-[25px] cursor-pointer">+</button>
              </div>
            </div>
            <div className="cursor-pointer ">
              <h3 className="flex items-center hover:bg-[blue] gap-[17px] font-poppins font-semibold text-[20px] py-[14px] px-[140px] rounded-[45px] bg-[#00B207] text-[white]">Add to Cart <FaBagShopping /></h3>
            </div>
            <div className="w-[50px] h-[50px] bg-[#cee7ce] hover:bg-[#9be69b] rounded-[50px] flex justify-center items-center">
              <GoHeart className="text-[23px]" />
            </div>
          </div>


          <div className="border border-b-[#ffffff]"></div>


          <div className="mt-[25px]">
            <p className="font-poppins font-medium text-[16px] text-[#1A1A1A]">Category: <span className="text-[#808080] pl-[5px]">Vegetables</span></p>
          </div>
          <div className="flex mt-[14px]">
            <p className="font-poppins font-medium text-[16px] text-[#1A1A1A]">Tag: <span className="text-[#808080] pl-[5px]">Vegetables  Healthy</span></p>
            <p className="font-poppins font-medium text-[16px] pl-[10px] text-[#1A1A1A]">Chinese: <span className="text-[#808080] pl-[5px]">Cabbage  Green Cabbage</span></p>
          </div>

        </div>


      </div>








      {/* akhan theke nicher ta suru */}


      <section className="w-full bg-white">

        {/* ================= TABS ================= */}
        <div className="border-b border-gray-200">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="flex justify-center items-center gap-8">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                  relative py-4 text-sm font-medium
                  transition-all duration-300
                  ${activeTab === tab.id
                      ? 
                      "text-[#53f109]"
                      : 
                      "text-gray-500 hover:text-[#1A1A1A]"
                    }
                `}
                >
                  {tab.title}

                  {/* Active Line */}
                  <span
                    className={`
                    absolute left-0 bottom-0 h-[2px] bg-[#00B207]
                    transition-all duration-300
                    ${activeTab === tab.id
                        && "w-full"
                      
                      }
                  `}
                  />
                </button>
              ))}

            </div>
          </div>
        </div>


        {/* ================= CONTENT ================= */}
        <div className="max-w-[1170px] mx-auto px-4 py-8 overflow-hidden">

          {/* Sliding Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeTab * 100}%)`,
            }}
          >

            {contents.map((content, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >

                {/* ================= TWO COLUMN ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                  {/* LEFT SIDE */}
                  <div>

                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-5">
                      {content.leftTitle}
                    </h3>

                    {/* Additional Information */}
                    {content.leftItems ? (
                      <div className="space-y-4">

                        {content.leftItems.map(([label, value]) => (
                          <div
                            key={label}
                            className="flex items-center text-sm"
                          >
                            <span className="w-[130px] text-[#1A1A1A] font-medium">
                              {label}
                            </span>

                            <span className="text-gray-500">
                              {value}
                            </span>
                          </div>
                        ))}

                      </div>
                    ) : (
                      <p className="text-sm leading-7 text-gray-500 max-w-[500px]">
                        {content.leftText}
                      </p>
                    )}

                  </div>


                  {/* RIGHT SIDE */}
                  <div>

                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-5">
                      {content.rightTitle}
                    </h3>

                    <p className="text-sm leading-7 text-gray-500 max-w-[500px]">
                      {content.rightText}
                    </p>

                    {/* Small Feature Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                          ✓ Quality Product
                        </h4>
                        <p className="text-xs text-gray-500">
                          Carefully selected for the best quality.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                          ✓ 100% Organic
                        </h4>
                        <p className="text-xs text-gray-500">
                          Fresh and healthy vegetables.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>




    </Container>
  );
}
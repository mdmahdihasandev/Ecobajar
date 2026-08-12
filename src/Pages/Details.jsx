import React, { useEffect, useState } from "react";
import { FaStar, FaInstagram, FaTwitter, FaGoogleDrive, FaFacebookF, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ReactImageZoom from "react-image-zoom";
import { GoHeart } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import detailspic from '../assets/details-pic.webp';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import productSmall1 from '../assets/Productsixe-small1.png';
import Bannerlogo from '../../src/assets/bannerpic.webp';
import productSmall3 from '../assets/Productsixe-small3.png';
import productSmall4 from '../assets/Productsixe-small4.png';
import productbigg from '../assets/Productsixebig.png';
import Container from "../Components/Layuots/Container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router";
import axios from "axios";
import ProduactShowcas from "../Components/ProduactShowcas";

export default function Details() {
  const props = {
    zoomWidth: 500,
    img: Bannerlogo,
  };

  let [count, setCount] = useState(1);

  let handleClickPlus = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  };

  let handleClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  // API start
  let [allpro, setAllpro] = useState([]);

  useEffect(() => {
    async function allProduct() {
      try {
        let product = await axios.get('https://dummyjson.com/products');
        setAllpro(product.data.products.slice(0, 5));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    allProduct();
  }, []);
  // API end

  return (
    <Container>
      {/* Top Product Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 my-6 lg:my-10 relative">

        {/* ================= LEFT SWIPER / GALLERY ================= */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse sm:flex-row gap-4">
          
          {/* Thumbnails */}
          <div className="w-full sm:w-[90px] h-[100px] sm:h-[450px] lg:h-[520px] relative shrink-0">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                0: {
                  direction: "horizontal",
                  slidesPerView: 4,
                  spaceBetween: 8,
                },
                640: {
                  direction: "vertical",
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              navigation={{
                nextEl: '.custom-nextf',
                prevEl: '.custom-prevf',
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper h-full w-full"
            >
              {[productSmall1, productSmall1, productSmall3, productSmall4, productSmall1, productSmall3, productSmall3, productSmall4, productSmall4, productSmall3].map((imgSrc, index) => (
                <SwiperSlide key={index} className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    src={imgSrc}
                    alt={`thumbnail-${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Nav Arrows (Hidden on mobile for better UX) */}
            <div className="hidden sm:block custom-nextf cursor-pointer absolute -top-6 left-1/2 -translate-x-1/2 z-10 text-gray-600 hover:text-black">
              <FaArrowUp className="text-[20px]" />
            </div>
            <div className="hidden sm:block custom-prevf cursor-pointer absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 text-gray-600 hover:text-black">
              <FaArrowDown className="text-[20px]" />
            </div>
          </div>

          {/* Main Big Image Swiper */}
         
            <div className="w-full h-auto aspect-square max-h-[520px] rounded-lg overflow-hidden border border-gray-100">
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-full h-full"
              >
                {[productbigg, productbigg, productbigg, productbigg, productbigg, productbigg, productbigg, productSmall3].map((imgSrc, index) => (
                  <SwiperSlide key={index} className="overflow-hidden">
                    {/* Hover-e zoom hobar jonno Tailwind classes */}
                    <img 
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-150 cursor-zoom-in" 
                      src={imgSrc} 
                      alt={`Product View ${index}`} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        </div>

        {/* ================= RIGHT PRODUCT DETAILS ================= */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            {/* Title & Stock */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-[#1A1A1A] leading-tight">
                Chinese Cabbage
              </h2>
              <span className="bg-[#c1dac1d0] text-[#2C742F] rounded-[5px] py-1 px-3 font-poppins font-medium text-xs sm:text-sm">
                In Stock
              </span>
            </div>

            {/* Ratings & SKU */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center text-[#FF8A00]">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="font-poppins font-medium text-[#666666] border-r pr-3 border-gray-300">
                4 Reviews
              </span>
              <h4 className="font-poppins font-medium text-[#1A1A1A]">
                SKU: <span className="text-[#666666]">2,51,594</span>
              </h4>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-3 my-4">
              <h2 className="line-through text-[#B3B3B3] font-poppins font-medium text-xl sm:text-[23px]">$48.00</h2>
              <h2 className="text-[#2C742F] font-poppins font-semibold text-2xl sm:text-[28px]">$17.28</h2>
              <span className="font-poppins font-medium text-xs sm:text-sm text-[#EA4B48] py-1 px-3 rounded-full bg-[#d38d8d2d]">
                64% Off
              </span>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Brand & Social Share */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <h1 className="font-poppins font-medium text-sm sm:text-base">Brand:</h1>
                <img src={detailspic} alt="Brand Logo" className="h-6 object-contain" />
              </div>

              <div className="flex items-center gap-2">
                <p className="font-poppins font-medium text-xs sm:text-sm text-gray-600">Share item:</p>
                <div className="flex items-center gap-1">
                  <Link className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white text-gray-600 transition-colors">
                    <FaFacebookF className="text-sm" />
                  </Link>
                  <Link className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white text-gray-600 transition-colors">
                    <FaTwitter className="text-sm" />
                  </Link>
                  <Link className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white text-gray-600 transition-colors">
                    <FaGoogleDrive className="text-sm" />
                  </Link>
                  <Link className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white text-gray-600 transition-colors">
                    <FaInstagram className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Short Description */}
            <p className="w-full max-w-[540px] mt-4 mb-6 font-poppins text-sm text-[#808080] leading-relaxed">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.
            </p>

            <hr className="border-gray-200 my-4" />

            {/* Quantity Counter & Add to Cart */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 my-6">
              {/* Quantity */}
              <div className="flex items-center gap-3 border border-[#E5E5E5] p-1.5 rounded-full">
                <button
                  onClick={handleClickMinus}
                  className="w-8 h-8 cursor-pointer bg-[#F2F2F2] hover:bg-gray-300 flex justify-center items-center rounded-full text-lg font-bold text-gray-700 transition-colors"
                >
                  -
                </button>
                <span className="font-semibold text-base px-2">{count}</span>
                <button
                  onClick={handleClickPlus}
                  className="w-8 h-8 cursor-pointer bg-[#F2F2F2] hover:bg-gray-300 flex justify-center items-center rounded-full text-lg font-bold text-gray-700 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 min-w-[180px] flex items-center justify-center gap-3 font-poppins font-semibold text-sm sm:text-base py-3.5 px-6 rounded-full bg-[#00B207] hover:bg-[#008a05] text-white transition-colors cursor-pointer">
                Add to Cart <FaBagShopping className="text-lg" />
              </button>

              {/* Wishlist Icon */}
              <button className="w-12 h-12 shrink-0 bg-[#cee7ce] hover:bg-[#00B207] hover:text-white text-[#2C742F] rounded-full flex justify-center items-center transition-colors cursor-pointer">
                <GoHeart className="text-xl" />
              </button>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Category & Tags */}
            <div className="space-y-2 text-sm font-poppins">
              <p className="font-medium text-[#1A1A1A]">
                Category: <span className="text-[#808080] font-normal pl-1">Vegetables</span>
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p className="font-medium text-[#1A1A1A]">
                  Tag: <span className="text-[#808080] font-normal pl-1">Vegetables Healthy</span>
                </p>
                <p className="font-medium text-[#1A1A1A]">
                  Chinese: <span className="text-[#808080] font-normal pl-1">Cabbage Green Cabbage</span>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ================= TABS SECTION ================= */}
      <div className="my-10 lg:my-16">

        {/* Tab Headers */}
        <div className="flex justify-center gap-4 sm:gap-10 md:gap-12 border-b border-gray-200 overflow-x-auto">
          {["description", "information", "feedback"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 font-poppins font-medium text-sm sm:text-base capitalize transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "text-[#1A1A1A] border-b-2 border-[#00B207]"
                  : "text-[#808080] hover:text-[#1A1A1A]"
              }`}
            >
              {tab === "description" ? "Descriptions" : tab === "information" ? "Additional Information" : "Customer Feedback"}
            </button>
          ))}
        </div>

        {/* Tab Contents Container */}
        <div className="mt-8">

          {/* Description Tab */}
          {activeTab === "description" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 font-poppins text-sm text-[#808080] space-y-4">
                <p className="leading-relaxed">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
                </p>
                <p className="leading-relaxed">
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla.
                </p>
                
                <div className="space-y-2 pt-2">
                  {[
                    "100 g of fresh leaves provides.",
                    "Aliquam ac est at augue volutpat elementum.",
                    "Quisque nec enim eget sapien molestie.",
                    "Proin convallis odio volutpat finibus posuere."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <IoMdCheckmarkCircle className="text-[#00B207] text-xl shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <p className="pt-2 leading-relaxed">
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/qt26WJOf76s"
                    title="Product Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f7f7f7] rounded-lg p-5">
                  <div className="flex items-center gap-3">
                    <GiPriceTag className="text-2xl text-[#00B207] shrink-0" />
                    <div>
                      <h5 className="font-poppins font-medium text-sm text-[#1A1A1A]">64% Discount</h5>
                      <p className="font-poppins text-xs text-[#808080]">Save your 64% money with us</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiPriceTag className="text-2xl text-[#00B207] shrink-0" />
                    <div>
                      <h5 className="font-poppins font-medium text-sm text-[#1A1A1A]">100% Organic</h5>
                      <p className="font-poppins text-xs text-[#808080]">100% Organic Healthy Food</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Additional Information Tab */}
          {activeTab === "information" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 font-poppins text-sm text-[#808080] space-y-4">
                <p className="leading-relaxed">
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla.
                </p>

                <div className="space-y-2 pt-2">
                  {[
                    "100 g of fresh leaves provides.",
                    "Aliquam ac est at augue volutpat elementum.",
                    "Quisque nec enim eget sapien molestie.",
                    "Proin convallis odio volutpat finibus posuere."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <IoMdCheckmarkCircle className="text-[#00B207] text-xl shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <p className="pt-2 leading-relaxed">
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/rH-OxS4S_3E"
                    title="Information Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f7f7f7] rounded-lg p-5">
                  <div className="flex items-center gap-3">
                    <GiPriceTag className="text-2xl text-[#00B207] shrink-0" />
                    <div>
                      <h5 className="font-poppins font-medium text-sm text-[#1A1A1A]">64% Discount</h5>
                      <p className="font-poppins text-xs text-[#808080]">Save your 64% money with us</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiPriceTag className="text-2xl text-[#00B207] shrink-0" />
                    <div>
                      <h5 className="font-poppins font-medium text-sm text-[#1A1A1A]">100% Organic</h5>
                      <p className="font-poppins text-xs text-[#808080]">100% Organic Healthy Food</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Customer Feedback Tab */}
          {activeTab === "feedback" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 font-poppins text-sm text-[#808080] space-y-4">
                <p className="leading-relaxed">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra.
                </p>

                <div className="space-y-2 pt-2">
                  {[
                    "100 g of fresh leaves provides.",
                    "Aliquam ac est at augue volutpat elementum.",
                    "Quisque nec enim eget sapien molestie.",
                    "Proin convallis odio volutpat finibus posuere."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <IoMdCheckmarkCircle className="text-[#00B207] text-xl shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <p className="pt-2 leading-relaxed">
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/jVrPC_yssY0"
                    title="Feedback Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f7f7f7] rounded-lg p-5">
                  <div className="flex items-center gap-3">
                    <GiPriceTag className="text-2xl text-[#00B207] shrink-0" />
                    <div>
                      <h5 className="font-poppins font-medium text-sm text-[#1A1A1A]">64% Discount</h5>
                      <p className="font-poppins text-xs text-[#808080]">Save your 64% money with us</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiPriceTag className="text-2xl text-[#00B207] shrink-0" />
                    <div>
                      <h5 className="font-poppins font-medium text-sm text-[#1A1A1A]">100% Organic</h5>
                      <p className="font-poppins text-xs text-[#808080]">100% Organic Healthy Food</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Product Showcase API Section */}
      <ProduactShowcas allData={allpro} showViewAll={false} type="product" titleCenter={true} />

    </Container>
  );
}
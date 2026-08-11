import React, { useState } from 'react'
import Container from './Layuots/Container'
import ProductImages from '../assets/Productimages.webp'
import { Link } from 'react-router';
import { RxArrowRight } from "react-icons/rx";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaRegEye ,  } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";

const ProduactShowcas = ({ allData, showViewAll, type, columns = 5, showTitle = true ,titleCenter }) => {
    console.log(allData);

    let [show,setShow] = useState(false)


    function rattin(count) {
        let hafstar = count.toString().split('.')[1]
        let index = Math.floor(count)
        let arry = []

        for (let i = 0; i < 5; i++) {
            if (i <= count) {
                arry.push("color")
            } else {
                arry.push(i)
            }
        }

        if (hafstar) {
            arry[index] = 'haff'
        }

        return arry
    }

    return (
        <Container>
            <div className='relative px-4 sm:px-0'>

                {
                    showTitle && (
                        <h2 className={`pb-[20px] sm:pb-[30px] font-poppins font-semibold text-[20px] sm:text-[32px] text-[#1A1A1A]  ${titleCenter ? "text-center" : ""}`}>
                            Popular Categories
                        </h2>
                    )
                }

                {showViewAll && (
                    <Link className='flex items-center absolute right-4 sm:right-0 top-[5px] sm:top-[25px] text-[#00B207] font-poppins font-medium text-[14px] sm:text-[16px]' to="/category">
                        View All <RxArrowRight className='text-[20px] sm:text-[30px] pl-[4px] sm:pl-[8px]' />
                    </Link>
                )}

                {/* Responsive Grid System */}
                <div className={`grid grid-cols-2 gap-4 mb-[50px]
                        ${type === 'category' ? 'sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 text-center  '  : ''}
                        ${type === 'product' && columns === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : ''}
                        ${type === 'product' && columns === 5 ? 'sm:grid-cols-4 md:grid-cols-5' : ''}
                        ${type === 'hotdeal' ? 'sm:grid-cols-4 md:grid-cols-5' : ''}
                        ${type === 'Featured' ? 'sm:grid-cols-3 md:grid-cols-4' : ''}
                        `}>
                    {allData && allData.map((item, idx) => (
                        <div
                            key={item.id || idx}

                            className={`group relative border border-[#979393] p-3 sm:p-4 rounded-lg bg-white transition-all duration-300
                                ${type === 'product' && 'hover:border-1 hover:border-[#06f12d]  '} 
                                ${type === 'category' && 'hover:border-1 hover:border-[#15ff00] hover:text-[#13d11a] cursor-pointer '} 
                                ${type === 'Featured' ? 'hover:border-1' : ''}`} >


                          

                            {type === 'product' && (
                               <>
                                <div onClick={()=> setShow(!show)} className="absolute top-[50px] w-[30px] h-[30px] bg-[#dad8d8] flex justify-center items-center rounded-[30px]  right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#00B207] cursor-pointer">

                                    {
                                        show 
                                        ?

                                       
                                        <IoEyeOff className='cursor-pointer text-[20px] '  />
                                        :
                                         <FaRegEye className="text-[20px] cursor-pointer " />
                                    }
                                  
                                </div>

                                 <div className="absolute top-[10px] w-[30px] h-[30px] bg-[#dad8d8] flex justify-center items-center rounded-[30px]  right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#00B207] cursor-pointer">
                                  
                                   <Link to="/wishlist">
                                    <IoIosHeartEmpty className='text-[20px] ' />
                                   </Link>
                                   
                                </div>

                                <div className='w-[35px] h-[35px] bg-white text-black rounded-full flex justify-center items-center absolute hover:bg-[#00B207] hover:text-[#f7f6f6] bottom-[20px] right-[25px] cursor-pointer transition-colors'>

                                    <Link to="cart">
                                    
                                        <IoBagOutline className='text-[22px]' />
                                    </Link>

                                    </div>

                               </>
                            )}
                           



                            {/* Product Image */}
                            {item.price ? (
                                <img className='w-full h-auto object-cover pb-[13px]' src={item.thumbnail} alt="productimages" />
                            ) : (
                                <img className='w-full h-auto object-cover pb-[13px]' src={ProductImages} alt="productimages" />
                            )}

                            {/* Title */}
                            {item.price ? (
                                <h3 className='pb-[5px] sm:pb-[10px] text-[14px] sm:text-[16px] font-medium line-clamp-1'>
                                    {item.name || item.title}
                                </h3>
                            ) : (
                                <h3 className='pb-[5px] sm:pb-[10px] text-[14px] sm:text-[16px] font-medium line-clamp-1'>
                                    {item.name || item.title}
                                </h3>
                            )}

                            {/* Price */}
                            <p className='text-[14px] sm:text-[16px] font-bold text-[#1A1A1A] pb-1'>
                                {item.price && `$${item.price}`}
                            </p>

                            {/* Ratings */}
                            <div className='flex items-center gap-0.5 text-[12px] sm:text-[14px]'>
                                {item.rating && rattin(item.rating).map((star, sIdx) => (
                                    star === "color" ? (
                                        <IoIosStar key={sIdx} className='text-yellow-300' />
                                    ) : star === 'haff' ? (
                                        <IoIosStarHalf key={sIdx} className='text-yellow-300' />
                                    ) : (
                                        <IoIosStar key={sIdx} className='text-gray-300' />
                                    )
                                ))}
                            </div>

                            {/* Hot Deal Overlay - Hidden on Mobile, Hover on Large Screens */}
                            {type === 'hotdeal' && (
                                <div className='hidden md:group-hover:block absolute top-[-100px] left-0 w-[320px] h-[450px] bg-[#7c7a7a] z-50 p-6 rounded-lg shadow-xl text-white transition-all duration-300'>
                                    <div className='w-[35px] h-[35px] bg-white text-black rounded-full flex justify-center items-center absolute hover:bg-yellow-400 top-[360px] right-[30px] cursor-pointer transition-colors'>
                                        <IoBagOutline className='text-[18px]' />
                                    </div>
                                    <img className='w-full h-[300px] object-cover pb-[13px] rounded' src={item.thumbnail} alt="productimages" />
                                    <h3 className=' font-semibold text-lg'> {item.name || item.title} </h3>
                                    <p className='font-bold text-xl mb-2'>{`$${item.price && item.price}`}</p>

                                    <div className='flex items-center gap-0.5'>
                                        {item.rating && rattin(item.rating).map((star, sIdx) => (
                                            star === "color" ? (
                                                <IoIosStar key={sIdx} className='text-yellow-300' />
                                            ) : star === 'haff' ? (
                                                <IoIosStarHalf key={sIdx} className='text-yellow-300' />
                                            ) : (
                                                <IoIosStar key={sIdx} className='text-white/50' />
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Featured Bag Icon - Made Responsive */}
                            {type === 'Featured' && (
                                <div className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-[#e0e0e0] hover:bg-red-500 hover:text-white transition-colors absolute bottom-3 right-3 flex justify-center items-center rounded-full cursor-pointer'>
                                    <IoBagOutline className='text-[16px] sm:text-[20px]' />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default ProduactShowcas
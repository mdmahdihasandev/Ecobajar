import React, { useRef, useState } from 'react'
import Container from '../Components/Layuots/Container'
import { FaAngleDown } from "react-icons/fa6";
import Accordian from '../Components/Accordian';
import useOutsideClick from '../Hooks/OutsiteClick';
import { CgFilters } from 'react-icons/cg';
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import disspic from "../assets/iscount.webp";
import product from "../assets/Product.png"


const Shop = () => {

  let refdrop = useRef(null)
  let [open, setOpen] = useState(false)

  useOutsideClick(refdrop, () => setOpen(false), open)


  let [showinput, setShowinput] = useState(false)
  let [showRating, setShowRating] = useState(false)
  let [showPopular, setShowPopular] = useState(false)













  // rattinf 

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

        <div className='flex justify-between my-[30px] items-center'>
          <div className='w-[131px] h-[45px] bg-[#00B207]  flex justify-center rounded-[40px] items-center'>
            <h2 className='font-semibold text-[14px] text-white flex gap-[10px] items-center'>Filter <CgFilters /></h2>
          </div>
          <div className='flex'>
            <div className='pt-[8px] pr-[13px]'>
              <p className='font-poppins font-medium text-[14px] text-[#808080]'>Sort by:</p>
            </div>
            <div className='w-[166px] h-[40px] border border-solid border-[#808080] flex items-center relative ' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <h4 className=' flex justify-between items-center pl-[10px] gap-[80px] font-poppins font-medium text-[14px] text-[#4D4D4D] '>Latest <FaAngleDown className={`duration-300 ml-1 ${open ? "rotate-180" : "rotate-0"}`} /></h4>

              {
                open &&
                <div className='absolute top-[35px] left-[100px] w-[50px] h-[100px] flex justify-center bg-[#cecccc] cursor-pointer'>
                  <ul className='py-[10px]'>
                    <li className='pb-[8px] hover:text-[blue]'>MH</li>
                    <li className='pb-[8px] hover:text-[blue]'>XS</li>
                    <li className='pb-[8px] hover:text-[blue]'>AW</li>
                  </ul>
                </div>
              }

            </div>
          </div>
          <div className='flex gap-[7px]'>
            <h3 className='font-poppins font-semibold text-[16px] text-[#1A1A1A]'>52</h3>
            <p className='text-[16px] font-poppins font-normal text-[#666666]'> Results Found</p>
          </div>
        </div>



          <div className='w-[315px]'>

               <h2 onClick={() => setShowinput(!showinput)} className='flex items-center gap-[100px] font-poppins font-medium text-[25px] text-[#1A1A1A]  '>All Catagory <FaAngleDown className={`duration-300 ml-1 ${showinput ? "rotate-180" : "rotate-0"} cursor-pointer`} /></h2>

        {
          showinput &&
          <>
            <div className='mt-[20px] '>
              <input className=' catagory-input cursor-pointer hidden' id='checkoutone' type="checkbox" />
              <label className='catagory-label cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutone">Fresh Fruit (25) <span className='text-[#808080] font-poppins font-medium text-[16px]'> (134)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className=' catagory-input cursor-pointer hidden' id='checkouttow' type="checkbox" />
              <label className='catagory-label cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkouttow">Vegetables <span className='text-[#808080] font-poppins font-medium text-[16px]'> (150)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className=' catagory-input cursor-pointer hidden' id='checkoutthree' type="checkbox" />
              <label className='catagory-label cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutthree">Cooking <span className='text-[#808080] font-poppins font-medium text-[16px]'> (54)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className=' catagory-input cursor-pointer hidden' id='checkoutfour' type="checkbox" />
              <label className=' catagory-label cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutfour">Snacks <span className='text-[#808080] font-poppins font-medium text-[16px]'> (47)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className=' catagory-input cursor-pointer hidden' id='checkoutfive' type="checkbox" />
              <label className=' catagory-label cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutfive">Beverages <span className='text-[#808080] font-poppins font-medium text-[16px]'> (43)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className=' catagory-input cursor-pointer hidden' id='checkoutsix' type="checkbox" />
              <label className='catagory-label cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutsix">Beauty & Health <span className='text-[#808080] font-poppins font-medium text-[16px]'> (38)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className='catagory-input cursor-pointer hidden' id='checkoutseven' type="checkbox" />
              <label className='catagory-label cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutseven">Bread & Bakery <span className='text-[#808080] font-poppins font-medium text-[16px]'> (15)</span> </label>
            </div>

             

          </>

        }

         <div className='border-b border-solid border-[#CCCCCC] w-[300px] my-[30px]'></div>




        {/* Rating */}

        <h2 onClick={() => setShowRating(!showRating)} className='flex items-center gap-[167px] font-poppins font-medium text-[25px] text-[#1A1A1A]'>Rating <FaAngleDown
          className={`duration-300 ml-1 ${showRating ? "rotate-180" : "rotate-0"} cursor-pointer`}
        />
        </h2>

        {
          showRating && (
            <div className='mt-[20px]'>

              {/* 5 Star */}
              <div className='mb-[15px]'>
                <input className='ratting-input cursor-pointer hidden' id='rating5' type='checkbox' />

                <label className='ratting-label cursor-pointer flex items-center gap-[5px]'  htmlFor='rating5' >
                  {rattin(5).map((star, index) => (
                    star === "color" ? (
                      <IoIosStar
                        key={index}
                        className='text-[#FF8A00] text-[24px]' />
                    ) : (
                      <IoIosStar
                        key={index}
                        className='text-gray-300 text-[20px]'
                      />
                    )
                  ))}

                  <span className='text-[#1A1A1A] font-poppins font-medium text-[19px] ml-[5px]'> 5.0</span>

                   </label>
              </div>


              {/* 4 Star */}
              <div className='mb-[15px]'>
                <input
                  className='ratting-input cursor-pointer hidden'
                  id='rating4'
                  type='checkbox'
                />

                <label
                  className='ratting-label cursor-pointer flex items-center gap-[5px]'
                  htmlFor='rating4'
                >
                  {rattin(4).map((star, index) => (
                    star === "color" ? (
                      <IoIosStar
                        key={index}
                        className='text-[#FF8A00] text-[24px]'
                      />
                    ) : (
                      <IoIosStar
                        key={index}
                        className='text-gray-300 text-[24px]'
                      />
                    )
                  ))}

                  <span className='font-poppins font-medium text-[19px] text-[#1A1A1A] ml-[5px]'>
                    4.0
                  </span>
                </label>
              </div>


              {/* 3 Star */}
              <div className='mb-[15px]'>
                <input
                  className='ratting-input cursor-pointer hidden'
                  id='rating3'
                  type='checkbox'
                />

                <label
                  className='ratting-label cursor-pointer flex items-center gap-[5px]'
                  htmlFor='rating3'
                >
                  {rattin(3).map((star, index) => (
                    star === "color" ? (
                      <IoIosStar
                        key={index}
                        className='text-[#FF8A00] text-[24px]'
                      />
                    ) : (
                      <IoIosStar
                        key={index}
                        className='text-gray-300 text-[24px]'
                      />
                    )
                  ))}

                  <span className='font-poppins font-medium text-[19px] text-[#1A1A1A] ml-[5px]'>
                    3.0
                  </span>
                </label>
              </div>


              {/* 2 Star */}
              <div className='mb-[15px]'>
                <input
                  className='ratting-input cursor-pointer hidden'
                  id='rating2'
                  type='checkbox'
                />

                <label
                  className='ratting-label cursor-pointer flex items-center gap-[5px]'
                  htmlFor='rating2'
                >
                  {rattin(2).map((star, index) => (
                    star === "color" ? (
                      <IoIosStar
                        key={index}
                        className='text-[#FF8A00] text-[24px]'
                      />
                    ) : (
                      <IoIosStar
                        key={index}
                        className='text-gray-300 text-[24px]'
                      />
                    )
                  ))}

                  <span className='font-poppins font-medium text-[19px] text-[#1A1A1A] ml-[5px]'>
                    2.0
                  </span>
                </label>
              </div>


              {/* 1 Star */}
              <div className='mb-[15px]'>
                <input
                  className='ratting-input cursor-pointer hidden'
                  id='rating1'
                  type='checkbox'
                />

                <label
                  className='ratting-label cursor-pointer flex items-center gap-[5px]'
                  htmlFor='rating1'
                >
                  {rattin(1).map((star, index) => (
                    star === "color" ? (
                      <IoIosStar
                        key={index}
                        className='text-[#FF8A00] text-[24px]'
                      />
                    ) : (
                      <IoIosStar
                        key={index}
                        className='text-gray-300 text-[24px]'
                      />
                    )
                  ))}

                  <span className='font-poppins font-medium text-[19px] text-[#1A1A1A] ml-[5px]'>
                    1.0
                  </span>
                </label>
              </div>

            </div>
          )
        }

        <div className='border-b border-solid border-[#CCCCCC] w-[300px] my-[30px]'></div>



        {/* popular tag */}

          <h2 onClick={() => setShowPopular(!showPopular)} className='flex items-center gap-[100px] font-poppins font-medium text-[25px] text-[#1A1A1A]  '>Popular Tag <FaAngleDown className={`duration-300 ml-1 ${showPopular ? "rotate-180" : "rotate-0"} cursor-pointer`} /></h2>

        {
          showPopular &&
          <>
          <div className='flex flex-wrap gap-[10px]'>

            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Healthy</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Low fat</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Vegetarian</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Kid foods</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Vitamins</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Bread</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Meat</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Snacks</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Tiffin</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Launch</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Dinner</label>
            </div>
            <div className='mt-[20px]'>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Breackfast</label>
            </div>
            <div className='mt-[20px] '>
              <input  className=' popularinput cursor-pointer hidden' id='checkoutpopular' type="checkbox" />
              <label  className='popularlabel cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutpopular">Fruit</label>
              
            </div>

          <img className='mt-[30px]' src={disspic} alt="" />

          <h2 className='font-medium font-poppins text-[26px] '>Sale Products</h2>
      
          </div>
        
            {/* <div className='mt-[20px] '>
              <input className='cursor-pointer hidden' id='checkouttow' type="checkbox" />
              <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkouttow">Vegetables <span className='text-[#808080] font-poppins font-medium text-[16px]'> (150)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className='cursor-pointer hidden' id='checkoutthree' type="checkbox" />
              <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutthree">Cooking <span className='text-[#808080] font-poppins font-medium text-[16px]'> (54)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className='cursor-pointer hidden' id='checkoutfour' type="checkbox" />
              <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutfour">Snacks <span className='text-[#808080] font-poppins font-medium text-[16px]'> (47)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className='cursor-pointer hidden' id='checkoutfive' type="checkbox" />
              <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutfive">Beverages <span className='text-[#808080] font-poppins font-medium text-[16px]'> (43)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className='cursor-pointer hidden' id='checkoutsix' type="checkbox" />
              <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutsix">Beauty & Health <span className='text-[#808080] font-poppins font-medium text-[16px]'> (38)</span> </label>
            </div>
            <div className='mt-[20px] '>
              <input className='cursor-pointer hidden' id='checkoutseven' type="checkbox" />
              <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutseven">Bread & Bakery <span className='text-[#808080] font-poppins font-medium text-[16px]'> (15)</span> </label>
            </div> */}

             

          </>

        }

         <div className='border-b border-solid border-[#CCCCCC] w-[300px] my-[30px]'></div>



          </div>


       


        {/* <Accordian title="tis is mai title" icon={<FaAngleDown/>} border={true} bg={true}>

         <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutone' type="checkbox" />
      <label className='cursor-pointer' htmlFor="checkoutone">Applay</label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkouttow' type="checkbox" />
      <label className='cursor-pointer' htmlFor="checkouttow">Applay</label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutthree' type="checkbox" />
      <label className='cursor-pointer' htmlFor="checkoutthree">Applay</label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutfour' type="checkbox" />
      <label className='cursor-pointer' htmlFor="checkoutfour">Applay</label>
    </div>
  </Accordian> */}

  

      </Container>

    </>
  )
}

export default Shop
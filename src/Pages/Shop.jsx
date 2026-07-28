import React, { useRef, useState } from 'react'
import Container from '../Components/Layuots/Container'
import { FaAngleDown } from "react-icons/fa6";
import Accordian from '../Components/Accordian';
import useOutsideClick from '../Hooks/OutsiteClick';
import { CgFilters } from 'react-icons/cg';


const Shop = () => {

   let refdrop = useRef(null)
  let [open, setOpen] = useState(false)

  useOutsideClick(refdrop, () => setOpen(false), open)


  let [showinput,setShowinput] = useState(false)
  let [showRating,setShowRating] = useState(false)

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
     <div  className='w-[166px] h-[40px] border border-solid border-[#808080] flex items-center relative 'onMouseEnter={() => setOpen(true)}  onMouseLeave={() => setOpen(false)}>
        <h4 className=' flex justify-between items-center pl-[10px] gap-[80px] font-poppins font-medium text-[14px] text-[#4D4D4D] '>Latest <FaAngleDown  className={`duration-300 ml-1 ${open ? "rotate-180" : "rotate-0"}`}  /></h4>

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





      <h2 onClick={()=> setShowinput(!showinput)} className='flex items-center gap-[100px] font-poppins font-medium text-[25px] text-[#1A1A1A]  '>All Catagory <FaAngleDown className={`duration-300 ml-1 ${showinput ? "rotate-180" : "rotate-0"} cursor-pointer`} /></h2>

    {
      showinput &&
     <>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutone' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutone">Fresh Fruit (25) <span className='text-[#808080] font-poppins font-medium text-[16px]'> (134)</span> </label>
    </div>
      <div className='mt-[20px] '>
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
    </div>
     
     </>
    }




      <h2 onClick={()=> setShowRating(!showRating)} className='flex items-center gap-[100px] font-poppins font-medium text-[25px] text-[#1A1A1A]  '>Rating <FaAngleDown className={`duration-300 ml-1 ${showRating ? "rotate-180" : "rotate-0"} cursor-pointer`} /></h2>

    {
      showRating &&
     <>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutratingone' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutratingone">Fresh Fruit (25) <span className='text-[#808080] font-poppins font-medium text-[16px]'> (134)</span> </label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutratingtow' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutratingtow">Vegetables <span className='text-[#808080] font-poppins font-medium text-[16px]'> (150)</span> </label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutratingthree' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutratingthree">Cooking <span className='text-[#808080] font-poppins font-medium text-[16px]'> (54)</span> </label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutratingfour' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutratingfour">Snacks <span className='text-[#808080] font-poppins font-medium text-[16px]'> (47)</span> </label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutratingfive' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutratingfive">Beverages <span className='text-[#808080] font-poppins font-medium text-[16px]'> (43)</span> </label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutratingsix' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutratingsix">Beauty & Health <span className='text-[#808080] font-poppins font-medium text-[16px]'> (38)</span> </label>
    </div>
      <div className='mt-[20px] '>
      <input className='cursor-pointer hidden' id='checkoutratingseven' type="checkbox" />
      <label className='cursor-pointer  font-poppins font-medium text-[16px]' htmlFor="checkoutratingseven">Bread & Bakery <span className='text-[#808080] font-poppins font-medium text-[16px]'> (15)</span> </label>
    </div>
     
     </>
    }

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
import React, { useState } from 'react'
import Container from '../Components/Layuots/Container'
import { FaAngleDown } from "react-icons/fa6";
import Accordian from '../Components/Accordian';


const Shop = () => {
  // let [show,setShow] = useState(false)
  return (
    <>
    <Container>
      {/* <h2 onClick={()=> setShow(!show)} className='flex items-center'>All Catagory <FaAngleDown /></h2>

    {
      show &&
     <>
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
     </>
    } */}

  <Accordian title="tis is mai title" icon={<FaAngleDown/>} border={true} bg={true}>

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
  </Accordian>
    
    </Container>
    
    </>
  )
}

export default Shop
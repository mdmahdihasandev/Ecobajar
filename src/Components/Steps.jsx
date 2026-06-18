import React, { useRef, useState } from 'react'
import Container from './Layuots/Container'
import Group from '../assets/Grou.webp'
import Instagram from '../assets/InstagramPost.webp'
import useOutsideClick from '../Hooks/OutsiteClick'
const Steps = () => {
    let [show,setShow] = useState(false)
    let Sidebarref = useRef(null);

    useOutsideClick(Sidebarref, ()=> setShow(false),show)


  return (
    <div className=''>
        <Container>
            <div className='flex justify-between my-[50px] '>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
                <div className='hover:bg-[#00B207] p-[20px]'>
                    <img src={Group} alt="" />
                </div>
              
            </div>

       
         <div className='mb-[50px]' >
            <p className='font-poppins font-semibold text-[32px] text-center pb-[30px]'>Follow us on Instagram</p>

          

            <div className='flex justify-between'>
            <img onClick={()=> setShow(!show)}  src={Instagram} alt="" />
            <img onClick={()=> setShow(!show)} src={Instagram} alt="" />
            <img onClick={()=> setShow(!show)} src={Instagram} alt="" />
            <img onClick={()=> setShow(!show)} src={Instagram} alt="" />
            <img onClick={()=> setShow(!show)} src={Instagram} alt="" />
            <img onClick={()=> setShow(!show)} src={Instagram} alt="" />
            </div>

            {
                show &&
                  <div className='w-full h-screen bg-[#000000be] fixed top-0 left-0 z-50 flex justify-center items-center'>
             <div ref={Sidebarref}>
            <img width={600} src={Instagram} alt="" />
            </div>
            </div>
            }

          

             </div>
        
       

        </Container>
    </div>
  )
}

export default Steps
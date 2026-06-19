import React, { useRef, useState } from 'react'
import Container from './Layuots/Container'
import Group from '../assets/Grou.webp'
import Instagram from '../assets/InstagramPost.webp'
import instraone from '../assets/instra (1).webp'
import instratow from '../assets/instra (2).webp'
import instrathree from '../assets/instra (3).webp'
import instrafor from '../assets/instra (4).webp'
import instrafive from '../assets/instra (5).webp'
import useOutsideClick from '../Hooks/OutsiteClick'
const Steps = () => {
    let [show,setShow] = useState(false)
    let [showone,setShowone] = useState(false)
    let [showotow,setShowtow] = useState(false)
    let [showothree,setShowthree] = useState(false)
    let [showofor,setShowfor] = useState(false)
    let [showofive,setShowfive] = useState(false)
    let Sidebarref = useRef(null);
    let Sidebarrefone = useRef(null);
    let Sidebarreftow = useRef(null);
    let Sidebarrefthree = useRef(null);
    let Sidebarreffor = useRef(null);
    let Sidebarreffive = useRef(null);

    useOutsideClick(Sidebarref, ()=> setShow(false),show)
    useOutsideClick(Sidebarrefone, ()=> setShowone(false),showone)
    useOutsideClick(Sidebarreftow, ()=> setShowtow(false),showotow)
    useOutsideClick(Sidebarrefthree, ()=> setShowthree(false),showothree)
    useOutsideClick(Sidebarreffor, ()=> setShowfor(false),showofor)
    useOutsideClick(Sidebarreffive, ()=> setShowfive(false),showofive)


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
            <img onClick={()=> setShowone(!showone)} src={instraone} alt="" />
            <img onClick={()=> setShowtow(!showotow)} src={instratow} alt="" />
            <img onClick={()=> setShowthree(!showothree)} src={instrathree} alt="" />
            <img onClick={()=> setShowfor(!showofor)} src={instrafor} alt="" />
            <img onClick={()=> setShowfive(!showofive)} src={instrafive} alt="" />
            </div>

            {
                show &&
                  <div className='w-full h-screen bg-[#000000be] fixed top-0 left-0 z-50 flex justify-center items-center'>
             <div ref={Sidebarref}>
            <img width={600} src={Instagram} alt="" />
            </div>
            </div>
            }
            {
                showone &&
                  <div className='w-full h-screen bg-[#000000be] fixed top-0 left-0 z-50 flex justify-center items-center'>
             <div ref={Sidebarrefone}>
            <img width={600} src={instraone} alt="" />
            </div>
            </div>
            }
            {
                showotow &&
                  <div className='w-full h-screen bg-[#000000be] fixed top-0 left-0 z-50 flex justify-center items-center'>
             <div ref={Sidebarreftow}>
            <img width={600} src={instratow} alt="" />
            </div>
            </div>
            }
            {
                showothree &&
                  <div className='w-full h-screen bg-[#000000be] fixed top-0 left-0 z-50 flex justify-center items-center'>
             <div ref={Sidebarrefthree}>
            <img width={600} src={instrathree} alt="" />
            </div>
            </div>
            }
            {
                showofor &&
                  <div className='w-full h-screen bg-[#000000be] fixed top-0 left-0 z-50 flex justify-center items-center'>
             <div ref={Sidebarreffor}>
            <img width={600} src={instrafor} alt="" />
            </div>
            </div>
            }
            {
                showofive &&
                  <div className='w-full h-screen bg-[#000000be] fixed top-0 left-0 z-50 flex justify-center items-center'>
             <div ref={Sidebarreffive}>
            <img width={600} src={instrafive} alt="" />
            </div>
            </div>
            }

          

             </div>
        
       
            
        </Container>
    </div>
  )
}

export default Steps
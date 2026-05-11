import React from 'react'
import BackgrounPic from '../assets/Breadcrumbs.webp'
import Container from './Layuots/Container'
import { useLocation } from 'react-router'
import { IoHomeOutline } from "react-icons/io5";

const Breadcumb = () => {
    let PageName = useLocation()
    let arr = PageName.pathname.split('/')
    return (
        <div className='bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${BackgrounPic})` }}>
            <Container>
                <div className='flex items-center py-11'>
                    <IoHomeOutline className='text-[23px] text-[#808080]' />
                    {
                        arr.map((item, index) => (
                            <span key={index} className='font-poppins text-[20px] text-[#808080]'>

                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                {index < arr.length - 1 && <span className='mx-2 text-[#808080]'>
                                    {"/".replace("/", ">")}</span>}

                            </span>
                        ))
                    }
                </div>
            </Container>

        </div>

    )
}

export default Breadcumb
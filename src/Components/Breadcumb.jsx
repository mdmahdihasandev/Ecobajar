import React from 'react'
import BackgrounPic from '../assets/Breadcrumbs.webp'
import Container from './Layuots/Container'
import { useLocation, Link } from 'react-router'
import { IoHomeOutline, IoChevronForward } from "react-icons/io5"

const Breadcumb = () => {
  const location = useLocation();
  
  // URL পাথ কেটে অ্যারে তৈরি করা (ফাঁকা এলিমেন্ট বাদ দিয়ে)
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div 
      className='bg-center w-full bg-cover bg-no-repeat' 
      style={{ backgroundImage: `url(${BackgrounPic})` }}
    >
      <Container>
        <div className='flex items-center flex-wrap gap-2 py-6 sm:py-10 font-poppins text-sm sm:text-base'>
          
          {/* Home Link */}
          <Link 
            to="/" 
            className='flex items-center gap-1 text-[#808080] hover:text-[#00B207] transition-colors'
          >
            <IoHomeOutline className='text-lg sm:text-xl' />
          </Link>

          {/* Render Path items */}
          {pathnames.length > 0 && (
            <IoChevronForward className='text-xs text-[#808080]' />
          )}

          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const formattedName = value.replace(/-/g, ' '); // হাইফেন থাকলে স্পেস করবে

            return last ? (
              <span key={to} className='text-[#00B207] font-medium capitalize'>
                {formattedName}
              </span>
            ) : (
              <React.Fragment key={to}>
                <Link 
                  to={to} 
                  className='text-[#808080] hover:text-[#00B207] transition-colors capitalize'
                >
                  {formattedName}
                </Link>
                <IoChevronForward className='text-xs text-[#808080]' />
              </React.Fragment>
            );
          })}

        </div>
      </Container>
    </div>
  )
}

export default Breadcumb





// niche sir er ta 



// import React from 'react'
// import BackgrounPic from '../assets/Breadcrumbs.webp'
// import Container from './Layuots/Container'
// import { useLocation } from 'react-router'
// import { IoHomeOutline } from "react-icons/io5";

// const Breadcumb = () => {
//     let PageName = useLocation()
//     let arr = PageName.pathname.split('/')
//     return (
//         <div className='bg-center w-full bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${BackgrounPic})`  }}>
//             <Container>
//                 <div className='flex items-center py-11'>
//                     <IoHomeOutline className='text-[23px] text-[#808080]' />
//                     {
//                         arr.map((item, index) => (
//                             <span key={index} className='font-poppins text-[20px] text-[#808080]'>

//                                 {item.charAt(0).toUpperCase() + item.slice(1)}
//                                 {index < arr.length - 1 && <span className='mx-2 text-[#808080]'>
//                                     {"/".replace("/", ">")}</span>}

//                             </span>
//                         ))
//                     }
//                 </div>
//             </Container>

//         </div>

//     )
// }

// export default Breadcumb
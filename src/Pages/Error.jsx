import React from 'react'
import Container from '../Components/Layuots/Container'
import error from '../assets/error.png'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className='py-12 sm:py-20 my-auto'>
      <Container>
        <div className='max-w-[600px] w-full mx-auto px-4 flex flex-col items-center text-center'>
          
          {/* Error Image */}
          <div className='mb-6 sm:mb-8 max-w-[320px] sm:max-w-md w-full'>
            <img 
              src={error} 
              alt="404 Page Not Found" 
              className='w-full h-auto object-contain mx-auto'
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className='font-poppins font-bold text-2xl sm:text-4xl text-[#1A1A1A] mb-3 sm:mb-4'>
              Oops! page not found
            </h2>
            <p className='font-poppins font-normal text-sm sm:text-base text-[#808080] leading-relaxed max-w-[500px] mx-auto mb-6 sm:mb-8'>
              Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
            </p>

            {/* Back to Home Button */}
            <Link 
              to="/" 
              className='inline-block font-poppins font-semibold text-sm sm:text-base text-white bg-[#00B207] hover:bg-[#008a05] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg'
            >
              Back to Home
            </Link>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Error
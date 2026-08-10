import React, { useEffect, useState } from 'react'
import Container from './Layuots/Container'
import bannerone from '../assets/Bannarone.png'
import bannertow from '../assets/Bannartow.png'
import count from '../assets/count.webp'

const Sale = () => {

  const targetDate = new Date("2026-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetDate - new Date().getTime();
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Days Calculation Fix (1000 * 60 * 60 * 24)
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      <div className="mb-12 sm:mb-20 lg:mb-[100px]">
        <Container>
          {/* Main Flex Layout for All Devices */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">

            {/* Counter Banner Item */}
            <div className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[32%] mx-auto">
              <img src={count} alt="counter" className="w-full h-auto object-cover rounded-lg" />

              {/* Fully Responsive Overlay Counter */}
              <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4 md:gap-6 lg:gap-5 xl:gap-7 w-full justify-center px-2">

                <div className="text-center min-w-[45px] sm:min-w-[55px]">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-none">
                    {String(days).padStart(2, '0')}
                  </h2>
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-200 mt-1">
                    Days
                  </p>
                </div>

                <div className="text-center min-w-[45px] sm:min-w-[55px]">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-none">
                    {String(hours).padStart(2, '0')}
                  </h2>
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-200 mt-1">
                    Hours
                  </p>
                </div>

                <div className="text-center min-w-[45px] sm:min-w-[55px]">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-none">
                    {String(minutes).padStart(2, '0')}
                  </h2>
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-200 mt-1">
                    Mins
                  </p>
                </div>

                <div className="text-center min-w-[45px] sm:min-w-[55px]">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-none">
                    {String(seconds).padStart(2, '0')}
                  </h2>
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-200 mt-1">
                    Secs
                  </p>
                </div>

              </div>
            </div>

            {/* Banner Two */}
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[32%] mx-auto">
              <img src={bannertow} alt="Banner Two" className="w-full h-auto object-cover rounded-lg" />
            </div>

            {/* Banner One */}
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[32%] mx-auto">
              <img src={bannerone} alt="Banner One" className="w-full h-auto object-cover rounded-lg" />
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Sale
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
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 1000 * 1000 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      <div className="mb-[100px]">
        <Container>
          <div className="flex justify-between">

            {/* Counter Image */}
            <div className="relative">

              <img src={count} alt="counter" />

              <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-7">

                <div className="text-center">
                  <h2 className=" text-3xl font-bold text-[white]">{days} </h2>
                  <p className="text-sm uppercase">Days</p>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[white]">{hours}</h2>
                  <p className="text-sm uppercase">Hours</p>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[white]">{minutes}</h2>
                  <p className="text-sm uppercase">Minutes</p>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[white]">{seconds}</h2>
                  <p className="text-sm uppercase">Seconds</p>
                </div>

              </div>

            </div>

            <div>
              <img src={bannertow} alt="" />
            </div>

            <div>
              <img src={bannerone} alt="" />
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Sale
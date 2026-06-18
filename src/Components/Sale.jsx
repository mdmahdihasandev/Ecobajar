import React from 'react'
import Container from './Layuots/Container'
import bannerone from '../assets/Bannarone.png'
import bannertow from '../assets/Bannartow.png'
import Bannarthree from '../assets/Bannarthree.png'

const Sale = () => {
  return (
   <>
  <div className='mb-[100px]'>
     <Container>
    <div className='flex justify-between'>
        <div>
            <img src={bannerone} alt="" />
        </div>
        <div>
              <img src={bannertow} alt="" />
        </div>
        <div>
            <img src={Bannarthree} alt="" />
        </div>
    </div>
   </Container>
  </div>
   </>
  )
}

export default Sale
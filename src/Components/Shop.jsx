import React from 'react'
import Container from './Layuots/Container'
import shop from '../assets/shop.png'

const Shop = () => {
  return (
    <div>
        <Container>
            <div>
                <img className='mb-[30px]' src={shop} alt="shop" />
            </div>
        </Container>
    </div>
  )
}

export default Shop
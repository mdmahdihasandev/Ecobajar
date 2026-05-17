import React from 'react'
import Container from '../Components/Layuots/Container'
import Bannerlogo from '../../src/assets/bannerpic.webp'
import BannerRigt from '../../src/assets/BannerRigt.webp'
import BannerRigt2 from '../../src/assets/BannerRigt2.webp'

const Banner = () => {
  return (
    <div>
        <Container>
           <div className='flex justify-between'>
             <div><img className='pt-[24px]' src={Bannerlogo} alt="Bannerlogo" /></div>
            <div >
                <div><img className='pt-[24px] pb-[24px]' src={BannerRigt} alt="BannerRigt" /></div>
                <div><img src={BannerRigt2} alt="BannerRigt2" /></div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Banner
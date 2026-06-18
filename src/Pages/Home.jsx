import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Support from './Support'
import ProduactShowcas from '../Components/ProduactShowcas'
import axios from 'axios'
import Sale from '../Components/Sale'
import Shop from '../Components/Shop'
import LatestNews from '../Components/LatestNews'
import Client from '../Components/Client'
import Steps from '../Components/Steps'


const Home = () => {

  let [allpro, setAllpro] = useState([])
  let [allcate, setAllcate] = useState([])

  useEffect(()=> {
   async function allProduct(){
    let product = await axios.get('https://dummyjson.com/products')
    setAllpro(product.data.products.slice(0,12));
    
    
   }  
   allProduct()
  },[])

  useEffect(()=> {
   async function allcate(){
    let product = await axios.get('https://dummyjson.com/products/categories')
    setAllcate(product.data.slice(0,12));
    
    
   }  
   allcate()
  },[])

  return (
   
  <>
  <Banner/>
  <Support/>
  <ProduactShowcas type='category' allData={allcate} showViewAll={true} />
  <ProduactShowcas type='product' allData={allpro} showViewAll={true} />
  
  <ProduactShowcas type='hotdeal' allData={allpro} showViewAll={true} />
  <Sale/>
  <ProduactShowcas type='Featured' allData={allpro} showViewAll={true} />
  <Shop/>
  <LatestNews/>
  <Client/>
  <Steps/>
  
  </>
   
  )
}

export default Home
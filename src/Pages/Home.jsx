import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Support from './Support'
import ProduactShowcas from '../Components/ProduactShowcas'
import axios from 'axios'


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
  <ProduactShowcas allData={allcate} showViewAll={true} />
  <ProduactShowcas allData={allpro} showViewAll={true} />
  <ProduactShowcas allData={allpro} showViewAll={true} />
  
  </>
   
  )
}

export default Home
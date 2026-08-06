import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProduactShowcas from '../Components/ProduactShowcas'

const Category = () => {

     let [allpro, setAllpro] = useState([])

  useEffect(()=> {
   async function allProduct(){
    let product = await axios.get('https://dummyjson.com/products')
    setAllpro(product.data.products);
    
    
    
   }  
   allProduct()
  },[])

  return (
    <div>
        <>
      <ProduactShowcas allData={allpro} showViewAll={false} type="product"
/>
       <ProduactShowcas allData={allpro} showViewAll={false} type="Featured"/>
        </>
    </div>
  )
}

export default Category
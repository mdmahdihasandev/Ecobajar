import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProduactShowcas from '../Components/ProduactShowcas'

const Category = () => {

     let [allpro, setAllpro] = useState([])

  useEffect(()=> {
   async function allProduct(){
    let product = await axios.get('https://dummyjson.com/products/categories')
    setAllpro(product.data);
    
   }  
   allProduct()
  },[])

  return (
    <div>
        <>
       <ProduactShowcas allpro={allpro} showViewAll={false} />
       <ProduactShowcas allcate={allpro} showViewAll={false} />
        </>
    </div>
  )
}

export default Category
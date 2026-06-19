import React from 'react'
import Container from './Layuots/Container'
import ProductImages from '../assets/Productimages.webp'
import { Link } from 'react-router';
import { RxArrowRight } from "react-icons/rx";
import { IoIosStar  } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const ProduactShowcas = ({allData,  showViewAll}) => {
    console.log(allData);

    function asd(count){

        let hafstar = count.toString().split('.')[1]
        let index = Math.floor(count)

        let arry = []
        
       for(let i=0; i < 5; i++){

        if(i <= count){
            arry.push("color")
        }
        else{

            arry.push(i)
        }

        
       }

       if(hafstar) {
        arry[index] = 'haff'
       }

       return arry
    }
    
  return (
    <Container>
        <div className='relative'>
            <h2 className='pb-[30px] font-poppins font-semibold text-[32px] text-[#1A1A1A]'>Popular Categories</h2>

        {
           
             showViewAll && <Link className='flex items-center absolute  right-0 top-[25px] text-[#00B207] font-poppins font-medium text-[16px]' to="/category">View All <RxArrowRight className='text-[30px] pl-[8px]' /> </Link>
          
        }
            <div className='flex  gap-[24px] flex-wrap text-center mb-[50px]'>
                 {
                allData.map(item => (
                    
                   <div className='shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6 rounded-lg max-w-[14.99%]'>

                    {
                        item.price ?
                        <img className='pb-[13px]' src={item.thumbnail} alt="produactimages" />
                        :
                        <img className='pb-[13px]' src={ProductImages} alt="produactimages" />

                    
                    }
                drth

                    <h3 className='pb-[10px]'> {item.name || item.title} </h3>
                   {item.price &&
                    <p>${item.price}</p>
                   }
                  
                   
                  <div className='flex'>

                     { item.rating && asd(item.rating).map(item => (
                       
                        item == "color" ?

                        <IoIosStar className='text-yellow-300'/>
                        :

                        item == 'haff'
                        ?
                       <IoIosStarHalf  className='text-yellow-300'/>
                        :
                    <IoIosStar/>
                       
                   ))}
                  </div>
                   </div>
                ))
            }
            </div>
           
        </div>
    </Container>
  )
}

export default ProduactShowcas
import React from 'react'
import Container from './Layuots/Container'
import ProductImages from '../assets/Productimages.webp'
import { Link } from 'react-router';
import { RxArrowRight } from "react-icons/rx";
import { IoIosStar  } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

const ProduactShowcas = ({allData,  showViewAll , type}) => {
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
            <div className={`flex ${type == 'category' && ' gap-[24px]'} flex-wrap  mb-[50px] `}>
                 {
                allData.map(item => (
                    
                   <div className={` group relative border-1 border-[#979393] ${type == 'product' &&'hover:border-2 hover:border-[#15ff00] max-w-[16.99%]'} ${type == 'hotdeal' && 'max-w-[16.99%]'} p-6 rounded-lg max-w-[14.99%]  ${type == 'Featured' &&'hover:border-2  max-w-[20.99%]'} `}>
                   
                  {
                    item.price ?
                      <img className='pb-[13px] ' src={item.thumbnail} alt="produactimages" />
                      :
                        <img className='pb-[13px] ' src={ProductImages} alt="produactimages" />
                  }
                     {item.price ?
                         <h3 className='pb-[10px]'> {item.name || item.title.slice(0,16)}... </h3>
                         :
                         <h3 className='pb-[10px]'> {item.name || item.title} </h3>

                        }
                    

                       
                   
                    <p className=''>{item.price && item.price}</p>
                   

                  <div className='flex '>

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

                 {type == 'hotdeal' && 

                 
                 
                  <div  className={`flex flex-wrap gap-6 hover:[&>*]:scale-90`}>
                     <div className={`w-[480px] h-[550px]    bg-red-600 absolute top-[-30px] left-0   hidden group-hover:block z-50`}>

                        <div className='w-[30px] h-[30px] bg-[white] rounded-2xl flex justify-center items-center absolute hover:bg-[yellow] top-[340px] left-[100px]'>
                                <IoBagOutline className='text-[20px] ' />
                            </div>

                         <img className='pb-[13px] ' src={item.thumbnail} alt="produactimages" />
                            <h3 className='pb-[10px]'> {item.name || item.title} </h3>
                           <p className=''>{item.price && item.price}</p>

                          
                            
                          

                          <div className='flex '>

                             

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
                  </div>}

                  { type == 'Featured' &&
                  
                  <div className='w-[40px] h-[40px] bg-[#c2bfbf] absolute top-[300px] right-[20px] flex justify-center items-center rounded-[50px]'>
                    <IoBagOutline className='text-[20px] hover:text-[red] cursor-pointer  ' />
                  </div>

                  }

                   </div>
                ))
            }
            </div>
           
        </div>
    </Container>
  )
}

export default ProduactShowcas
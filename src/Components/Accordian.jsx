import React from 'react'

const Accordian = ({title , children , icon , border, bg}) => {
  return (
    <div>
        <h1 className={`${border && 'border border-solid border-amber-500'} ${bg && 'bg-blue-600'} mb-[20px] flex justify-between`}>title {title} {icon}</h1>
        <div className='w-full h-[300px] bg-[red]' >{title} {children}</div>
    </div>
  )
}

export default Accordian
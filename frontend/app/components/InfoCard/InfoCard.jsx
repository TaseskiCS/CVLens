import React from 'react'
import Image from 'next/image'

const InfoCard = ({icon, title, text}) => {
  return (
    <>
       
        <div className='bg-white p-5 rounded-lg shadow-lg'>
            <Image 
                src={icon} 
                alt="icon" 
                width={35} 
                height={45} 
            />
            <h3 className='font-bold text-lg'>{title}</h3>
            <p  className='w-64'>{text}</p>
        </div>
       
    </>
  )
}

export default InfoCard
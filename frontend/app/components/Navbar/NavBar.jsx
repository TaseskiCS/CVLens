import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-5 w-full border-b-2 border-black ">  
        <div className='flex gap-12 ml-20'>
          <div>
            <h3 className="text-3xl font-bold ">CVLens</h3>
          </div>
          <div className='flex gap-10'>
            <button className="font-bold">Home</button>
            <button className="font-bold">API</button>
          </div>
        </div>
        <div className="mr-20 font-bold">
          <button>About Us</button>
        </div>
    </div>
  )
}

export default NavBar
import React from 'react'

const UploadButton = () => {
  return (
    <button className="flex items-center hover:scale-105 justify-center gap-2 p-3 bg-black rounded-md shadow-xl border-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>

        <h1 className='font-semibold text-xs text-white'>Upload Resume</h1>
    </button>
  )
}

export default UploadButton



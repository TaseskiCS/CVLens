import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import InfoCard from '../components/InfoCard/InfoCard'

const UploadPage = () => {
  return (
    <>
        <NavBar/>
        <div className="flex justify-center flex-col">
            <div className="flex flex-col justify-center text-center">
                <h1 className="text-3xl font-bold">Upload Your Resume</h1>
                <h2>Let Our AI analyze and optimize your resume for better jobs opportunities</h2>
            </div>
            <div className='flex items-center flex-col mt-10'>
                <div className='bg-slate-400 p-5 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </div>
                <h2 className="font-bold">Drag and drop your resume here</h2>
                <h3 className='mt-5'>Or</h3>
                <button className='bg-black rounded-xl text-white p-3 text-sm mt-2'>Browse Files</button>
                <h3 className='mt-5'>Supported Formats: PDF, DOCX (Max 5MB)</h3>
                <div className="flex flex-wrap gap-3">
                    <InfoCard 
                        icon="/svg/bolt.svg" 
                        title="AI-Powered Analysis" 
                        text="Our AI scans your resume and provides detailed feedback."
                    />
                    <InfoCard 
                        icon="/svg/verify.svg" 
                        title="Keyword Optimization" 
                        text="Optimize for ATS systems and job requirements"
                    />
                </div>
                <div className='flex items-center mt-10 flex-col text-center'>
                    <h2 className="font-bold">How It Works</h2>
                    {/* TODO: Turn these into components */}
                    <div className='flex flex-row justify-center gap-4'>
                        <div className='p-5 max-w-[200px] flex items-center flex-col'>
                            <div className="bg-black p-2 w-8 h-8 flex items-center justify-center rounded-full text-white">1</div>
                            <h2 className='text-sm font-bold'>Upload Resume</h2>
                            <p className='text-xs'>Upload your existing resume in PDF/DOCX format</p>
                        </div>
                        <div className='p-5 max-w-[200px] flex items-center flex-col'>
                            <div className="bg-black p-2 w-8 h-8 flex items-center justify-center rounded-full text-white">2</div>
                            <h2 className='text-sm font-bold'>AI Analysis</h2>
                            <p className='text-xs'>Our AI analyzes your content and structure</p>
                        </div>
                        <div className='p-5 max-w-[200px] flex items-center flex-col'>
                            <div className="bg-black p-2 w-8 h-8 flex items-center justify-center rounded-full text-white">3</div>
                            <h2 className='text-sm font-bold'>View Data</h2>
                            <p className='text-xs'>View the extracted data which is sent via a JSON string</p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default UploadPage
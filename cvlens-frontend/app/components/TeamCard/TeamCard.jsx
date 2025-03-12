import React from 'react'
import Image from 'next/image'

const TeamCard = ({name, image, role, socials}) => {
  return (
    <>
        <img
            src={image}
            alt={name}
            className="w-64 h-64 rounded-md object-cover ml-7" 
            />
        <h3 className="text-xl font-semibold mt-4">{name}</h3>
        <p className="text-gray-500">{role}</p>

              <div className="flex justify-center mt-4 space-x-4">
        <div className='flex gap-2'>
            {socials?.linkedin && (
            <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
            >
                <Image src='/svg/linkedin.svg' width={40} height={40}/>
            </a>
            )}
            {socials?.github && (
            <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
            >
                <Image src='/svg/github.svg' width={40} height={40}/>
            </a>
            )}

            {socials?.portfolio && (
                    <a
                        href={socials.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    > 
                        <Image src='/svg/code.svg' width={40} height={40}/>
                    </a>
            )}
        </div>
        
      </div>
    </>
  )
}

export default TeamCard
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({title, language, bgImg, projUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-md group hover:bg-gradient-to-r from-[#7862ea] to-[#aba1f7]'>
        <Image className='rounded-md group-hover:opacity-10 w-full h-full' src={bgImg} alt='image containing dashboard of the "weka online" project' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-6 pt-2 text-white text-center'>{language}</p>
            <Link href={projUrl}>
              <p className='text-center py-2 rounded-lg bg-white text-gray-800 font-bold text-md cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem
import React from 'react';
import vaultImg from "../public/projects/vault.png";
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const vault = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' fill style={{objectFit:"cover"}} src={vaultImg} alt='image containing dashboard of the "weka online" project' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>The Vault</h2>
          <h3>Python project</h3>
        </div>
      </div>
      
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='p-1 text-md'>Project</p>
          <h2 className='mb-8 mt-2'>Overview</h2>
          <p className='text-lg'>
            The Vault is a console based application which encrypts and stores passwords of users 
            in an encrypted file. Vault allows you to make a new password entry, edit an existing 
            entry, delete an entry, and to view your passwords. It utilises the ‘cryptography’ 
            module in python. This is a console-based application.
          </p>
          <a
            href='https://github.com/sreshtaa136/TheVault'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-8 hover:scale-105 ease-in duration-200 shadow-sm'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
          <div className='p-2'>
            <p className='font-bold pb-4 mt-8 ml-4'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-2 ml-4 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#7862ea]' /> Python
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='mt-8 text-md underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default vault
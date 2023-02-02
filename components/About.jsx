import React from 'react';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import Image from "next/image";
import profile from "../public/profile.jpg";

const About = () => {
  return (
    <div id='about' className= 'max-w-[1240px] mx-auto px-2 py-16 grid grid-cols-2'>
      <div className='mt-32'>
        <h2 className='text-2xl font-semibold font-mono py-2'>Sai Sreshtaa Turaga</h2>             
        <h3 className='text-xl py-3 mb-3'>Front-End and Back-End developer</h3>
        <span className='text-medium leading-8'>Hi there! I am a Computer Science graduate from RMIT University
          <br/>who enjoys creating fun (and sometimes serious) programming projects.
          <br/>I also enjoy video-editing and digital art :)
        </span>
        <p className='uppercase tracking-widest mt-10 font-semibold text-[#5337e2]'>Let's Connect</p>
        <div className='text-3xl gap-x-6 flex mt-5 items-center'>
          <a 
            href='https://www.linkedin.com/in/sai-sreshtaa-turaga'
            target='_blank'
            rel='noreferrer'>
              <div className='bg-white rounded-full shadow-sm shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                <AiFillLinkedin />
              </div>
          </a>
          <a 
            href='https://github.com/sreshtaa136'
            target='_blank'
            rel='noreferrer'>
              <div className='bg-white rounded-full shadow-sm shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                <AiFillGithub />
              </div>
          </a>
          <a 
            href='mailto:sreshtaa.t@gmail.com'
            target='_blank'
            rel='noreferrer'>
              <div className='bg-white rounded-full shadow-sm shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                <AiOutlineMail />
              </div>
          </a>  
        </div>              
      </div>  
      <div className='mt-32'>
        <Image src={profile} className='md:w-64 md:h-64 p-2 md:m-auto w-60 h-54' />
      </div>        
      {/* <div className='bg-white w-60 h-56 ml-12 shadow-sm shadow-gray-400 rounded-md md:w-72 md:h-72 p-2 md:m-auto'>
        <Image src={profile} className='md:w-64 md:h-64 p-2 md:m-auto w-60 h-54' />
      </div> */}
    </div>   
  )
}

export default About
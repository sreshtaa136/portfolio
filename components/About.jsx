import React from 'react';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import Image from "next/image";
import profile from "../public/profile.png";
import connect from "../public/connect.png";

const About = () => {
  return (
    <div id='about' className= 'max-w-[1240px] mx-auto px-2 py-16'>
      <div className='w-4/5 inline-block mt-32'>
        <div className='mb-10 sm:float-right'>
          <Image src={profile} width='240' className='shadow-md' />
        </div> 

        <div className='float-left'>
          <h2 className='text-2xl font-semibold font-mono py-2'>Sai Sreshtaa Turaga</h2>  
          <h3 className='text-xl py-3 mb-3'>Front-End and Back-End developer</h3>
          <span className='text-medium leading-8'>Hi there! I am a Computer Science graduate from RMIT University
            <br/>who enjoys creating fun (and sometimes serious) programming projects.
            <br/>I also enjoy video-editing and digital art :)
          </span>
          <div className='text-3xl gap-x-6 flex items-center mt-10'>
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
            <div className='mb-10'>
              <Image src={connect} width='230' height='200' />
            </div>
          </div>       
        </div>    
      </div>
    </div>   
  )
}

export default About
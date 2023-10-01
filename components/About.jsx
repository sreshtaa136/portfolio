import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.png";
import connect from "../public/connect.png";

const About = () => {
  return (
    <div id="about" className="w-full mt-28 flex text-black max-w-[1240px] h-full justify-between">
      <div className="w-2/3">
        <h2 className="text-2xl font-semibold mb-1.5">
          Sai Sreshtaa Turaga
        </h2>
        <h3 className="text-lg mb-3">Full-stack developer</h3>
        <span className="text-medium leading-8 whitespace-normal">
          Hi there! I am a Computer Science graduate from RMIT University with a strong background 
          in full-stack development, boasting 5 years of hands-on experience in crafting various projects. 
          I take delight in bringing both fun and meaningful programming ventures to life.
          Additionally, I find joy in video editing and digital art, allowing me to engage my creative side 
          beyond the lines of code :)
        </span>
        <div className="text-3xl gap-x-6 flex items-center mt-5">
          <a
            href="https://www.linkedin.com/in/sai-sreshtaa-turaga"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-white rounded-full shadow-sm shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <AiFillLinkedin />
            </div>
          </a>
          <a
            href="https://github.com/sreshtaa136"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-white rounded-full shadow-sm shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <AiFillGithub />
            </div>
          </a>
          <a
            href="mailto:sreshtaa.t@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-white rounded-full shadow-sm shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <AiOutlineMail />
            </div>
          </a>
          <div className="mb-10">
            <Image src={connect} width="200" height="200" />
          </div>
        </div>
      </div>
      <div className="sm:float-right">
        <Image src={profile} width="240" className="shadow-md" />
      </div>
    </div>
  );
};

export default About;

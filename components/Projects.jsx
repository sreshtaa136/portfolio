import React from "react";
import weka from "../public/projects/weka.png";
import hello from "../public/projects/hello.png";
import bookeroo from "../public/projects/bookeroo.png";
import vault from "../public/projects/vault.png";
import qwirkle from "../public/projects/qwirkle.png";
import finder from "../public/projects/finder.png";
import ProjectItem from "./ProjectItem";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Link from 'next/link';
import Image from "next/image";
import hover from "../public/hover.png";

const Projects = () => {
  return (
    <div id='projects' className="w-full mt-10 text-black max-w-[1240px]">
      <div className=''>
        <h2 className="text-3xl font-semibold tracking-wide float-left">Projects</h2>
        <div className="w-full inline-block mt-5 mb-6">
          <h3 className="text-lg inline uppercase tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-pink-600">
            What I've built 
          </h3>
          <div className='float-right'>
            <Image src={hover} width='290' height='200' />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="WEKA Online"
            language="Java + React project"
            bgImg={weka}
            projUrl="/weka"
          />
          <ProjectItem
            title="The Vault"
            language="Python project"
            bgImg={vault}
            projUrl="/vault"
          />
          <ProjectItem
            title="Digital Qwirkle"
            language="C++ project"
            bgImg={qwirkle}
            projUrl="/digitalQwirkle"
          />
          <ProjectItem
            title="Hello App"
            language="Python Flask project"
            bgImg={hello}
            projUrl="/hello"
          />
          <ProjectItem
            title="Bookeroo"
            language="Java project"
            bgImg={bookeroo}
            projUrl="/bookeroo"
          />
          <ProjectItem
            title="Find My Way"
            language="C++ project"
            bgImg={finder}
            projUrl="/findMyWay"
          />
        </div>
        {/* SCROLL TO TOP BUTTON */}
        <div className="flex justify-center py-12">
          <Link href='/'>
            <div className="bg-white rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#7862ea]" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

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

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-3xl font-semibold tracking-wide">Projects</h2>
        <h3 className="text-lg py-5 mb-6 uppercase tracking-widest font-semibold text-[#5337e2]">
          What I've built <span className="text-sm">(Hover to find out more)</span>
        </h3>
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

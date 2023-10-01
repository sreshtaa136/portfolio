import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ProjectPage = ({
  title,
  subTitle,
  coverImg,
  description,
  gitUrl,
  technologies
}) => {
  return (
    <div className="w-full bg-[#f8fafb] text-black">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={coverImg}
          alt={"Image containing dashboard of the" + title + "project"}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{title}</h2>
          <h3>{subTitle}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-12 py-8">
        <div className="col-span-4">
          <p className="p-1 text-md">Project</p>
          <h2 className="mb-8 mt-2">Overview</h2>
          <p className="text-lg" dangerouslySetInnerHTML={{__html: description}} />
          <div className="flex items-center justify-between mt-10">
            <a href={gitUrl} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 hover:scale-105 ease-in duration-200 shadow-sm">
                Code
              </button>
            </a>
            <Link href="/#projects">
              <p className="text-md underline cursor-pointer mr-5">Back</p>
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl rounded-xl p-4">
          <div className="p-2">
            <p className="font-bold pb-4 mt-8 ml-4">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {technologies.map((technology) => (
                <p className="py-2 ml-4 flex items-center">
                  <RiRadioButtonFill className="pr-1 text-[#7862ea]" />{" "}
                  {technology}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

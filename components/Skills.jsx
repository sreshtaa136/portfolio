import React from "react";
import Image from "next/image";
import java from "../public/skills/java-logo.png";
import c from "../public/skills/c-logo.png";
import cpp from "../public/skills/cpp-logo.png";
import css from "../public/skills/css-logo.png";
import flask from "../public/skills/flask-logo.png";
import html from "../public/skills/html-logo.png";
import js from "../public/skills/js-logo.png";
import jsx from "../public/skills/jsx-logo.png";
import php from "../public/skills/php-logo.png";
import python from "../public/skills/python-logo.png";
import react from "../public/skills/react-logo.png";
import spring from "../public/skills/spring-logo.png";
import sql from "../public/skills/sql-logo.png";
import tailwind from "../public/skills/tailwind-logo.png";
import dotnet from "../public/skills/ASP.NET.png";
import csharp from "../public/skills/c-sharp.png";

const Skills = () => {
  return (
    <div id="skills" className="text-black">
      <div className="max-w-[1240px] flex flex-col justify-center h-full">
        <h2 className="text-3xl font-semibold py-2 tracking-wide">
          Tech Skills
        </h2>
        <h1 className="text-lg mb-14 mt-4 uppercase tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-pink-600">
          Languages
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={java} width="112" height="112" alt="java-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">Java</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={python}
                  width="112"
                  height="112"
                  alt="python-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">Python</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={csharp} width="112" height="112" alt="c-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">C#</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} width="112" height="112" alt="html-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={php} width="112" height="112" alt="php-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">PHP</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} width="112" height="112" alt="css-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={js}
                  width="112"
                  height="112"
                  alt="Javascript-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsx} width="112" height="112" alt="jsx-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">JSX</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sql} width="112" height="112" alt="sql-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">SQL</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cpp} width="112" height="112" alt="c++ logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">C++</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={c} width="112" height="112" alt="c-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">C</h3>
              </div>
            </div>
          </div>
        </div>

        {/* FRAMEWORKS */}
        <h3 className="text-lg py-8 mb-3 mt-8 uppercase tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-pink-600">
          Frameworks
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={spring}
                  width="112"
                  height="112"
                  alt="springboot-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">Springboot</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={dotnet} width="112" height="112" alt="flask-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">ASP.NET Core</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width="112" height="112" alt="react-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">React</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={flask} width="112" height="112" alt="flask-logo" />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">Flask</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-md rounded-md hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwind}
                  width="112"
                  height="112"
                  alt="tailwind-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <h3 className="text-xl font-medium">Tailwind CSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

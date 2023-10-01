import React from "react";
import findImg from "../public/projects/finder.png";
import ProjectPage from "../components/ProjectPage";

const findMyWay = () => {
  return (
    <ProjectPage
      title="Find My Way"
      subTitle="C++ project"
      coverImg={findImg}
      description="Find My Way is a C++ project which uses a path-solving algorithm that utilises 
    back-tracking. It prints out the shortest path possible from the start point to 
    the goal point of a given maze. This is a console-based application."
      gitUrl="https://github.com/sreshtaa136/FindMyWay"
      technologies={["C++"]}
    />
  );
};

export default findMyWay;
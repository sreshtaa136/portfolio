import React from "react";
import qwirkleImg from "../public/projects/qwirkle.png";
import ProjectPage from "../components/ProjectPage";

const digitalQwirkle = () => {
  return (
    <ProjectPage
      title="Digital Qwirkle"
      subTitle="C++ project"
      coverImg={qwirkleImg}
      description="A digital adaptation of the board game 'Qwirkle' utilizing C++ data
      structures, specifically Linked Lists and Vectors. This interactive
      application enables users to initiate a new game, resume a
      previously saved game, and select between two-player and
      three-player game modes. This application operates exclusively
      through the console interface."
      gitUrl="https://github.com/sreshtaa136/DigitalQwirkle"
      technologies={["C++"]}
    />
  );
};

export default digitalQwirkle;
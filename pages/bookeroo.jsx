import React from "react";
import bookerooImg from "../public/projects/bookeroo.png";
import ProjectPage from "../components/ProjectPage";

const bookeroo = () => {
  return (
    <ProjectPage
      title="Bookeroo"
      subTitle="Java project"
      coverImg={bookerooImg}
      description="Bookeroo is an online book sharing/selling web
      application which was developed using Agile development methodology working in a team.
      This is an e-commerce website that can be used by anyone, allowing users and publishers
      to sell new or used books. User can add books, view other's books, post/view reviews,
      search for books on the website. Bookeroo was built using Springboot and ReactJS frameworks.
      Continuous integration was performed using CircleCI, and testing was performed using JUnit5."
      gitUrl="https://github.com/sreshtaa136/Bookeroo"
      technologies={["Java", "Springboot", "ReactJS", "JUnit5", "Circle CI"]}
    />
  );
};

export default bookeroo;
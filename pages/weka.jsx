import React from "react";
import wekaImg from "../public/projects/weka.png";
import ProjectPage from "../components/ProjectPage";

const weka = () => {
  return (
    <ProjectPage
      title="WEKA Online"
      subTitle="Java + React project"
      coverImg={wekaImg}
      description="WEKA (Waikato Environment for Knowledge Analysis) is a freely
      available open-source software originally developed at the
      University of Waikato, New Zealand. The existing user interface of
      WEKA has long been considered intricate and less approachable,
      particularly for individuals, including students, lacking technical
      expertise. <br /><br />
      Our collaborative effort, in partnership with RMIT AWS Cloud
      Supercomputing Hub, has yielded a more user-friendly iteration of
      WEKA that retains all its functionalities and behaviors while
      introducing a vastly improved user interface. Notably, our rendition
      of WEKA takes the form of a web-based application, accessible
      through any standard web browser. In my role as a full-stack
      developer and Scrum master, I oversaw the project's development,
      utilizing the Agile methodology to ensure its success."
      gitUrl="https://github.com/JimDzh/P000177CSITCP-Weka-in-AWS-Cloud.git"
      technologies={["Java", "Springboot", "ReactJS", "JUnit5"]}
    />
  );
};

export default weka;
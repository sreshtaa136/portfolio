import React from "react";
import helloImg from "../public/projects/hello.png";
import ProjectPage from "../components/ProjectPage";

const hello = () => {
  return (
    <ProjectPage
      title="Hello App"
      subTitle="Python Flask project"
      coverImg={helloImg}
      description="'Hello' is a dynamic social media website designed for the seamless exchange of notes and images.
      This platform was crafted using the Python Flask framework in conjunction with Amazon Web Services (AWS).
      Leveraging a comprehensive suite of AWS services, including DynamoDB, Elastic Beanstalk, Lambda, CloudFront,
      CodePipeline, S3, and EC2, this web application offers a powerful and scalable infrastructure. <br />
      Users of 'Hello' can effortlessly create, delete, and share notes and images, tailoring their visibility settings
      to meet their specific preferences and needs."
      gitUrl="https://github.com/sreshtaa136/hello-app"
      technologies={["Python", "Flask", "AWS", "Jinja"]}
    />
  );
};

export default hello;
import React from "react";
import PageheaderContent from "../../Components/pageheadercontainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { useAnimateKeyframes } from "react-simple-animate";
import "./style.scss";
import { DiHtml5, DiCss3Full, DiJqueryLogo } from "react-icons/di";
import { FaBootstrap, FaJs } from "react-icons/fa6";

const About = () => {
  const personalDetails = [
    {
      label: "Name",
      value: "Satish Vishnu Aher",
    },
    {
      label: "DOB",
      value: "09 November 1990",
    },
    {
      label: "Email",
      value: "satishvaher@gmail.com",
    },
    {
      label: "Contact",
      value: "+91 7588812119",
    },
  ];

  const jobSummery =
    "Proficient UI Developer with 8.5yrs of Experience in HTML5, CSS3,SCSS, Bootstrap5, copilot, and unitTesting and 4yrs in javascript, jQuery, and 2 yrs in Experience in React Js, Rest Api,json,library(Farmik,moment,axios,yup,react-hook-form,cookie,REDUX)";

  const { play, style } = useAnimateKeyframes({
    iterationCount: "infinite",
    direction: "alternate",
    duration: 5,
    keyframes: [
      "transform: rotateX(0) rotateY(0) rotateZ(0)",
      "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
    ],
  });
  return (
    <>
      <section id="about" className="about">
        <PageheaderContent
          headertext="About Me"
          icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
        ></PageheaderContent>
        <div></div>
        <div className="about-content " style={style}>
          <div className="about-content-personalwrapper">
            <h3>Front End Developer</h3>
            <p>{jobSummery}</p>
            <h3 className="personalInfoheadtext">Personal Information</h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-content-servicewrapper">
            <div className="about-content-servicewrapper-innercontent">
              <div>
                <DiHtml5
                  size={60}
                  color="var(--yellow-theme-main-color)"
                ></DiHtml5>
              </div>
              <div>
                <DiCss3Full
                  size={60}
                  color="var(--yellow-theme-main-color)"
                ></DiCss3Full>
              </div>

              <div>
                <FaBootstrap
                  size={60}
                  color="var(--yellow-theme-main-color)"
                ></FaBootstrap>
              </div>
              <div>
                <FaJs size={60} color="var(--yellow-theme-main-color)"></FaJs>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

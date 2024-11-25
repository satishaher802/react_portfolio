import React from "react";
import { BsBodyText } from "react-icons/bs";
import PageheaderContent from "../../Components/pageheadercontainer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { resumeData } from "./utils";

import "./style.scss";
import { MdWork } from "react-icons/md";
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageheaderContent
        headertext="My Resume"
        icon={<BsBodyText size={40}></BsBodyText>}
      ></PageheaderContent>
      <div className="timeline">
        <div className="timeline-experience">
          <h3 className="timeline-experience-header">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline-experience-vertical-timeline-experience"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1px solid var(--yellow-theme-main-color)",
                }}
                //date="2015 to Present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.role}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.orgname}
                  </h4>
                  <h5>{item.duration}</h5>
                  <h5>{item.location}</h5>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline-education">
          <h3 className="timeline-education-header">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline-experience-vertical-timeline-experience"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1px solid var(--yellow-theme-main-color)",
                }}
                // date="2015 to Present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.desc}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;

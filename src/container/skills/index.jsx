import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageheaderContent from "../../Components/pageheadercontainer";
import { skillData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./style.scss";
const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <PageheaderContent
          headertext="Skills"
          icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
        ></PageheaderContent>
      </section>
      <div className="skills-content-wrapper">
        {skillData.map((item, i) => (
          <div className="skills-content-wrapper-innerContent">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translate(-200px)",
              }}
              end={{
                transform: "translate(0px)",
              }}
            >
              <h3 className="skills-content-wrapper-innerContent-categorytext">
                {item.label}
              </h3>
              <div className="skills-content-wrapper-innerContent-progressbar-container">
                {item.data.map((skillitem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opasity:1", "opasity:0"]}
                    iterationCount="1"
                  >
                    <div className="progress-wrapper" key={j}>
                      <p>{skillitem.skillname}</p>

                      <Line
                        percent={skillitem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="round"
                      ></Line>
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

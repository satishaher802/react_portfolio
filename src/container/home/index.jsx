import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();
  const handlehireme = () => {
    navigate("./contact");
  };
  return (
    <>
      <section id="home" className="home">
        <div className="home_text-wrapper">
          <h1>
            Hello, I am Satish
            <br />
            Front End Developer
          </h1>
        </div>
        <Animate
          play={true}
          duration={1.2}
          delay={1}
          start={{ transform: "translateY(50px)" }}
          end={{ transform: "traslate(0px)" }}
        >
          <div className="home_contact-me">
            <button onClick={handlehireme}>Hire me</button>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default Home;

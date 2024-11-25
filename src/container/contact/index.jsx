import React from "react";
import PageheaderContent from "../../Components/pageheadercontainer";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <PageheaderContent
          headertext="Contact Me"
          icon={<BsPhoneVibrateFill size={40}></BsPhoneVibrateFill>}
        ></PageheaderContent>
        <div className="contact_content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translate (-200px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
            <h3 className="contact_content_headertext">Let's talk</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translate (200px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
            <div className="contact_content_form">
              <div className="contact_content_form_controlswrapper">
                <div className="namewrapper">
                  <input
                    required
                    type={"text"}
                    className="inputName"
                    name="name"
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div className="emailwrapper">
                  <input
                    required
                    type={"text"}
                    className="inputEmail"
                    name="email"
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div className="descriptwrapper">
                  <input
                    required
                    type={"text"}
                    className="inputDesc"
                    name="desc"
                  />
                  <label htmlFor="desc" className="DescLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Lewis
          <span className="text-primary">Sneddon</span>
        </h1>
        <div className="subheading mb-5">
          Full Stack Developer ·
          <a href="mailto:lewis@lewiscodes.io">lewis@lewiscodes.io</a>
        </div>
        <p className="lead mb-5">
          A self taught Full Stack Developer proficient in a variety of
          technologies and programming languages.
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default About;

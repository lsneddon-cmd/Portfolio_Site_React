import React from "react";

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
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/lsneddoncodes/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            href="https://github.com/lsneddon-cmd"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            href="https://mobile.twitter.com/CodesLewis"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="social-icon"
            href="https://stackoverflow.com/users/story/12854901"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-java"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Tools, Libraries & Frameworks</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

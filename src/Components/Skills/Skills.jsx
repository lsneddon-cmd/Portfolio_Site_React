import React from "react";
import { iconSrc } from "../../data/icons";

const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            {/* Kotlin */}
            <img src={iconSrc["kotlin"]} alt="Kotlin logo" />
          </li>
          <li className="list-inline-item">
            {/* Java */}
            <img src={iconSrc["java"]} alt="Java logo" />
          </li>
          <li className="list-inline-item">
            {/* JavaScript */}
            <img src={iconSrc["js"]} alt="JavaScript logo" />
          </li>
        </ul>

        <div className="subheading mb-3">Libraries & Frameworks</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            {/* Android */}
            <img src={iconSrc["android"]} alt="Android logo" />
          </li>
          <li className="list-inline-item">
            {/* React */}
            <img src={iconSrc["react"]} alt="React logo" />
          </li>
          <li className="list-inline-item">
            {/* Node */}
            <img src={iconSrc["node"]} alt="Node logo" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

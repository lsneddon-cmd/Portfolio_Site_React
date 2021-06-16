import React from "react";
import { iconSrc } from "../../data/icons";

const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Tech Skills</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            {/* Java */}
            <img src={iconSrc["java"]} alt="Java logo" />
          </li>
          <li className="list-inline-item">
            {/* Kotlin */}
            <img src={iconSrc["kotlin"]} alt="Kotlin logo" />
          </li>
          <li className="list-inline-item">
            {/* CSharp */}
            <img src={iconSrc["cSharp"]} alt="C# logo" />
          </li>
          <li className="list-inline-item">
            {/* JavaScript */}
            <img src={iconSrc["js"]} alt="JavaScript logo" />
          </li>
          <li className="list-inline-item">
            {/* TypeScript */}
            <img src={iconSrc["typeScript"]} alt="TypeScript logo" />
          </li>
          <li className="list-inline-item">
            {/* Spring */}
            <img src={iconSrc["spring"]} alt="Spring logo" />
          </li>
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
          <li className="list-inline-item">
            {/* Azure */}
            <img src={iconSrc["azure"]} alt="Azure logo" />
          </li>
          <li className="list-inline-item">
            {/* Git */}
            <img src={iconSrc["git"]} alt="Git logo" />
          </li>
        </ul>

        <p className="subheading mb-3">See my <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/story/12854901">Stackoverflow page</a> for Pluralsight Skill IQ scores</p>

      </div>
    </section>
  );
};

export default Skills;

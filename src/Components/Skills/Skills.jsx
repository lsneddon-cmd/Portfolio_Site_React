import React from "react";

const Skills = () => {
  return (
    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Programming Languages</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-java"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square"></i>
          </li>
        </ul>

        <div class="subheading mb-3">Tools, Libraries & Frameworks</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-react"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node-js"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-npm"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

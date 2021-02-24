import React from "react";

const Project = (props) => {
  return (
    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="flex-grow-1">
        <h3 class="mb-0">{props.title}</h3>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class={"fab fa-" + props.techStack}></i>
          </li>
        </ul>
        <p>{props.description}</p>
      </div>
        {props.launchable && <a href={props.launchUrl} target="_blank" rel="noreferrer">
          <button class="btn-primary btn-lg code-button">
            <i class="fa fa-rocket"></i> Launch
          </button>
        </a>}
      &ensp;
      <a href={props.codeUrl} target="_blank" rel="noreferrer">
        <button class="btn-primary btn-lg code-button">
          <i class="fab fa-github"></i> Code
        </button>
      </a>
    </div>
  );
};

export default Project;

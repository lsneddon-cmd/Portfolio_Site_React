import React from "react";

const Project = (props) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{props.title}</h3>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className={"fab fa-" + props.techStack}></i>
          </li>
        </ul>
        <p>{props.description}</p>
      </div>
      {props.launchable && (
        <a href={props.launchUrl} target="_blank" rel="noreferrer">
          <button className="btn-primary btn-lg code-button">
            <i className="fa fa-rocket"></i> Launch
          </button>
        </a>
      )}
      &ensp;
      <a href={props.codeUrl} target="_blank" rel="noreferrer">
        <button className="btn-primary btn-lg code-button">
          <i className="fab fa-github"></i> Code
        </button>
      </a>
    </div>
  );
};

export default Project;

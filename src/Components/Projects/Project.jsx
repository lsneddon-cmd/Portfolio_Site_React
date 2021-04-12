import React from "react";
import "./Project.css";
import { iconSrc } from "../../data/icons";

const Project = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{props.title}</h3>
        <ul className="list-inline dev-icons">
          {props.techStack.map((i) => {
            let image;
            switch (i) {
              case "kotlin":
                image = (
                  <img
                    src={iconSrc["kotlin"]}
                    alt="Kotlin logo"
                  />
                );
                break;
              case "js":
                image = (
                  <img
                    src={iconSrc["js"]}
                    alt="JavaScript logo"
                  />
                );
                break;
              case "java":
                image = (
                  <img
                    src={iconSrc["java"]}
                    alt="Java logo"
                  />
                );
                break;
              case "android":
                image = (
                  <img
                    src={iconSrc["android"]}
                    alt="Android logo"
                  />
                );
                break;
              case "react":
                image = (
                  <img
                    src={iconSrc["react"]}
                    alt="React logo"
                  />
                );
                break;
              default:
                image = null;
            }
            return <li className="list-inline-item">{image}</li>;
          })}
        </ul>
      </div>
      <div className="card-body">
        <div className="btn-container">
          {props.launchable && (
            <a href={props.launchUrl} target="_blank" rel="noreferrer">
              <button className="btn btn-primary btn-md">
                <i className="fa fa-rocket"></i> Launch
              </button>
            </a>
          )}
          <a href={props.codeUrl} target="_blank" rel="noreferrer">
            <button className="btn btn-primary btn-md">
              <i className="fab fa-github"></i> Code
            </button>
          </a>
        </div>

        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Project;

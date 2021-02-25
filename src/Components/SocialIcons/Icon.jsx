import React from "react";

const Icon = (props) => {
  return (
    <a
      className={"icon " + props.icon}
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="tooltip">{props.name}</div>
      <span>
        <i className={"fab fa-" + props.icon}></i>
      </span>
    </a>
  );
};

export default Icon;

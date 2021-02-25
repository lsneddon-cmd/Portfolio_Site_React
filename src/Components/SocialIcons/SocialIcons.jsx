import React from "react";
import "./SocialIcons.css";
import Icon from "./Icon";

const socialStuff = [
  {
    name: "Github",
    iconName: "github",
    targetUrl: "https://github.com/lsneddon-cmd",
  },
  {
    name: "LinkedIn",
    iconName: "linkedin-in",
    targetUrl: "https://www.linkedin.com/in/lsneddoncodes/",
  },
  {
    name: "Stack Overflow",
    iconName: "stack-overflow",
    targetUrl: "https://stackoverflow.com/users/story/12854901",
  },
  {
    name: "Twitter",
    iconName: "twitter",
    targetUrl: "https://mobile.twitter.com/CodesLewis",
  },
];

const SocialIcons = () => {
  return (
    <div className="wrapper">
      {socialStuff.map((i) => {
        return (
          <Icon
            name={i.name}
            icon={i.iconName}
            url={i.targetUrl}
            key={i.name}
          />
        );
      })}
    </div>
  );
};

export default SocialIcons;

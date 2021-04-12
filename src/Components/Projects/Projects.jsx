import React from "react";
import Project from "./Project";
import { projectsData } from "../../data/projectInfo";

const Projects = () => {
  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>
        <div className="card-deck">
          {projectsData.map((i) => {
            return (
              <Project
                title={i.title}
                description={i.description}
                codeUrl={i.codeUrl}
                launchUrl={i.launchUrl}
                techStack={i.techStack}
                launchable={i.launchable}
                key={i.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import Project from "./Project";
import { projectsData, webProjects, mobileProjects, terminalProjects } from "../../data/projectInfo";
import { Tabs, Tab } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>

        <Tabs defaultActiveKey="Command Line">
          <Tab eventKey="Command Line" title="Command Line">
            <div className="card-deck">
              {terminalProjects.map((i) => {
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
          </Tab>
          <Tab eventKey="Web" title="Web">
            <div className="card-deck">
              {webProjects.map((i) => {
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
          </Tab>
          <Tab eventKey="Mobile" title="Mobile" >
            <div className="card-deck">
              {mobileProjects.map((i) => {
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
          </Tab>
          <Tab eventKey="Desktop" title="Desktop" >

          </Tab>
        </Tabs>





      </div>
    </section>
  );
};

export default Projects;

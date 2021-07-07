import React, { useEffect, useState } from "react";
import Project from "./Project";
import {
  webProjects,
  mobileProjects,
  terminalProjects,
  desktopProjects
} from "../../data/projectInfo";
import { Tabs, Tab } from "react-bootstrap";

// const API_WEB_PROJECTS_PATH = "https://5g624c23tc.execute-api.us-east-1.amazonaws.com/default/lewiscodes-projects-web"
//
// function getDesktopProjects() {
//   return fetch(API_WEB_PROJECTS_PATH)
//     .then(data => data.json())
// }
//
// function getMobileProjects() {
//   return fetch(API_WEB_PROJECTS_PATH)
//     .then(data => data.json())
// }
//
// function getWebProjects() {
//   return fetch(API_WEB_PROJECTS_PATH)
//     .then(data => data.json())
// }
//
// function getTerminalProjects() {
//   return fetch(API_WEB_PROJECTS_PATH)
//     .then(data => data.json())
// }

 const Projects = () => {
  // const [desktopProjects, setDesktopProjects] = useState([])
  // const [mobileProjects, setMobileProjects] = useState([])
  // const [webProjects, setWebProjects] = useState([])
  // const [terminalProjects, setTerminalProjects] = useState([])
  //
  // useEffect(() => {
  //   let mounted = true;
  //   getDesktopProjects()
  //     .then(items => {
  //       if(mounted) {
  //         setDesktopProjects(items)
  //       }
  //     })
  //   getMobileProjects()
  //     .then(items => {
  //       if(mounted) {
  //         setMobileProjects(items)
  //       }
  //     })
  //   getWebProjects()
  //     .then(items => {
  //       if(mounted) {
  //         setWebProjects(items)
  //       }
  //     })
  //   getTerminalProjects()
  //     .then(items => {
  //       if(mounted) {
  //         setTerminalProjects(items)
  //       }
  //     })
  //   return () => mounted = false;
  // }, [])


  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>

        <Tabs defaultActiveKey="Desktop">
          <Tab eventKey="Desktop" title="Desktop">
            <div className="card-deck">
              {desktopProjects.map((i) => {
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
          <Tab eventKey="Mobile" title="Mobile">
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
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;

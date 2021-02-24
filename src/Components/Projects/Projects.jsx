import React from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "Bake Buddy",
    description: "A conversion app for common baking ingredients.",
    codeUrl: "https://github.com/lsneddon-cmd/Bake_Buddy_React",
    launchable: true,
    launchUrl: "https://bake-buddy.netlify.app/",
    techStack: ["react"],
  },
  {
    title: "Matrix Calculator",
    description: `A special calculator that uses the command line interface to accept matrix input and carry out a variety of matrix related calculations This program supports; addition, multiplication, scalar multiplication, transposition, determinant and inverse.`,
    codeUrl:
      "https://github.com/lsneddon-cmd/MatrixCalculator/tree/master/src/com/lsneddon/matrixCalculator",
    launchable: false,
    launchUrl: null,
    techStack: ["java"],
  },
  {
    title: "Battleships",
    description: "A Battleship game for terminal.",
    codeUrl:
      "https://github.com/lsneddon-cmd/Battleship/tree/master/Battleship/task/src/battleship",
    launchable: false,
    launchUrl: null,
    techStack: ["java"],
  },
  {
    title: "Simple Banking System",
    description: `A terminal banking app to generate new accounts with unique account numbers; validate access with unique PIN; and validate card number with the Luhn algorithm`,
    codeUrl:
      "https://github.com/lsneddon-cmd/Simple_Banking_System/tree/master/Simple%20Banking%20System/task/src/banking",
    launchable: false,
    launchUrl: null,
    techStack: ["java"],
  },
];

const Projects = () => {
  return (
    <section class="resume-section" id="projects">
      <div class="resume-section-content">
        <h2 class="mb-5">Projects</h2>
        {projectsData.map(i => {
          return (
            <Project
          title={i.title}
          description={i.description}
          codeUrl={i.codeUrl}
          launchUrl={i.launchUrl}
          techStack={i.techStack[0]}
          launchable={i.launchable}
        />
          )
        })}
      </div>
    </section>
  );
};

export default Projects;

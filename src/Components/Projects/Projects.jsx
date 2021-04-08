import React from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "Minesweeper",
    description: "Command Line Minesweeper game",
    codeUrl:
      "https://github.com/codeslewis/Minesweeper/tree/master/Minesweeper/task/src/minesweeper",
    launchable: false,
    launchUrl: null,
    techStack: ["kotlin"],
  },
  {
    title: "Bake Buddy",
    description: "A conversion app for common baking ingredients.",
    codeUrl: "https://github.com/codeslewis/Baking_Conversions",
    launchable: true,
    launchUrl: "https://bake-buddy.netlify.app/",
    techStack: ["react", "js"],
  },
  {
    title: "Recipes",
    description: `Andriod recipe app. Utilises RecyclerView to display a list of recipes.`,
    codeUrl: "https://github.com/codeslewis/Recipes/tree/master/app/src",
    launchable: false,
    launchUrl: null,
    techStack: ["android", "kotlin"],
  },
  {
    title: "Battleships",
    description: "A Battleship game for terminal.",
    codeUrl:
      "https://github.com/codeslewis/Battleship/tree/master/Battleship/task/src/battleship",
    launchable: false,
    launchUrl: null,
    techStack: ["java"],
  },
  {
    title: "Bake Buddy Android",
    description: `A baking ingredient conversion app. This Android app converts Imperial and US Legal baking ingredient measurements into the metric system.`,
    codeUrl:
      "https://github.com/codeslewis/Bake_Buddy_Android/tree/master/app/src",
    launchable: false,
    launchUrl: null,
    techStack: ["android", "java"],
  },
];

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

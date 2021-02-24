import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Certifications from "./Components/Certifications/Certifications";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="container-fluid p-0">
        <About />
        <hr class="m-0" />
        <Projects />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
        <Certifications />
      </div>
    </div>
  );
}

export default App;

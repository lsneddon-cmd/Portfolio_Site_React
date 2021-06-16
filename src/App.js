import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
// import Skills from "./Components/Skills/Skills";
import Certifications from "./Components/Certifications/Certifications";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid p-0">
        <About />
        <Projects />
        <Certifications />
        {/*<hr className="m-0" />*/}
        <Skills />
        {/*<hr className="m-0" />*/}
      </div>
    </div>
  );
}

export default App;

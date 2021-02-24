import React from "react";

const Projects = () => {
  return (
    <section class="resume-section" id="projects">
      <div class="resume-section-content">
        <h2 class="mb-5">Projects</h2>

        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Matrix Calculator</h3>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-java"></i>
              </li>
            </ul>
            <p>
              A special calculator that uses the command line interface to
              accept matrix input and carry out a variety of matrix related
              calculations This program supports; addition, multiplication,
              scalar multiplication, transposition, determinant and inverse.
            </p>
          </div>
          <a
            href="https://github.com/lsneddon-cmd/MatrixCalculator/tree/master/src/com/lsneddon/matrixCalculator"
            target="_blank"
            rel="noreferrer"
          >
            <button class="btn-primary btn-lg code-button">
              <i class="fab fa-github"></i> Code
            </button>
          </a>
        </div>

        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Battleships</h3>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-java"></i>
              </li>
            </ul>
            <p>A Battleship game for terminal.</p>
          </div>
          <a
            href="https://github.com/lsneddon-cmd/Battleship/tree/master/Battleship/task/src/battleship"
            target="_blank"
            rel="noreferrer"
          >
            <button class="btn-primary btn-lg code-button">
              <i class="fab fa-github"></i> Code
            </button>
          </a>
        </div>

        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Simple Banking System</h3>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-java"></i>
              </li>
            </ul>
            <p>
              A terminal banking app to generate new accounts with unique
              account numbers; validate access with unique PIN; and validate
              card number with the Luhn algorithm
            </p>
          </div>
          <a
            href="https://github.com/lsneddon-cmd/Simple_Banking_System/tree/master/Simple%20Banking%20System/task/src/banking"
            target="_blank"
            rel="noreferrer"
          >
            <button class="btn-primary btn-lg code-button">
              <i class="fab fa-github"></i> Code
            </button>
          </a>
        </div>

        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Bake buddy</h3>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
            </ul>
            <p>A conversion app for common baking ingredients.</p>
          </div>
          <a
            href="https://github.com/lsneddon-cmd/Bake_Buddy_React"
            target="_blank"
            rel="noreferrer"
          >
            <button class="btn-primary btn-lg code-button">
              <i class="fab fa-github"></i> Code
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

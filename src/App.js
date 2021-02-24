import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <!-- Page Content--> */}
      <div class="container-fluid p-0">
        {/* <!-- About--> */}
        <About />
        <hr class="m-0" />
        {/* <!-- Experience--> */}
        <Projects />
        <hr class="m-0" />

        {/* <!-- Skills--> */}
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Programming Languages</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-java"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
            </ul>

            <div class="subheading mb-3">Tools, Libraries & Frameworks</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        {/* <!-- Awards--> */}
        <section class="resume-section" id="certifications">
          <div class="resume-section-content">
            <h2 class="mb-5">Certifications</h2>

            <ul>
              <li class="cert-list-item">
                <i class="fab fa-java"></i>&emsp;
                <a
                  href="https://www.hackerrank.com/certificates/e3a23927e4fe"
                  target="_blank"
                  rel="noreferrer"
                >
                  HackerRank
                </a>
              </li>
              <li class="cert-list-item">
                <i class="fab fa-python"></i>&emsp;
                <a
                  href="https://www.hackerrank.com/certificates/5bb5b2fac8f7"
                  target="_blank"
                  rel="noreferrer"
                >
                  HackerRank
                </a>
              </li>
              <li class="cert-list-item">
                <p>
                  Browse my Pluralsight Skill IQ scores from my{" "}
                  <a
                    href="https://stackoverflow.com/users/story/12854901"
                    target="_blank"
                    rel="noreferrer"
                  >
                    stack overflow
                  </a>{" "}
                  Developer Story page
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

// (function ($) {
//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
//       if (
//           location.pathname.replace(/^\//, "") ==
//               this.pathname.replace(/^\//, "") &&
//           location.hostname == this.hostname
//       ) {
//           var target = $(this.hash);
//           target = target.length
//               ? target
//               : $("[name=" + this.hash.slice(1) + "]");
//           if (target.length) {
//               $("html, body").animate(
//                   {
//                       scrollTop: target.offset().top,
//                   },
//                   1000,
//                   "easeInOutExpo"
//               );
//               return false;
//           }
//       }
//   });

//   // Closes responsive menu when a scroll trigger link is clicked
//   $(".js-scroll-trigger").click(function () {
//       $(".navbar-collapse").collapse("hide");
//   });

//   // Activate scrollspy to add active class to navbar items on scroll
//   $("body").scrollspy({
//       target: "#sideNav",
//   });
// })(jQuery);

export default App;

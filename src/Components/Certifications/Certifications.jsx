import React from "react";

const Certifications = () => {
  return (
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
  );
};

export default Certifications;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div class="skill-title">Skills</div>
      <Container>
        <Row className="skill-images">
          <div className="skillsGrid">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="The logo icon for HTML 5"
              title="HTML 5"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="The logo icon for react"
              title="React"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="The logo icon for CSS3"
              title="CSS 3"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              alt="The logo icon for Python"
              title="Python"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="The logo icon for NPM"
              title="NPM"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="The logo icon for GitHub"
              title="GitHub"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              alt="The logo icon for NodeJS"
              title="Node JS"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

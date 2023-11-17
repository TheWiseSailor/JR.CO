import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js";
    document.body.appendChild(script);

    // Initialize AOS after the script has loaded
    script.onload = () => {
      window.AOS.init();
    };

    // Clean up the dynamically added elements when the component is unmounted
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skill-title">Skills</div>
      <Container>
        <Row className="skill-images">
          <div
            className="skillsGrid"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="The logo icon for HTML 5"
              title="HTML 5"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="The logo icon for react"
              title="React"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="The logo icon for CSS3"
              title="CSS 3"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="JavaScript"
              title="JavaScript"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              alt="The logo icon for Python"
              title="Python"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
              alt="SQL"
              title="SQL"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="The logo icon for NPM"
              title="NPM"
              data-aos="fade-left"
              data-aos-duration="3000"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="The logo icon for GitHub"
              title="GitHub"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
              alt="VS Code"
              title="VS Code"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
              alt="Heroku"
              title="Heroku"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              alt="The logo icon for NodeJS"
              title="Node JS"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="express"
              title="Express"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Boostrap"
              title="Bootstrap"
              data-aos="fade-left"
              data-aos-duration="3000"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"
              alt="Sequalize"
              title="Sequalize"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"
              alt="Handlebars"
              title="Handlebars"
              data-aos="fade-left"
              data-aos-duration="3000"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
              alt="jquery"
              title="jquery"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

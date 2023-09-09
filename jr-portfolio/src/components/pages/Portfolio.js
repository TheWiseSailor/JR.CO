import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetails } from "./ProjectDetails";
import jrphotographyv1 from "../../assets/img/Photographyv1.png";
import jrphotographyv2 from "../../assets/img/Photographyv2.png";
import jrportfoliov1 from "../../assets/img/jrportfoliov1.png";
import jrportfoliov2 from "../../assets/img/jrportfoliov2.png";
import WeatherDashboard from "../../assets/img/WeatherDashboard.png";
import NoteTaker from "../../assets/img/NoteTaker.png";
import MarvelFlicks from "../../assets/img/MarvelFlicks.png";
import JavascriptCodeQuiz from "../../assets/img/JavascriptQuiz.png";
import WorkDayScheduler from "../../assets/img/WorkDayScheduler.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Portfolio = () => {
  const projects = [
    {
      title: "JR Portfolio V1",
      imgUrl: jrportfoliov1,
      githubLink: "",
      deployLink: "",
      logLink: "",
    },
    {
      title: "JR Portfolio V2",
      imgUrl: jrportfoliov2,
      githubLink: "",
      deployLink: "",
      logLink: "",
    },
    {
      title: "JR Photography V1",

      imgUrl: jrphotographyv1,
      githubLink:
        "https://github.com/TheWiseSailor/professional-react-portfolio",
      deployLink: "https://thewisesailor.github.io/JR-CO/",
      logLink: "https://github.com/TheWiseSailor/JR-CO/commits/main",
    },
    {
      title: "JR Photography V2",

      imgUrl: jrphotographyv2,
      githubLink: "https://github.com/TheWiseSailor/JR-Photography-v2",
      //deployLink: "", WORKING ON DEPLOYING THIS TO HEROKU. THIS WAS A SIDE PROJECT
      logLink:
        "https://github.com/TheWiseSailor/JR-Photography-v2/commits/main",
    },

    // NOTE: THE ORIGINAL AUTHOR OF THE PROJECT IS LISTED WITHIN THE GITHUB REPO

    {
      title: "Weather Dashboard",
      imgUrl: WeatherDashboard,
      githubLink: "",
      deployLink: "",
      logLink: "",
    },
    {
      title: "Note Taker",
      imgUrl: NoteTaker,
      githubLink: "",
      deployLink: "",
      logLink: "",
    },
    {
      title: "Marvel Flicks",
      imgUrl: MarvelFlicks,
      githubLink: "",
      deployLink: "",
      logLink: "",
    },
    {
      title: "JavaScript Code Quiz",
      imgUrl: JavascriptCodeQuiz,
      githubLink: "",
      deployLink: "",
      logLink: "",
    },
    {
      title: "Workday Scheduler",
      imgUrl: WorkDayScheduler,
      githubLink: "",
      deployLink: "",
      logLink: "",
    },
  ];

  return (
    <section className="project" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                  id="portfolio-container"
                >
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first"> Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Group Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectDetails key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Will integrate into file soon! For now it will just be
                          on Projects.
                          <p>Stay tuned!</p>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Will integrate into file soon!
                          <p>Stay tuned!</p>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

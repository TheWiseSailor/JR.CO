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
import Projects from "../../assets/img//Projects.jpg";

import VenuesXP from "../../assets/img/VenuesXP.png";
import "animate.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Portfolio = () => {
  const projects = [
    {
      title: "JR Portfolio V1",
      imgUrl: jrportfoliov1,
      githubLink: "https://github.com/TheWiseSailor/JR-Portfolio",
      deployLink: "https://thewisesailor.github.io/JR-Portfolio/",
    },
    {
      title: "JR Portfolio V2",
      imgUrl: jrportfoliov2,
      githubLink:
        "https://github.com/TheWiseSailor/professional-react-portfolio",
      deployLink: "",
    },
    {
      title: "JR Photography V1",

      imgUrl: jrphotographyv1,
      githubLink:
        "https://github.com/TheWiseSailor/professional-react-portfolio",
      deployLink: "https://thewisesailor.github.io/JR-CO/",
    },
    {
      title: "JR Photography V2",

      imgUrl: jrphotographyv2,
      githubLink: "https://github.com/TheWiseSailor/JR-Photography-v2",
      deployLink: "https://thewisesailor.github.io/JR-Photography-v2/",
    },

    // NOTE: THE ORIGINAL AUTHOR OF THE PROJECT IS LISTED WITHIN THE GITHUB REPO

    {
      title: "Weather Dashboard",
      imgUrl: WeatherDashboard,
      githubLink: "https://github.com/TheWiseSailor/Weather-DashBoard",
      deployLink: "https://thewisesailor.github.io/Weather-DashBoard/",
    },
    {
      title: "Note Taker",
      imgUrl: NoteTaker,
      githubLink: "https://github.com/TheWiseSailor/Express.js-Note-Taker",
      deployLink: "https://note-taker-69-f0898b1dc611.herokuapp.com/",
    },
    {
      title: "Venues XP",
      imgUrl: VenuesXP,
      githubLink: "https://github.com/BrayMurph/JABIS",
      deployLink: "https://enigmatic-tundra-58761-13359ac3882e.herokuapp.com/",
    },
    {
      title: "Marvel Flicks",
      imgUrl: MarvelFlicks,
      githubLink: "https://github.com/JHeeebert/marvel-flicks",
      deployLink: "https://jheeebert.github.io/marvel-flicks/",
    },
    {
      title: "More projects coming soon!",
      imgUrl: Projects,
    },
    {
      title: "More projects coming soon!",
      imgUrl: Projects,
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

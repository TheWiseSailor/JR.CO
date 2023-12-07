import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetails } from "./ProjectDetails";
import TrackVisibility from "react-on-screen";
import Password from "../../assets/img/Password.png";
import Quiz from "../../assets/img/CodeQuiz.png";
import Readme from "../../assets/img/ReadmeGen.png";
import PWA from "../../assets/img/PWA.png";
import ORM from "../../assets/img/ORM.png";
import jrphotographyv1 from "../../assets/img/Photographyv1.png";
import jrphotographyv2 from "../../assets/img/Photographyv2.png";
import jrportfoliov1 from "../../assets/img/jrportfoliov1.png";
import jrportfoliov2 from "../../assets/img/jrportfoliov2.png";
import WeatherDashboard from "../../assets/img/WeatherDashboard.png";
import NoteTaker from "../../assets/img/NoteTaker.png";
import MarvelFlicks from "../../assets/img/MarvelFlicks.png";
import Projects from "../../assets/img//Projects.jpg";
import FitnessFlavors from "../../assets/img/FitnessFlavors.jpg";
import ReactWeather from "../../assets/img/ReactWeather.jpg";
import ReactPhotography from "../../assets/img/Website.jpg";
import VenuesXP from "../../assets/img/VenuesXP.png";
import Moore from "../../assets/img/Moore-Realestate.png";
import "animate.css";
import "animate.css";

export const Portfolio = () => {
  const marvelflicks = [
    {
      title: "Marvel Flicks",
      imgUrl: MarvelFlicks,
      githubLink: "https://github.com/JHeeebert/marvel-flicks",
      deployLink: "https://jheeebert.github.io/marvel-flicks/",
    },
    // Add more marvelflicks projects if needed
  ];

  const venuesExp = [
    {
      title: "Venues XP",
      imgUrl: VenuesXP,
      githubLink: "https://github.com/BrayMurph/JABIS",
      deployLink: "https://enigmatic-tundra-58761-13359ac3882e.herokuapp.com/",
    },
    // Add more venues exp projects if needed
  ];

  const fitnessFlavors = [
    {
      title: "Fitness Flavors",
      imgUrl: FitnessFlavors,
      githubLink: "https://github.com/4FunkE/Fitness-Flavors",
      deployLink: "https://fitness-flavors-6c56562cb291.herokuapp.com/",
    },
    // Add more fitnessflavors projects if needed
  ];

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
    {
      title: "React Photography",
      imgUrl: ReactPhotography,
      githubLink: "https://github.com/TheWiseSailor/ReactJRPhotography",
      deployLink: "https://thewisesailor.github.io/ReactJRPhotography/",
    },
    {
      title: "Weather Dashboard",
      imgUrl: WeatherDashboard,
      githubLink: "https://github.com/TheWiseSailor/Weather-DashBoard",
      deployLink: "https://thewisesailor.github.io/Weather-DashBoard/",
    },
    {
      title: "React Weather App",
      imgUrl: ReactWeather,
      githubLink: "https://github.com/TheWiseSailor/ReactWeather",
      deployLink: "https://thewisesailor.github.io/ReactWeather/",
    },
    {
      title: "Note Taker",
      imgUrl: NoteTaker,
      githubLink: "https://github.com/TheWiseSailor/Express.js-Note-Taker",
      deployLink: "https://note-taker-69-f0898b1dc611.herokuapp.com/",
    },

    {
      title: "JavaScript Quiz",
      imgUrl: Quiz,
      githubLink: "https://github.com/TheWiseSailor/Javascript-Code-Quiz",
      deployLink: "https://thewisesailor.github.io/Javascript-Code-Quiz/",
    },
    {
      title: "Password Generator",
      imgUrl: Password,
      githubLink: "https://github.com/TheWiseSailor/Password-Generator",
      deployLink: "https://thewisesailor.github.io/Password-Generator/",
    },
    {
      title: "Readme Generator",
      imgUrl: Readme,
      githubLink: "https://github.com/TheWiseSailor/ReadME-Generator",
    },

    {
      title: "ORM Back-End",
      imgUrl: ORM,
      githubLink: "https://github.com/TheWiseSailor/ORM-Ecommerce-Back-End",
      deployLink:
        "https://drive.google.com/file/d/1-7oAyGwLABI0Xom-XMOwHRXpDknNxI8n/view",
    },
    {
      title: "Progressive Web App",
      imgUrl: PWA,
      githubLink:
        "https://github.com/TheWiseSailor/Progressive-Web-Applications-PWA-Challenge-Text-Editor",
    },
  ];

  return (
    <section className="project " id="portfolio">
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
                        <Row>
                          {marvelflicks.map((project, index) => {
                            return <ProjectDetails key={index} {...project} />;
                          })}
                          {venuesExp.map((project, index) => {
                            return <ProjectDetails key={index} {...project} />;
                          })}
                          {fitnessFlavors.map((project, index) => {
                            return <ProjectDetails key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectDetails
                            key={1} // Adjust the key as needed for uniqueness
                            title="Moore Real Estate Coming soon to you soon!"
                            imgUrl={Moore}
                          />

                          {/* Project NewCastle */}
                        </Row>
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

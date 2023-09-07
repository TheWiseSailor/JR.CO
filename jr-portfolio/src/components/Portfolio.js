import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetails } from "./ProjectDetails";
import jrphotographyv1 from "../assets/img/Photographyv1.png";
import jrphotographyv2 from "../assets/img/Photographyv2.png";
import jrportfoliov1 from "../assets/img/jrportfoliov1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Portfolio = () => {
  const projects = [
    {
      title: "JR Photography V1",
      description:
        "JR Photography is a basic, but beautiful landing page made for any one who wants to reach out to others and show their expertise in the field of Photography!",
      imgUrl: jrphotographyv1,
    },
    {
      title: "JR Photography V2",
      description:
        "JR Photography is a modern take on landing pages, made for any one who wants to reach out to others and show their expertise in the field of Photography!",

      imgUrl: jrphotographyv2,
    },
    {
      title: "JR Portfolio",
      description:
        " JR Portfolio is a modern personal portfolio, showcasing my skills, projects, and resume. ",
      imgUrl: jrportfoliov1,
    },
    {
      // title: "",
      // description:
      //   "",
      // imgUrl: ,
    },
    {
      // title: "",
      // description:
      //   "",
      // imgUrl: ,
    },
    {
      // title: "",
      // description:
      //   "",
      // imgUrl: ,
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
                  <h2>Portfolio of projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          More projects coming soon!
                          <p>Stay tuned!</p>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          More projects coming soon!
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
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

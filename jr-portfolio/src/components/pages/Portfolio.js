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
      title: "JR Photography V1",
      description:
        "JR Photography is a basic, but beautiful landing page made for any one who wants to reach out to others and show their expertise in the field of Photography!",
      imgUrl: jrphotographyv1,
      githubLink:
        // this is a test
        "https://github.com/TheWiseSailor/professional-react-portfolio",
      deployLink:
        "https://github.com/TheWiseSailor/professional-react-portfolio",
    },
    {
      title: "JR Photography V2",
      description:
        "JR Photography is a modern take on landing pages, made for any one who wants to reach out to others and show their expertise in the field of Photography!",

      imgUrl: jrphotographyv2,
    },
    {
      title: "JR Portfolio V1",
      description:
        " JR Portfolio V1 is a modern personal portfolio, showcasing my skills, projects, and resume. ",
      imgUrl: jrportfoliov1,
    },
    // NOTE: THE ORIGINAL AUTHOR OF THE PROJECT IS LISTED WITHIN THE GITHUB REPO
    {
      title: "JR Portfolio V2",
      description:
        "JR Portfolio V2 is a more significant version of v1, considering this has the implementation of REACT JS, as well as many other packages, to make it one, beautiful and minimalist portfolio!",
      imgUrl: jrportfoliov2,
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather Dashboard is a user-friendly interface for accessing real-time weather information and forecasts, featuring location search, current weather displays, and customizable weather metric options.",
      imgUrl: WeatherDashboard,
    },
    {
      title: "Note Taker",
      description:
        "The Note Taker app simplifies note organization and storage with a user-friendly interface, powered by the efficient Express.js framework for dependable performance.",
      imgUrl: NoteTaker,
    },
    {
      title: "Marvel Flicks",
      description:
        "Marvel Flicks: Your go-to app for Marvel movies and comics, built with HTML, Tailwind CSS, and JavaScript for easy exploration. Find your avorite Marvel Movie now! ",
      imgUrl: MarvelFlicks,
    },
    {
      title: "JavaScript Code Quiz",
      description:
        "JavaScript Code Quiz is an interactive assessment tool that tests users' knowledge of JavaScript programming through a series of questions and challenges.",
      imgUrl: JavascriptCodeQuiz,
    },
    {
      title: "Workday Scheduler",
      description:
        "A Workday Scheduler is a digital tool designed to help users plan and organize their workday activities and appointments from 9 A.M. - 5 P.M., efficiently.",
      imgUrl: WorkDayScheduler,
    },
    // {
    //   // title: "",
    //   // description:
    //   //   "",
    //   // imgUrl: ,
    // },
    // {
    //   // title: "",
    //   // description:
    //   //   "",
    //   // imgUrl: ,
    // },
    // {
    //   // title: "",
    //   // description:
    //   //   "",
    //   // imgUrl: ,
    // },
    // {
    //   // title: "",
    //   // description:
    //   //   "",
    //   // imgUrl: ,
    // },
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
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

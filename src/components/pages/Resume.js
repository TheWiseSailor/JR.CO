import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../assets/img/Joseph-Rudasill.jpg";
import resumePDF from "../../assets/img/Resume/Resume.pdf";

export const Resume = () => {
  const onlineResumeLink =
    "https://drive.google.com/file/d/1CAFUOhKYJaq2mjnIxyq_6B_CeOPgDP3A/view?usp=drive_link";

  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="resume-welcome-box">
          <h1 className="resume-welcome">
            Hello There! <p>I'm Joseph Rudasill</p>
          </h1>
          <img className="resumePic" src={profilePic} alt="profile picture" />
          <div class="link-box2">
            <a
              className="resume-welcome"
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              download="Resume.pdf"
            >
              Download Resume!
            </a>
          </div>
          <div class="link-box1 pb-32">
            <a
              className="resume-link"
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
            >
              View Live Resume!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

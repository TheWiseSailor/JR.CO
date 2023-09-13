import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../assets/img/Joseph-Rudasill.jpg";
import resumePDF from "../../assets/img/Resume/Resume.pdf";

export const Resume = () => {
  const onlineResumeLink =
    "https://drive.google.com/file/d/1MoiX0nCZiLF3gZAgIRW17mIE2eF1PsDv/view?usp=sharing";

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
              Click Here To Download Resume!
            </a>
          </div>
          <div class="link-box1">
            <a
              className="resume-link"
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
            >
              View Resume!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

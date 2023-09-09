import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../assets/img/Joseph-Rudasill.jpg";

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="resume-welcome-box">
          <h1 className="resume-welcome">
            Hello There! <p>I'm Joseph Rudasill</p>
          </h1>
          <img className="resumePic" src={profilePic} alt="profile picture" />
          <div>
            <a
              className="resume-welcome"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              Click Here to View my Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

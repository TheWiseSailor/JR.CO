import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/insetImage3.png";
import profilePic from "../../assets/img/applemoji.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {
  // Initialize state variables
  const [loopNum, setLoopNum] = useState(0); // Counter for text rotation cycles
  const [isDeleting, setIsDeleting] = useState(false); // Indicates if text is being deleted
  const [text, setText] = useState(""); // The text being displayed and rotated
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Time delay between text changes
  const [index, setIndex] = useState(1); // Index to track current text rotation

  // Define an array for text rotation
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000; // Time period for each full text rotation cycle

  useEffect(() => {
    // Set up a timer interval for the tick function
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // Delete a character from the text
      : fullText.substring(0, text.length + 1); // Add a character to the text

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // Halve the time delay when deleting
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // Start deleting when text is fully displayed
      setIndex((prevIndex) => prevIndex - 1); // Decrement the index
      setDelta(period); // Set the time delay to the rotation period
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false); // Stop deleting when text is empty
      setLoopNum(loopNum + 1); // Increment the text rotation cycle
      setIndex(1); // Reset the index
      setDelta(500); // Set a shorter time delay
    } else {
      setIndex((prevIndex) => prevIndex + 1); // Increment the index
    }
  };

  return (
    <section className="about" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* Render content */}
                  <span className="tagline">Welcome to JR.CO</span>
                  <h1>
                    {`Hello! I'm Joseph,`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Front-End Developer", "UI/UX Designer", ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>Striving For Excellence, The Best Has Yet To Come.</p>

                  <img
                    className="profilePic"
                    src={profilePic}
                    alt="profile picture"
                  />
                  <button onClick={() => console.log("connect")}>
                    Connect! <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  {/* Render an image */}
                  <img className="headerImg" src={headerImg} alt="headerImg" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

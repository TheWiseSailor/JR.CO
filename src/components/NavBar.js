import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo.png";
import discord from "../assets/img/discord.png";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
import snapchat from "../assets/img/snapchat.png";
import instagram from "../assets/img/instagram.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#About"
              className={
                activeLink === "About" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("About")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("resume")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              className={
                activeLink === "Skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("kills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={
                activeLink === "Portfolio"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("portfolio")}
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://discordapp.com/users/389945057345667077">
                <img src={discord} alt="Discord" />
              </a>
              <a href="https://github.com/TheWiseSailor">
                <img src={github} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/joseph-rudasill-2565a41ba/">
                <img src={linkedin} alt="Linked-In" />
              </a>
              <a href="https://www.snapchat.com/add/asianstudmuffin?share_id=gTwL0A4CTtWL7ns+pfxyvg&locale=en_US">
                <img src={snapchat} alt="Snapchat" />
              </a>
              <a href="https://www.instagram.com/_joseph_rudasill_">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

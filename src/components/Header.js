import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"; // Add these imports
import { NavBar } from "./NavBar";
import logo from "../logo.png";
import discord from "../assets/img/discord.png";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
import snapchat from "../assets/img/snapchat.png";
import instagram from "../assets/img/instagram.png";

export const Header = ({ activeLink, onUpdateActiveLink }) => {
  const [scrolled] = useState(false);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js";
  document.body.appendChild(script);

  // Initialize AOS after the script has loaded
  script.onload = () => {
    window.AOS.init();
  };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand
          href="#About"
          data-aos="fade-down"
          data-aos-duration="3000"
          onClick={() => onUpdateActiveLink("About")}
        >
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#About"
              data-aos="fade-up"
              data-aos-duration="3000"
              className={
                activeLink === "About" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("About")}
            ></Nav.Link>
            <Nav.Link
              href="#Resume"
              data-aos="fade-down"
              data-aos-duration="3000"
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("resume")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#skills"
              data-aos="fade-up"
              data-aos-duration="3000"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              data-aos="fade-down"
              data-aos-duration="3000"
              className={
                activeLink === "portfolio"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("portfolio")}
            >
              Portfolio
            </Nav.Link>

          </Nav>
          <span
            className="navbar-text"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
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
              <a href="https://www.instagram.com/joseph_rudasill_">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

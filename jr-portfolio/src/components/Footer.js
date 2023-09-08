import logo from "../logo.png";
import discord from "../assets/img/discord.png";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
import snapchat from "../assets/img/snapchat.png";
import instagram from "../assets/img/instagram.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact-info">
        <h5>Joseph Rudasill</h5>
        <h6>Frontend Developer</h6>
      </div>
      <div className="footer-contact-info">
        <h5>Connect:</h5>
        <h6>
          <a href="mailto: rudasilljay@gmail.com">rudasilljay@gmail.com</a>
        </h6>
      </div>
      <div className="footer-social-icon">{/* <h4>Let's Connect:</h4> */}</div>
      <p>Copyright 2023. All Rights Reserved</p>
    </footer>
  );
};

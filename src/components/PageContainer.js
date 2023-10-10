import React, { useState } from "react";
import { PageHeader } from "./Header";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
// Correct the import for Contact
import Contact from "./pages/Contact"; // Updated import alias
import { Resume } from "./pages/Resume";
import { Skills } from "./pages/Skills";
import { Header } from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./NavBar";
export default function PageContainer() {
  const [activeLink, setActiveLink] = useState("home");

  // Check to see what value of `activeLink` is, then return corresponding component to render.
  const renderPage = () => {
    console.log(activeLink);
    if (activeLink === "about") {
      return <About />;
    }
    if (activeLink === "portfolio") {
      return <Portfolio />;
    }
    if (activeLink === "contact") {
      return <Contact />;
    }
    if (activeLink === "resume") {
      return <Resume />;
    }
    if (activeLink === "skills") {
      return <Skills />;
    }
    // defaults to Homepage for Home
    return <Homepage />;
  };

  const onUpdateActiveLink = (page) => setActiveLink(page);

  return (
    <div>
      {/* Pass activeLink from state and the function to update it */}
      <Header activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
      {/* Call renderPage method which will return a component */}
      {renderPage()}
    </div>
  );
}

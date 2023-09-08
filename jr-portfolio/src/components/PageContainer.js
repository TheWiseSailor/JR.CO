import React, { useState } from "react";
import { NavBar } from "./Header";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

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
      return <Contact />;
    }
    // defaults to Hero for Home
    return <Homepage />;
  };

  const onUpdateActiveLink = (page) => setActiveLink(page);

  return (
    <div>
      {/* Pass activeLink from state and the function to update it */}
      <NavBar activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
      {/* Call renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

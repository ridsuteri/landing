import React from "react";
import { StyledFooter } from "./Footer.styled";
import IconTelephone from "../../svgs/IconTelephone";
import IconEmail from "../../svgs/IconEmail";
// import Logo from "../../svgs/Logo";
// import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { VscLocation } from "react-icons/vsc";

function Footer() {
  return (
    <StyledFooter>
      {/* <Logo fill="currentColor" /> */}
      <div>
        <div className="navItemWithIcon">
          <VscLocation className="icon icon-location" />
          <p>
            And to summarize guys, We are the best !
          </p>
        </div>
        <div className="navItemWithIcon">
          <IconTelephone />
          <a href="tel:++1-543-123-4567"> +91-123-456-7890</a>
        </div>
        <div className="navItemWithIcon">
          <IconEmail />
          <a href="mailto:ridsuteri@gmail.com">ridsuteri@gmail.com</a>
        </div>
      </div>
      <ul>
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
      </ul>
      {/* <ul>
        <li>Career</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul> */}
      {/* <div className="social-icons">
        <span className="social-icon">
          <ImFacebook />
        </span>
        <span className="social-icon">
          <ImTwitter />
        </span>
        <span className="social-icon">
          <ImInstagram />
        </span>
      </div> */}
      
    </StyledFooter>
  );
}

export default Footer;

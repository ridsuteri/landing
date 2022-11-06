import React from "react";
// import Logo from "../svgs/Logo";
import IllustrationMockups from "../svgs/IllustrationMockups";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../styled/Button/Button.styled";

function Header() {
  return (
    <StyledHeader>
      <nav>
        {/* <Logo /> */}
        <h1>DEERGHAYU</h1>
        <a href="https://user-deerghayu.netlify.app/">
        <StyledButton color={`#111`} bg={"#fff"}>
          Try It Free
        </StyledButton>
        </a>
      </nav>

      <section className="headerContent">
        <article>
          <h1>A Step towards healthy nation</h1>
          <p>
            If you agree that AADHAR and UPI are two of the best things that happened to India, then you will love this.
          </p>
          <p>In loose terms, <span style={{color:"red"}} > Deerghayu is your AADHAR for health issues </span></p>
          <a href="https://user-deerghayu.netlify.app/"><StyledButton>Experience it as a user</StyledButton></a> 
        </article>
        <IllustrationMockups />
      </section>
    </StyledHeader>
  );
}

export default Header;

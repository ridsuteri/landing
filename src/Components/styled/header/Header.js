import React from "react";
import Nav from "./Nav/Nav";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../Button/Button.styled";

function Header() {
  return (
    <StyledHeader>
      <Nav />
      <article>
        <h1>Making your health a topic of daily discussion</h1>

        <p>
          Deerghayu re-imagines the way you think about health. With this , you will get all your medical history synced at ONE single place.
        </p>
        <p>This is the all you will need</p>
        <StyledButton bg={({ theme }) => theme.color.pink}>
          Experience it now
        </StyledButton>
      </article>
    </StyledHeader>
  );
}

export default Header;

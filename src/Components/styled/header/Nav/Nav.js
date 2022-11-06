import React from "react";
import { Navbar } from "./Nav.styled";
// import Logo from "../../../Logo";
import { StyledButton } from "../../Button/Button.styled";

function Nav() {
  return (
    <Navbar>
      {/* <Logo /> */}
      <StyledButton color="#111" bg="white">
        Experience it
      </StyledButton>
    </Navbar>
  );
}

export default Nav;

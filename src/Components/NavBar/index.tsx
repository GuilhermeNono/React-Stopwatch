import React from "react";

import { ComponentBlue, Container, ComponentWhite } from "./styles";

const NavBar: React.FC = () => {
  return (
    <Container>
      <ComponentBlue>
        <ComponentWhite>
            Laps
        </ComponentWhite>
      </ComponentBlue>
    </Container>
  );
};

export default NavBar;

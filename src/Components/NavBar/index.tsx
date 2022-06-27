import React from "react";
import Lap from "../Lap";

import { ComponentBlue, Container, ComponentWhite, LapInfo } from "./styles";

interface Props {
  LapTimeArray:string[];
}



const NavBar = ({LapTimeArray}:Props) => {
  
  return (
    <Container>
      <ComponentBlue>
        <ComponentWhite>
          <LapInfo>
            <Lap LapTimeArray={LapTimeArray}/>
          </LapInfo>
        </ComponentWhite>
      </ComponentBlue>
    </Container>
  );
};

export default NavBar;

import React from 'react';

import { Container,Item } from './styles';

interface Props {
  LapTimeArray: React.ReactNode[];
  
}



const Lap: React.FC<Props> = ({LapTimeArray}) => {
  return (
    <Container>
      {LapTimeArray.map((element, index) => (
            <Item key={index}>{element}</Item>
          ))}
    </Container>
  );
}

export default Lap;
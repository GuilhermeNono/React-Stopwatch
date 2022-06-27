import React from 'react';

import { Container, Circle, Time} from './styles';

interface Props {
  time:number;
}

const Stopwatch = ({time}:Props) => {
  return (
    <Container>
        <Circle>
            <Time>
              <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time/10) % 100)).slice(-2)}</span>
            </Time>
        </Circle>
    </Container>
  );
}

export default Stopwatch;
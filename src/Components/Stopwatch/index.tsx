import React from 'react';

import { Container, Circle, Time} from './styles';

const Stopwatch: React.FC = () => {
  return (
    <Container>
        <Circle>
            <Time>00:00:00:00</Time>
        </Circle>
    </Container>
  );
}

export default Stopwatch;
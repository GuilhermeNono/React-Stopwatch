import React from 'react';
import Buttons from '../Buttons';
import Stopwatch from '../Stopwatch';

import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
        <Stopwatch />
        <Buttons />
    </Container>
  );
}

export default MainContent;
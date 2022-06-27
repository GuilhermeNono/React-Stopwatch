import React from 'react';

import { Container, SecondaryButtons, PrimaryButtons } from './styles';

const Buttons: React.FC = () => {
  return (
    <Container>
        <SecondaryButtons>Stop</SecondaryButtons>
        <PrimaryButtons bigButton>Start</PrimaryButtons>
        <PrimaryButtons bigButton>Pause</PrimaryButtons>
        <SecondaryButtons>Lap</SecondaryButtons>
    </Container>
  );
}

export default Buttons;
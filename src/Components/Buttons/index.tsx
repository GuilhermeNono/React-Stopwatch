import React from 'react';

import { Container, SecondaryButtons, PrimaryButtons } from './styles';

interface Props {
  setTimerOn:any;
  resetFunc:() => void;
  addlapFunc:() => void;
}

const Buttons = ({addlapFunc,resetFunc,setTimerOn}:Props) => {
  return (
    <Container>
        <SecondaryButtons onClick={() => resetFunc()}>Stop</SecondaryButtons>
        <PrimaryButtons onClick={() => setTimerOn(true)} bigButton>Start</PrimaryButtons>
        <PrimaryButtons onClick={() => setTimerOn(false)} bigButton>Pause</PrimaryButtons>
        <SecondaryButtons onClick={() => addlapFunc()}>Lap</SecondaryButtons>
    </Container>
  );
}

export default Buttons;
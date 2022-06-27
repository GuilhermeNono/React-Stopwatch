import React from 'react';
import Buttons from '../Buttons';
import Stopwatch from '../Stopwatch';

import { Container } from './styles';

interface Props {
  setTimerOn:any;
  time:number;
  addLap:() => void;
  resetTimer:() => void;
}

const MainContent = ({resetTimer,addLap,time,setTimerOn}:Props) => {
  return (
    <Container>
        <Stopwatch time={time}/>
        <Buttons addlapFunc={addLap} resetFunc={resetTimer} setTimerOn={setTimerOn}/>
    </Container>
  );
}

export default MainContent;
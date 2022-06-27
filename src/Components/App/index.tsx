import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Style/GlobalStyles";
import MainContent from "../MainContent";
import NavBar from "../NavBar";

function App() {
  let [time, setTime] = useState<number>(0);
  let [timerOn, setTimerOn] = useState<boolean>(false);
  let [lapsArray, setLapsArray] = useState(["00:00:00:00"]);

  function resetTimer() {
    if (timerOn) {
      setTimerOn(false);
    }
    setTime(0);
    setLapsArray(["00:00:00:00"])
  }

  function addLap() {
    setLapsArray((prevLap) => [
      ...prevLap,
      `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
    ${("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
${("0" + Math.floor((time / 10) % 100)).slice(-2)}`,
    ]);
  }

  useEffect(() => {
    var interval: any = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <NavBar LapTimeArray={lapsArray} />
      <MainContent
        addLap={addLap}
        resetTimer={resetTimer}
        setTimerOn={setTimerOn}
        time={time}
      />
      <GlobalStyles />
    </div>
  );
}

export default App;

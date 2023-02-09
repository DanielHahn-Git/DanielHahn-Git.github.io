"use strict";

const { useState, useEffect } = React;



function App() {
  return (
    <CountDown />
  );
}
/* function App() {
    return (
        <React.StrictMode>
            <CountDown />
        </React.StrictMode>
    );
} */
//var count = 120;
var stoped = true;
//var countingSession = true;

function CountDown() {
  const [sessionLength, setSessionLength] = useState(1);
  const [breakLength, setBreakLength] = useState(2);
  const [contador, setContador] = useState(60);
  const [countLabel, setCountLabel] = useState(true);
  const [isRun, setIsRun] = useState(false);



  function printContador(contador) {
    let num = contador;
    let min = Math.floor(num / 60);
    let seg = num % 60;
    return `${min}:${seg < 10 ? "0" + seg : seg}`;
  }

  function printCountLabel(countLabel) {
    if (countLabel) {
      return "Session";
    } else {
      return "Break";
    }
  }
  
  function printIsRun(isRun) {
    if (isRun) {
      return "Stop";
    } else {
      return "Start";
    }
  }

  function contagem() {
    console.log('1 inicio contagem  ' + contador);
    let num = contador;
    if (isRun) {
    console.log('2 inicio isRun true  ' + contador);
      let intervalId = setInterval(() => {
    console.log('3 inicio setInterval  ' + contador);
        if (stoped) {
          clearInterval(intervalId);
          console.log('★ stoped');
        } 
        if (num === 0) {
          //setContador(num);
          console.log('4 if num === 0  ' + contador);
          clearInterval(intervalId);
          console.log('5 after clearInterval  ' + contador);
        } else {
          console.log('6 inicio else num--  ' + contador);
          num--;
          setContador(num);
          console.log('7 fim else num--  ' + contador);
        }
          console.log('8 fim setInterval  ' + contador);
      }, 100);
          console.log('9 fim if isRun true  ' + contador);
    }
          console.log('10 fim contagem  ' + contador);
  }

  const funClick = {
    para() {
      console.log('para isRun ' + isRun);
      console.log('para stoped ' + stoped);
      setIsRun(!isRun);
      stoped = !stoped;
      console.log('1 para isRun ' + isRun);
      console.log('1 para stoped ' + stoped);
      
/*      if (contador <= 0) return (stoped = true);
      stoped = !stoped;
      if (contador > 0) return contagem();*/
    },
    reset() {
      stoped = true;
      setCountLabel(true);
      setContador(60);
      setSessionLength(1);
      setBreakLength(1);
      setIsRun(false)
    },
    decSes() {
      if (stoped === false) return;
      sessionLength > 1 ?
        setSessionLength(sessionLength - 1) :
        setSessionLength(1);
    },
    incSes() {
      if (stoped === false) return;
      sessionLength < 60 ?
        setSessionLength(sessionLength + 1) :
        setSessionLength(60);
    },
    decBreak() {
      if (stoped === false) return;
      breakLength > 1 ? setBreakLength(breakLength - 1) : setBreakLength(1);
    },
    incBreak() {
      if (stoped === false) return;
      breakLength < 60 ? setBreakLength(breakLength + 1) : setBreakLength(60);
    },
  };
  const para = funClick.para;
  const reset = funClick.reset;
  const decSes = funClick.decSes;
  const incSes = funClick.incSes;
  const decBreak = funClick.decBreak;
  const incBreak = funClick.incBreak;

  useEffect(() => {
    countLabel ? setContador(sessionLength * 60) : setContador(breakLength * 60);
  }, [sessionLength, breakLength, countLabel]);
  
  useEffect(() => {
    console.log(isRun + '  useEffect isRun state');
    isRun && contagem();
  }, [isRun]);
  

  const getClick = (e) => {
    let key = e.target.value;
    key === "Start" ?
      para() :
      key === "Reset" ?
      reset() :
      key === "decSes" ?
      decSes() :
      key === "incSes" ?
      incSes() :
      key === "decBreak" ?
      decBreak() :
      key === "incBreak" ?
      incBreak() :
      console.log("getClick");
  };
  console.log(`${sessionLength}  sessionLength`);
  console.log(`${breakLength}  breakLength`);
  console.log(`${contador} contador state`);
  console.log(`${printContador(contador)} contador functiom`);
  console.log(`${countLabel} countLabel state`);
  console.log(`${printCountLabel(countLabel)} countLabel functiom`);
  console.log(`${isRun} isRun`);
  console.log(`${stoped} stoped`);
  return (
    <div className="frame">
            <div className="header">
                <h1 className="border">Pomodoro Timer</h1>
            </div>
            <div className="countdown">
                <div className="count-title-div">
                    <h3 id="timer-label" className="count-title">{printCountLabel(countLabel)}</h3>
                </div>
                <div className="count-div">
                    <span id="time-left" className="count-span">{printContador(contador)}</span>
                </div>
            </div>
            <div className="control-count-div">
                <button
                    id="start_stop"
                    className="play_pause ctrl-count"
                    type="button"
                    value={"Start"}
                    onClick={getClick}
                >
                    {printIsRun(isRun)}
                </button>
                <button
                    id="reset"
                    className="reset ctrl-count"
                    type="button"
                    value={"Reset"}
                    onClick={getClick}
                >
                    Reset
                </button>
            </div>
            <div className="ctrl">
                <div className="inc-dec">
                    <div className="time-title">
                        <h4 id="session-label">Session Length</h4>
                    </div>
                    <div className="ctrl-time container">
                        <div className="view item">
                            <span id="session-length" className="skd-time">{sessionLength}</span>
                        </div>
                        <button
                            id="session-decrement"
                            type="button"
                            className="dec item"
                            title="dec"
                            value={"decSes"}
                            onClick={getClick}
                        >
                            -
                        </button>
                        <button
                            id="session-increment"
                            type="button"
                            className="inc item"
                            title="inc"
                            value={"incSes"}
                            onClick={getClick}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="inc-dec">
                    <div className="time-title">
                        <h4 id="break-label">Break Length</h4>
                    </div>
                    <div className="ctrl-time container">
                        <div className="view item">
                            <span id="break-length" className="skd-time">{breakLength}</span>
                        </div>
                        <button
                            id="break-decrement"
                            type="button"
                            className="dec item"
                            title="dec"
                            value={"decBreak"}
                            onClick={getClick}
                        >
                            -
                        </button>
                        <button
                            id="break-increment"
                            type="button"
                            className="inc item"
                            title="inc"
                            value={"incBreak"}
                            onClick={getClick}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
}

const element = <App />;
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(element);
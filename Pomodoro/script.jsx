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

function CountDown() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [contador, setContador] = useState(1500);
  const [countLabel, setCountLabel] = useState(true);
  const [isRun, setIsRun] = useState(false);
  const [reset, setReset] = useState(true)
  

  /* useEffect(() => {
    if (countLabel === true) {
      setContador(contador => sessionLength * 60);
    }
    return () => {
      //console.log('session');
    }
  }, [sessionLength, countLabel]);
  
  useEffect(() => {
    if (countLabel === false) {
      setContador(contador => breakLength * 60);
    }
    return () => {
      //console.log('break');
    }
  }, [breakLength, countLabel]); */

  useEffect(() => {
    if (isRun) {
     // console.log(`${contador}  contador 1`);
      const intervalId = setInterval(() => {
       // console.log(`${contador}  contador 2`);
        setContador(contador => contador - 1);
        console.log(`${contador}  contador 3`);
      }, 100,[contador]);
     // console.log(`${contador}  contador 4`);
      return () => {
        clearInterval(intervalId);
      //console.log('session');
      }
    }
  }, [isRun]);

  useEffect(() => {
    if (contador === 0) {
      //setIsRun(!isRun);
      setCountLabel(!countLabel);
    }
    return () => {
     // console.log('contador');
    }
  }, [contador])
  

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

  const funClick = {
    para() {
      setIsRun(!isRun);
    },
    reset() {
      setSessionLength(25);
      setBreakLength(5);
      setContador(1500);
      setIsRun(false);
      setCountLabel(true);
    },
    decSes() {
      if (isRun === true) return;
      sessionLength > 1 ?
        setSessionLength(sessionLength - 1) :
        setSessionLength(1);
    },
    incSes() {
      if (isRun === true) return;
      sessionLength < 60 ?
        setSessionLength(sessionLength + 1) :
        setSessionLength(60);
    },
    decBreak() {
      if (isRun === true) return;
      breakLength > 1 ? setBreakLength(breakLength - 1) : setBreakLength(1);
    },
    incBreak() {
      if (isRun === true) return;
      breakLength < 60 ? setBreakLength(breakLength + 1) : setBreakLength(60);
    },
  };
  //const para = funClick.para;
  //const reset = funClick.reset;
  const decSes = funClick.decSes;
  const incSes = funClick.incSes;
  const decBreak = funClick.decBreak;
  const incBreak = funClick.incBreak;

  
  //console.log(`${sessionLength}  sessionLength`);
  //console.log(`${breakLength}  breakLength`);

  console.log(`${contador} contador state`);
  //console.log(`${countLabel} countLabel state`);
  //console.log(`${printCountLabel(countLabel)} countLabel function`);
  //console.log(`${isRun} isRun`);
  return (
    <div className="frame">
            <div className="header">
                <h1 className="border">Pomodoro Timer</h1>
            </div>
            <div className="countdown">
                <div className="count-title-div">
                    <h3 id="timer-label" className="count-title">{countLabel ? "Session" : "Break"}</h3>
                </div>
                <div className="count-div">
                    <span id="time-left" className="count-span">{`${Math.floor(contador / 60) < 10 ? "0" + Math.floor(contador / 60) : Math.floor(contador / 60) }:${contador % 60 < 10 ? "0" + contador % 60 : contador % 60}`}</span>
                </div>
            </div>
            <div className="control-count-div">
                <button
                    id="start_stop"
                    className="play_pause ctrl-count"
                    type="button"
                    value={"Start"}
                    onClick={() => setIsRun(!isRun)}
                >
                    {isRun ? "Stop" : "Start"}
                </button>
                <button
                    id="reset"
                    className="reset ctrl-count"
                    type="button"
                    value={"Reset"}
                    onClick={() => {
                      setSessionLength(25);
                      setBreakLength(5);
                      setContador(1500);
                      setCountLabel(true);
                      setIsRun(false);
                    }}
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
                            onClick={() => {
                              if (isRun === true) return;
                              sessionLength > 1 ?
                              setSessionLength(sessionLength => sessionLength - 1) :
                              setSessionLength(sessionLength => 1);
                              if (countLabel === true) {
                              setContador(contador => (sessionLength - 1) * 60);
                              }
                            }}
                        >
                            -
                        </button>
                        <button
                            id="session-increment"
                            type="button"
                            className="inc item"
                            title="inc"
                            value={"incSes"}
                            onClick={() => {
                              if (isRun === true) return;
                              sessionLength < 60 ?
                              setSessionLength(sessionLength => sessionLength  + 1) :
                              setSessionLength(sessionLength => 60);
                              if (countLabel === true) {
                                setContador(contador => (sessionLength + 1) * 60);
                                }
                            }}
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
                            onClick={() => {
                              if (isRun === true) return;
                              breakLength > 1 ?
                              setBreakLength(breakLength => breakLength - 1) :
                              setBreakLength(breakLength => 1);
                              if (countLabel === false) {
                              setContador(contador => (breakLength - 1) * 60);
                              }
                            }}
                        >
                            -
                        </button>
                        <button
                            id="break-increment"
                            type="button"
                            className="inc item"
                            title="inc"
                            value={"incBreak"}
                            onClick={() => {
                              if (isRun === true) return;
                              breakLength < 60 ?
                              setBreakLength(breakLength => breakLength  + 1) :
                              setBreakLength(breakLength => 60);
                              if (countLabel === false) {
                                setContador(contador => (breakLength + 1) * 60);
                                }
                            }}
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



/* 
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
} */
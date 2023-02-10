"use strict";

const { useState, useEffect, useRef } = React;



function App() {
    return (
        <CountDown />
    );
}

const CountDown = () => {
    const [breakLength, setBreakLength] = useState(3);
    const [sessionLength, setSessionLength] = useState(2);
    const [timerState, setTimerState] = useState("stopped");
    const [timerType, setTimerType] = useState("Session");
    const [timer, setTimer] = useState(60);
    const [play, setPlay] = useState(false);
    const audioRef = useRef(null);

    


    
/*     const handlePlay = () => {
        if (play) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!play);
    }
 */

    /* useEffect(() => {
      if (timerType === true) {
        setTimer(timer => sessionLength * 60);
      }
      return () => {
        //console.log('session');
      }
    }, [sessionLength, timerType]);
    
    useEffect(() => {
      if (timerType === false) {
        setTimer(timer => breakLength * 60);
      }
      return () => {
        //console.log('break');
      }
    }, [breakLength, timerType]); */

    /* useEffect(() => {
        if (timerState) {
            // console.log(`${timer}  timer 1`);
            const intervalId = setInterval(() => {
                // console.log(`${timer}  timer 2`);
                // console.log(`${timer}  timer 2`);
                let countAux = timer;
                console.log(`${countAux}  countAux 2`);
                setTimer(timer => timer - 1);
                console.log(`${timer}  timer 3`);
            }, 100, [timer]);
            // console.log(`${timer}  timer 4`);
            return () => {
                clearInterval(intervalId);
                //console.log('session');
            }
        }
    }, [timerState]);
 */
/*     useEffect(() => {
        if (timer === 0) {
            setTimerState(!timerState);
            setTimerType(!timerType);
        }
        return () => {
            // console.log('timer');
        }
    }, [timer])

 */
    //console.log(`${sessionLength}  sessionLength`);
    //console.log(`${breakLength}  breakLength`);

    console.log(`${timer} timer state`);
    //console.log(`${timerType} timerType state`);
    //console.log(`${printCountLabel(timerType)} timerType function`);
    //console.log(`${timerState} timerState`);
    return (
        <div className="frame">
            <div className="header">
                <h1 className="border">Pomodoro Timer</h1>
            </div>
            <div className="countdown">
                <div className="count-title-div">
                    <h3 id="timer-label" className="count-title">{timerType ? "Session" : "Break"}</h3>
                    <audio ref={audioRef} src="./beep.mp3" controls={false}></audio>
                </div>
                <div className="count-div">
                    <span id="time-left" className="count-span">{`${Math.floor(timer / 60) < 10 ? "0" + Math.floor(timer / 60) : Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" + timer % 60 : timer % 60}`}</span>
                </div>
            </div>
            <div className="control-count-div">
                <button
                    id="start_stop"
                    className="play_pause ctrl-count"
                    type="button"
                    value={"Start"}
                    onClick={() => setTimerState(!timerState)}>
                    {timerState ? "Stop" : "Start"}
                </button>
                <button
                    id="reset"
                    className="reset ctrl-count"
                    type="button"
                    value={"Reset"}
                    onClick={() => {
                        setSessionLength(2);
                        setBreakLength(3);
                        setTimer(60);
                        setTimerType(true);
                        setTimerState(false);
                    }}>Reset
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
                            onClick={() => {
                                if (timerState === true) return;
                                sessionLength > 1 ?
                                    setSessionLength(sessionLength => sessionLength - 1) :
                                    setSessionLength(sessionLength => 1);
                                if (timerType === true) {
                                    timer > 60 ? setTimer(timer => timer - 60) : setTimer(timer => 60);
                                }
                            }}>-</button>
                        <button
                            id="session-increment"
                            type="button"
                            className="inc item"
                            title="inc"
                            onClick={() => {
                                if (timerState === true) return;
                                sessionLength < 60 ?
                                    setSessionLength(sessionLength => sessionLength + 1) :
                                    setSessionLength(sessionLength => 60);
                                if (timerType === true) {
                                    timer < 3600 ? setTimer(timer => timer + 60) : setTimer(timer => 3600);
                                }
                            }}>+</button>
                    </div>
                </div>
                <div className="inc-dec">
                    <div className="time-title">
                        <h4 id="break-label">Break Length</h4>
                    </div>
                    <div className="ctrl-time container">
                        <div className="view item"><span id="break-length" className="skd-time">{breakLength}</span>
                        </div>
                        <button
                            id="break-decrement"
                            type="button"
                            className="dec item"
                            title="dec"
                            onClick={() => {
                                if (timerState === true) return;
                                breakLength > 1 ?
                                    setBreakLength(breakLength => breakLength - 1) :
                                    setBreakLength(breakLength => 1);
                                if (timerType === false) {
                                    timer > 60 ? setTimer(timer => timer - 60) : setTimer(timer => 60);
                                }
                            }}>-</button>
                        <button
                            id="break-increment"
                            type="button"
                            className="inc item"
                            title="inc"
                            onClick={() => {
                                if (timerState === true) return;
                                breakLength < 60 ?
                                    setBreakLength(breakLength => breakLength + 1) :
                                    setBreakLength(breakLength => 60);
                                if (timerType === false) {
                                    timer < 3600 ? setTimer(timer => timer + 60) : setTimer(timer => 3600);
                                }
                            }}>+</button>
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

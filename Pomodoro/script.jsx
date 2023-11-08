"use strict";

const {
  useState,
  useEffect,
  useRef
} = React;


function App() {
  return (
    <CountDown />
  );
}



const CountDown = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerState, setTimerState] = useState("stopped");
  const [timerType, setTimerType] = useState("Session");
  const [timer, setTimer] = useState(1500);
  const [intervalId, setIntervalId] = useState("");
  //const [play, setPlay] = useState(false);
  const audioRef = useRef(null);
  
  
  const setBreakTime = (e) => {
    if (timerState === 'stopped') {
      let time = breakLength;
      let op = e.target.value;
      if (op === '-') {
        setBreakLength(breakLength => breakLength <= 1 ?
          breakLength = 1 :
          breakLength - 1);
          time <= 1 ? 
          time = 1 : 
          time = time - 1;
      }
      if (op === '+') {
        setBreakLength(breakLength => breakLength >= 60 ? breakLength = 60 : breakLength + 1);
          time >= 60 ? 
          time = 60 : 
          time = time + 1;
      }
      if (timerType === 'Break') {
        setLengthTime(time);
      }
    }
  }
  const setSessionTime = (e) => {
    if (timerState === 'stopped') {
      let time = sessionLength;
      let op = e.target.value;
      if (op === '-') {
        setSessionLength(sessionLength => sessionLength <= 1 ? sessionLength = 1 : sessionLength - 1);
          time <= 1 ? 
          time = 1 : 
          time = time - 1;
      }
      if (op === '+') {
        setSessionLength(sessionLength => sessionLength >= 60 ? sessionLength = 60 : sessionLength + 1);
          time >= 60 ? 
          time = 60 : 
          time = time + 1;
      }
      if (timerType === 'Session') {
        setLengthTime(time);
      }
    }
  }
  
  const setLengthTime = (time) => {
    setTimer(timer => 60 * time);
  }
  
  const timerControl = () => {
    console.log(timerState);
    if (timerState === "stopped") {
      setTimerState(timerState => "running");
      countDown();
    }
    if (timerState === "running") {
      setTimerState(timerState => "stopped");
      setIntervalId(intervalId => clearInterval(intervalId));
    }
  }

  const countDown = () => {
    setIntervalId(intervalId => setInterval(() => {
      decrementTime();
    }, 1000))
  };

  const decrementTime = () => {
    setTimer(timer => timer - 1);
  };

  const timerTypeControl = () => {
    var time = timer;
    beep(time);
    time < 0 && (setIntervalId(intervalId => clearInterval(intervalId)),
    "Session" === timerType ? (changeTimerType(60 * breakLength, "Break"), countDown()) : (changeTimerType(60 * sessionLength, "Session"), countDown()));    
  };

  const changeTimerType = (e, t) => {
    setTimer(timer => e);
    setTimerType(timerType => t);
  };
  
  const beep = (time) => {
    0 === time && audioRef.current.play();
  };
  
  const reset = () => {
    setIntervalId(intervalId => clearInterval(intervalId));
    setBreakLength(breakLength => 5);
    setSessionLength(sessionLength => 25);
    setTimerState(timerState => "stopped");
    setTimerType(timerType => "Session");
    setTimer(timer => 1500);
    setIntervalId(intervalId => "");
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };
    
  const printTime = () => {
    if (timer < 0) return "00:00";
    var m = Math.floor(timer / 60),
      s = timer - 60 * m;
    return (m = m < 10 ? "0" + m : m) + ":" + (s = s < 10 ? "0" + s : s)
  }; 


  return (
    <div className="frame">
      <div className="header">
      <h1 className="border">Pomodoro Timer</h1>
      </div>
      <div className="countdown">
      <audio id="beep" ref={audioRef} src="beebeebee.mp3" controls={false} 
      ></audio>
      <div className="count-title-div">
      <h3 id="timer-label" className="count-title">{timerType}</h3>
      </div>
      <div className="count-div">
      <span id="time-left" className="count-span" onChange={timerTypeControl()}>{printTime()}</span>
      </div>
      </div>
      <div className="control-count-div">
      <button
      id="start_stop"
      className="play_pause ctrl-count"
      type="button"
      onClick={timerControl}>{timerState == "stopped" ? "Start" : "Stop"}
      </button>
      <button
      id="reset"
      className="reset ctrl-count"
      type="button"
      onClick={reset}
      >Reset
      </button>
      </div>
      <div className="ctrl">
      <div className="inc-dec">
      <div className="time-title">
      <h4 id="session-label">Session Length</h4>
      </div>
      <div className="ctrl-time container">
      <div className="view item">
      <span id="session-length" className="skd-time">{
      sessionLength}
      </span>
      </div>
      <button
      id="session-decrement"
      type="button"
      className="dec item"
      title="dec"
      value={'-'}
      onClick={setSessionTime}
      >-</button>
      <button
      id="session-increment"
      type="button"
      className="inc item"
      title="inc"
      value={'+'}
      onClick={setSessionTime}
      >+</button>
      </div>
      </div>
      <div className="inc-dec">
      <div className="time-title">
      <h4 id="break-label">Break Length</h4>
      </div>
      <div className="ctrl-time container">
      <div className="view item"><span id="break-length" className="skd-time">{
      breakLength}
      </span>
      </div>
      <button
      id="break-decrement"
      type="button"
      className="dec item"
      title="dec"
      value={'-'}
      onClick={setBreakTime}
      >-</button>
      <button
      id="break-increment"
      type="button"
      className="inc item"
      title="inc"
      value={'+'}
      onClick={setBreakTime}
      >+</button>
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

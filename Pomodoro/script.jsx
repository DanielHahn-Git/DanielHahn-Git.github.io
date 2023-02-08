//"use strict";

const { useState, useEffect } = React;

var count;
var pare = true;
var countingSession = true;

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
    const [sessionLength, setSessionLength] = useState(1);
    const [breakLength, setBreakLength] = useState(5);
    const [contador, setContador] = useState(printContador());
    const [countLabel, setCountLabel] = useState(printCountLabel());

    function printContador() {
        let min = Math.floor(count / 60);
        let seg = count % 60;
        return `${min}:${seg < 10 ? "0" + seg : seg}`;
    }

    function printCountLabel() {
        if (countingSession === true) {
            return "Session";
        } else {
            return "Break";
        }
    }

    function contagem() {
        if (pare === false) {
            let intervalId = setInterval(() => {
                if (pare) {
                    clearInterval(intervalId);
                    setContador(printContador());
                } else {
                    count--;
                    setContador(printContador());
                }
                if (count === 0) {
                    countingSession
                        ? (count = breakLength * 60)
                        : (count = sessionLength * 60);
                    countingSession = !countingSession;
                    setCountLabel(printCountLabel());
                    //console.log("pos count = 0, pre clearInterval");
                    //clearInterval(intervalId);
                    //console.log("pos clearInterval, pre printContador");
                    setContador(printContador());
                    //console.log("pos printContador, pre pare = true");
                    //pare = true;
                    //console.log("pos pare = true");
                }
            }, 100);
        }
    }

    const funClick = {
        para() {
            if (count <= 0) return (pare = true);
            pare = !pare;
            if (count > 0) return contagem();
        },
        reset() {
            if (pare === false) return;
            setBreakLength(5);
            setSessionLength(25);
            count = 1500;
            setContador(printContador());
        },
        decSes() {
            if (pare === false) return;
            sessionLength > 1
                ? setSessionLength(sessionLength - 1)
                : setSessionLength(1);
        },
        incSes() {
            if (pare === false) return;
            sessionLength < 60
                ? setSessionLength(sessionLength + 1)
                : setSessionLength(60);
        },
        decBreak() {
            if (pare === false) return;
            breakLength > 1 ? setBreakLength(breakLength - 1) : setBreakLength(1);
        },
        incBreak() {
            if (pare === false) return;
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
        if (countingSession) {
            count = sessionLength * 60;
            setContador(printContador());
        }
    }, [sessionLength]);

    useEffect(() => {
        if (countingSession === false) {
            count = breakLength * 60;
            setContador(printContador());
        }
    }, [breakLength]);

    const getClick = (e) => {
        let key = e.target.value;
        console.log(`${key}  getClick`);
        key === "Start"
            ? para()
            : key === "Reset"
                ? reset()
                : key === "decSes"
                    ? decSes()
                    : key === "incSes"
                        ? incSes()
                        : key === "decBreak"
                            ? decBreak()
                            : key === "incBreak"
                                ? incBreak()
                                : console.log("getClick");
    };

    console.log("render");
    console.log(count + "  count");
    console.log(pare + "  pare");
    console.log(contador + "  contador");
    return (
        <div className="frame">
            <div className="header">
                <h1 className="border">Pomodoro Timer</h1>
            </div>
            <div className="countdown">
                <div className="count-title-div">
                    <h3 className="count-title">{countLabel}</h3>
                </div>
                <div className="count-div">
                    <span className="count-span">{contador}</span>
                </div>
            </div>
            <div className="control-count-div">
                <button
                    id="play_pause"
                    className="play_pause ctrl-count"
                    type="button"
                    value={"Start"}
                    onClick={getClick}
                >
                    Start
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
                        <h4>Session Length</h4>
                    </div>
                    <div className="ctrl-time container">
                        <div className="view item">
                            <span className="skd-time">{sessionLength}</span>
                        </div>
                        <button
                            type="button"
                            className="dec item"
                            title="dec"
                            value={"decSes"}
                            onClick={getClick}
                        >
                            -
                        </button>
                        <button
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
                        <h4>Break Length</h4>
                    </div>
                    <div className="ctrl-time container">
                        <div className="view item">
                            <span className="skd-time">{breakLength}</span>
                        </div>
                        <button
                            type="button"
                            className="dec item"
                            title="dec"
                            value={"decBreak"}
                            onClick={getClick}
                        >
                            -
                        </button>
                        <button
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

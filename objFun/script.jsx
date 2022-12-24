const { useState } = React;
const options = math.config({ parenthesis: 'all', implicit: 'show' });
const format = {
    lowerExp: -5,
    upperExp: 5,
    precision: 14,
    truncate: 14
}

const reg = {
    dot(arg) {
        if(/\./.test(arg)){
            return true;
        }
    },
    endDot(arg) {
        if(/(\.)$/.test(arg)){
            return true;
        }
    },
    numOp(arg) {
        if(/(\d+)(\+|\-|\*|\/)$/.test(arg)){
            return true;
        }
    },
    op(arg) {
        if (/(\+|\-|\*|\/)$/.test(arg)) {
            return true;
        }
    },
    minus(arg) {
        if(/(\d*)(\+|\-|\*|\/)(\-)$/.test(arg)){
            return true;
        }
    },
    endNum(arg) {
        if(/(\d)$/.test(arg)){
            return true;
        }
    },
    zero(arg) {
        if(/^(\-0{1}|0{1})$/.test(arg)){
            return true;
        }
    },
    zeroDot(arg) {
        if (/^(\-0\.{1}|0\.{1})$/.test(arg)){
            return true;
        }
    }
}

const dot = reg.dot;
const endDot = reg.endDot;
const numOp = reg.numOp;
const op = reg.op;
const minus = reg.minus;
const endNum = reg.endNum;
const zero = reg.zero;
const zeroDot = reg.zeroDot;


var str = "0";
var exp = "";



function Calculator() {
    const [quest, setQuest] = useState("0");
    const [answer, setAnswer] = useState("");
    const [title, setTitle] = useState("Calculator");
    
    const func = {
        clear() {
            setQuest("0");
            setAnswer("");
            setTitle("Calculator");
            str = "0";
            exp = "";
        },
        add(arg) {
            str = str + arg;
            exp = exp + arg;
            console.log(str);
            setQuest(str);
            setTitle("Calculator");
        },
        addOp(arg) {
            str = str + arg;
            exp = "";
            console.log(str);
            setQuest(str);
            setTitle("Calculator");
        }
    }
    
    const clear = func.clear;
    const add = func.add;
    const addOp = func.addOp;
    
    const reduce = function (action, value) {
        
        switch (action) {
            case "numb":
                try {
                    if (exp === "0" && value === "0") throw "try a different number";
                    if (str === "0") {
                        str = value;
                        exp = value;
                        return setQuest(str);
                    } else {
                        if (exp === "0") {
                            exp = "";
                            str = str.slice(0, -1);
                        }
                        return add(value);
                    }
                } catch (e) {
                    console.log(e.toString());
                    return setTitle(e);
                }
            
            case "dot":
                try {
                    if (dot(exp)) throw "is already decimal";
                    if (op(str)) {
                        str = str + "0";
                    };
                    if (exp === "") exp = "0";
                    return add(value);
                } catch (e) {
                    console.log(e.toString());
                    return setTitle(e);
                }
            
            case "op":
                try {
                    if (/[1-9]/.test(exp) == false) throw "try a valid number"
                    if (op(str) || endDot(str)) {
                        str = str.slice(0, -1);
                    }
                    return addOp(value);
                } catch (e) {
                    console.log(e.toString());
                    return setTitle(e);
                }
                
            
            case "clear":
               return clear();
        }
    }
    
    const getClick = function (e) {
        let click = e.target.value;
        let key = null;
        endNum(click) && ( key = "numb" );
        op(click) && ( key = "op" );
        endDot(click) && ( key = "dot" );
        click === "C" && ( key = "clear" );
        click === "BS" && ( key = "BS" );
        click === "PWR" && ( key = "PWR" );
        click === "%" && ( key = "cent" );
        click === "=" && ( key = "eq" );
        console.log(key);
        reduce(key, click);
    }

    
    console.log(`${quest} quest is ` + typeof quest);
    console.log(`${str} str is ` + typeof str);
    console.log(`${exp} exp is ` + typeof exp);
    return (
        <div className="frame">
            <div className="main-calc">
                <div className="screen">
                    <div className="calculator-title">
                    <input className="title" value={title} title="display" type="text" readOnly />
                    </div>
                    <div className="screens">
                        <div className="screen-question">
                            <input className="output output-question" value={quest} title="display" type="text" readOnly />
                        </div>
                        <div className="screen-answer">
                            <input className="output output-answer" title="display" type="text" readOnly />
                        </div>
                    </div>
                </div>
                <div className="button-grid">
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"C"}>C</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"BS"}>BS</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"%"}>%</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"/"}>÷</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"7"}>7</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"8"}>8</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"9"}>9</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"*"}>*</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"4"}>4</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"5"}>5</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"6"}>6</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"-"}>-</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"1"}>1</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"2"}>2</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"3"}>3</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"+"}>+</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"PWR"}>PWR</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnW" value={"0"}>0</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"."}>.</button>
                    <button type="button" onClick={getClick} title="btn" className="btnG btnO" value={"="}>=</button>
                </div>
            </div>
        </div>
    );
}


const element = <Calculator />;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);

/*

if (op === "-") {
    str = str + op;
    exp = "-";
    return updateQuest(str);
} */



/* try {
    eva(quest);
}
catch (error) {
    console.log(error.toString());
    // outputs:  TypeError: Unexpected type of argument.
    //           Expected: number or boolean, actual: string, index: 1.
} */


/* function check(val) {
    console.log('check');
    let parsed = null;
    try {
        updateQuest(parsed = math.parse(val));
        updateAnswer(math.format(parsed.compile().evaluate()));
    }
    catch (error) {
        console.log(error.message);
    }
    console.log('check2');
}
 */

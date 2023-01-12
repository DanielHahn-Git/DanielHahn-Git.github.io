const { useState, useEffect, useRef } = React;

const options = math.config({
  parenthesis: "all",
  implicit: "show",
  lowerExp: -9,
  upperExp: 9,
  precision: 15,
  //truncate: 15
});
const formatOpt = {
  lowerExp: -9,
  upperExp: 9,
  precision: 15,
  //truncate: 15,
};

const idRoot = document.getElementById("root");
const idBody = document.getElementById("body");

var str = "0";
var exp = "0";
var first = 120;

var docClientWidth = document.documentElement.clientWidth;
var docClientHeight = document.documentElement.clientHeight;
var bodyClientWidth = idBody.clientWidth;
var bodyClientHeight = idBody.clientHeight;
var fontSize = (bodyClientWidth / 100) * 10;


function Calculator() {
  const titleRef = useRef();
  const questRef = useRef();
  const parsedRef = useRef();
  const answerRef = useRef();

  const [title, setTitle] = useState("Calculator");
  const [quest, setQuest] = useState("0");
  const [parsed, setParsed] = useState("");
  const [answer, setAnswer] = useState("");
  const [display, setDisplay] = useState(false);
  const [land, setLand] = useState(false);

  //------------------------------------------------------------------------------------------------------

  const sizes = {
    getDocSize() {
        console.log('getDocSize');
        docClientWidth = document.documentElement.clientWidth;
        docClientHeight = document.documentElement.clientHeight;
        let div = docClientHeight / docClientWidth;
        if (div > 1.923) {
            return smallWidth();
        }
        if (docClientHeight < 402) {
            return littleHeight();
        }
        if (docClientHeight > 402) {
            setLand(false);
        }
        bodyClientWidth = idBody.clientWidth;
        bodyClientHeight = idBody.clientHeight;
        setRootSize();
    },
    setRootSize() {
        fontSize = (bodyClientWidth / 100) * 10;
        idBody.style.setProperty('--fontSize', fontSize + 'px');
        idRoot.style.setProperty('--widthRoot', '46.8vh');
        idRoot.style.setProperty('--heightRoot', '90vh');
        idRoot.style.setProperty('--minWidthRoot', '188px');
        idRoot.style.setProperty('--maxWidthRoot', '465px');
        idRoot.style.setProperty('--minHeightRoot', '362px');
        idRoot.style.setProperty('--maxHeightRoot', '895px');
        console.log('setRootSize');
    },
    smallWidth() {
        let width = (docClientWidth / 100) * 90;
        let height = width / 0.52;
        idRoot.style.setProperty('--widthRoot', width + 'px');
        idRoot.style.setProperty('--heightRoot', height + 'px');
        idRoot.style.setProperty('--minWidthRoot', '188px');
        idRoot.style.setProperty('--maxWidthRoot', '465px');
        idRoot.style.setProperty('--minHeightRoot', '362px');
        idRoot.style.setProperty('--maxHeightRoot', '895px');
        bodyClientWidth = idBody.clientWidth;
        bodyClientHeight = idBody.clientHeight;
        fontSize = (bodyClientWidth / 100) * 10;
        idBody.style.setProperty('--fontSize', fontSize + 'px');
        console.log(`${fontSize} small fontSize`);
    },
    littleHeight() {
        setLand(true);
        let width = (docClientWidth / 100) * 90;
        let height = (docClientHeight / 100) * 90;
        idRoot.style.setProperty('--widthRoot', width + 'px');
        idRoot.style.setProperty('--heightRoot', height + 'px');
        idRoot.style.setProperty('--minWidthRoot', '60vw');
        idRoot.style.setProperty('--maxWidthRoot', '90vw');
        idRoot.style.setProperty('--minHeightRoot', '60vh');
        idRoot.style.setProperty('--maxHeightRoot', '90vh');
        console.log('little');
    },
    setFontSize() {
      bodyClientWidth = idBody.clientWidth;
      let calc = null;
      let nfsSQ = 120;
      idBody.style.setProperty('--questFontSize', nfsSQ + "%");
      let questW = questRef.current.offsetWidth + 10;
      calc = bodyClientWidth - questW;
      console.log(calc);
      try {
        while (calc < 90) {
          console.log('while');
          bodyClientWidth = idBody.clientWidth;
          questW = questRef.current.offsetWidth + 10;
          calc = bodyClientWidth - questW;
          console.log(calc);
          if (calc < 90) {
            console.log('if');
            nfsSQ = nfsSQ - 5;
            idBody.style.setProperty('--questFontSize', nfsSQ + "%");
          }
        }
      } catch (error) {
        setTitle(error);
        setTimeout(() => {
          setTitle("Calculator");
        }, 2000);
      }
      console.log('setFontSize');
    }
  }
  const getDocSize = sizes.getDocSize;
  const setRootSize = sizes.setRootSize;
  const smallWidth = sizes.smallWidth;
  const littleHeight = sizes.littleHeight;
  const setFontSize = sizes.setFontSize;

  useEffect(() => {
    window.addEventListener('resize', getDocSize);
  }, []);
  
  useEffect(() => {
    console.log('useEffect');
        getDocSize();
  }, []);

  useEffect(() => {
    setFontSize();
  }, [quest]);


  const reg = {
    regDot(arg) {
      if (/\./.test(arg)) return true;
    },
    regDotZeros(arg) {
      if (/\.0*$/.test(arg)) return true;
    },
    regNumOp(arg) {
      if (/(\d+)(\+|\-|\*|\/)$/.test(arg)) return true;
    },
    regEndOp(arg) {
      if (/(\+|\-|\*|\/)$/.test(arg)) return true;
    },
    regMinus(arg) {
      if (/(\d*)(\+|\-|\*|\/)(\-)$/.test(arg)) return true;
    },
    regEndNum(arg) {
      if (/(\d)$/.test(arg)) return true;
    },
    regCent(arg) {
      if (/\%$/.test(arg)) return true;
    },
    regOpCent(arg) {
      if (/(\+|\-|\*|\/|\%)$/.test(arg)) return true;
    },
    regCentOp(arg) {
      if (/(\%)(\+|\-|\*|\/)$/.test(arg)) return true;
    },
    regNoZero(arg) {
      if (/[1-9]/.test(arg) === true) {
        return true;
      } else {
        return false;
      }
    },
  };
  const regDot = reg.regDot;
  const regDotZeros = reg.regDotZeros;
  const regNumOp = reg.regNumOp;
  const regEndOp = reg.regEndOp;
  const regMinus = reg.regMinus;
  const regEndNum = reg.regEndNum;
  const regCent = reg.regCent;
  const regOpCent = reg.regOpCent;
  const regCentOp = reg.regCentOp;
  const regNoZero = reg.regNoZero;

  //------------------------------------------------------------------------------------------------------

  const check = {
    upExp() {
      let index = [];
      for (let i = 0; i < str.length; i++) {
        if (regOpCent(str[i])) index.unshift(i);
      }
      exp = str.slice(index[0] + 1);
      setQuest(
        str
          .replaceAll(" ", "")
          .replaceAll("/", "÷")
          .replaceAll(".", ",")
          .replaceAll("*", "x")
      );
      if (regEndOp(str)) {
        setAnswer("");
        setParsed("");
      } else {
        parsedToStr();
        eva();
      }
    },
    parsedToStr() {
      let toStr = null;
      let strExp = null;
      if (str === "0") {
        return setAnswer("");
      } else {
        try {
          toStr = math
            .parse(str)
            .toString(options)
            .replaceAll(" ", "")
            .replaceAll("/", "÷")
            .replaceAll("*", "x")
            .replaceAll(".", ",");
          setParsed(toStr);
        } catch (error) {
          setTitle(error);
          setTimeout(() => {
            setTitle("Calculator");
          }, 2000);
        }
      }
    },
    eva() {
      let ans = null;
      if (str === "0") {
        return setAnswer("");
      } else {
        try {
          ans = math.format(math.evaluate(str), formatOpt).replaceAll(".", ",");
          setAnswer(ans);
        } catch (error) {
          console.log(error.toString());
          setTitle(error);
          setTimeout(() => {
            setTitle("Calculator");
          }, 2000);
        }
      }
    },
  };
  const upExp = check.upExp;
  const parsedToStr = check.parsedToStr;
  const eva = check.eva;

  //------------------------------------------------------------------------------------------------------

  const fns = {
    clear() {
      str = "0";
      exp = "";
      setParsed("");
      setAnswer("");
      upExp();
    },
    same(value) {
      str = value;
      upExp();
    },
    add(value) {
      str = str + value;
      upExp();
    },
    addMulti(value) {
      str = str + "*" + value;
      upExp();
    },
    dot() {
      str = str + "0.";
      upExp();
    },
    sliceStr() {
      str = str.slice(0, -1);
      upExp();
    },
    chgZeros(value) {
      let rgx = /\.0*$/;
      str = str.replace(rgx, value);
      upExp();
    },
    onOff() {
      setDisplay(!display);
    },
  };
  const clear = fns.clear;
  const same = fns.same;
  const add = fns.add;
  const dot = fns.dot;
  const sliceStr = fns.sliceStr;
  const chgZeros = fns.chgZeros;
  const addMulti = fns.addMulti;
  const onOff = fns.onOff;

  //------------------------------------------------------------------------------------------------------

  const prsd = {
    numKey(key) {
      try {
        if (exp === "0" && key === "0") throw "try another number";
        if (str === "0") return same(key);
        if (exp === "0" && key !== "0") return sliceStr(), add(key);
        if (regCent(str)) return add("*" + key);
        return add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle("Calculator");
        }, 2000);
      }
    },
    dotKey(key) {
      try {
        if (regCent(str)) return add("*0.");
        if (exp === "") return add("0.");
        if (regDot(exp)) throw "it's already decimal";
        if (regEndNum(exp)) return add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle("Calculator");
        }, 2000);
      }
    },
    opKey(key) {
      const opr = {
        strZero(key) {
          console.log("srtZero");
          key === "-" && same(key);
        },
        strMinus() {
          console.log("strMinus");
          key === "-" && clear();
          key === "+" && clear();
        },
        numOp(key) {
          console.log("numOp");
          key !== "-" && sliceStr();
          add(key);
        },
        opMinus() {
          console.log("opMinus");
          sliceStr();
          sliceStr();
          add(key);
        },
      };
      const strZero = opr.strZero;
      const strMinus = opr.strMinus;
      const numOp = opr.numOp;
      const opMinus = opr.opMinus;

      try {
        if (str === "-") return strMinus();
        if (str === "0" && key === "-") return strZero(key);
        if (regNumOp(str)) return numOp(key);
        if (regCentOp(str)) return numOp(key);
        if (regMinus(str)) return opMinus();
        if (regCent(str)) return add(key);
        if (regNoZero(exp) == false) throw "try a valid number";
        if (regDotZeros(exp)) return chgZeros(key);
        add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle("Calculator");
        }, 2000);
      }
    },
    bsKey() {
      str.length == 1 ? clear() : sliceStr();
    },
    centKey(key) {
      try {
        if (regOpCent(str)) throw "invalid expression";
        if (regNoZero(exp) == false) throw "try a valid number";
        if (regDotZeros(exp)) return chgZeros(key);
        add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle("Calculator");
        }, 2000);
      }
    },
  };
  const numKey = prsd.numKey;
  const dotKey = prsd.dotKey;
  const opKey = prsd.opKey;
  const bsKey = prsd.bsKey;
  const centKey = prsd.centKey;

  //------------------------------------------------------------------------------------------------------

  const getClick = (e) => {
    let key = e.target.value;
    console.log(`${key} key`);
    regEndNum(key)
      ? numKey(key)
      : regEndOp(key)
      ? opKey(key)
      : key === "."
      ? dotKey(key)
      : key === "C"
      ? clear()
      : key === "BS"
      ? bsKey()
      : key === "%"
      ? centKey(key)
      : key === "PWR"
      ? onOff()
      : console.log("getClick");
  };

  //------------------------------------------------------------------------------------------------------

  /*console.log(`width: ${idRoot.offsetWidth},  height: ${idRoot.offsetHeight}`);
    console.log(`${display} display is ` + typeof display);
    console.log(`${land} land is ` + typeof land);
    console.log(`${answer} answer is ` + typeof answer);
    console.log(`${quest} quest is ` + typeof quest);
    console.log(`${str} str is ` + typeof str);
    console.log(`${exp} exp is ` + typeof exp);*/
  console.log("render");
  return (
    <div className="frame" id="frame">
      {land ? (
        <div className="main-error">
          <p className="error">
            <span className="btnF span-error">
              Please keep the device in portrait position.
            </span>
          </p>
        </div>
      ) : display ? (
        <button
          type="button"
          className="material-icons-outlined iconOnOff button-on-off btnG btnW"
          onClick={getClick}
          title="btn"
          value={"PWR"}
        >
          &#xe8ac;
        </button>
      ) : (
        <div className="main-calc">
          <div className="screen">
            <div className="screen-title">
              <p className="output output-title">
                <span className="btnF span-title" ref={titleRef}>
                  {title}
                </span>
              </p>
              {/* <input className="output output-title" value={title} title="display" type="text" readOnly/> */}
            </div>
            <div className="screen-question">
              <p className="output output-question">
                <span className="btnF span-quest" id="spanQuest" ref={questRef}>
                  {quest}
                </span>
              </p>
              {/* <input className="output output-question" value={quest} title="display" type="text" readOnly/> */}
            </div>
            <div className="screen-parsed">
              <p className="output output-parsed">
                <span className="btnF span-pars" ref={parsedRef}>
                  {parsed}
                </span>
              </p>
            </div>
            <div className="screen-answer">
              <p className="output output-answer">
                <span className="btnF span-ans" ref={answerRef}>
                  {answer}
                </span>
              </p>
              {/* <input className="output output-answer" value={answer} title="display" type="text" readOnly/> */}
            </div>
          </div>
          <div className="button-grid">
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-ac btnO btnG btnF"
              value={"C"}
            >
              C
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="material-icons-outlined iconBS button-bs btnO btnG"
              value={"BS"}
            >
              &#xe14a;
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-op btnO btnG btnF"
              value={"%"}
            >
              %
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-op btnO btnG btnF"
              value={"/"}
            >
              ÷
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"7"}
            >
              7
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"8"}
            >
              8
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"9"}
            >
              9
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-op btnO btnG btnF"
              value={"*"}
            >
              x
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"4"}
            >
              4
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"5"}
            >
              5
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"6"}
            >
              6
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-op btnO btnG btnF"
              value={"-"}
            >
              -
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"1"}
            >
              1
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"2"}
            >
              2
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"3"}
            >
              3
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-op btnO btnG btnF"
              value={"+"}
            >
              +
            </button>
            <button
              type="button"
              className="material-icons-outlined iconOnOff button-on-off btnG btnO"
              onClick={getClick}
              title="btn"
              value={"PWR"}
            >
              &#xe8ac;
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-num btnW btnG btnF"
              value={"0"}
            >
              0
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-d btnW btnG btnF"
              value={"."}
            >
              ·
            </button>
            <button
              type="button"
              onClick={getClick}
              title="btn"
              className="button-op btnO btnG btnF"
              value={"="}
            >
              =
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const element = <Calculator />;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);


/*
function changefontsize() {
  var myInput = document.getElementById('myInput');
  if(isOverflown(myInput)) {
    while (isOverflown(myInput)){
    currentfontsize--;
    myInput.style.fontSize = currentfontsize + 'px';
    }
  }else {
    currentfontsize = 13;
    myInput.style.fontSize = currentfontsize + 'px';
    while (isOverflown(myInput)){
    currentfontsize--;
    myInput.style.fontSize = currentfontsize + 'px';
    }
  }	
}

function isOverflown(element) {
    return element.scrollWidth > element.clientWidth;
}




      let calc = null;
      let fontSize = getComputedStyle(questRef.current).fontSize.replace(/px/gi, '');
      console.log(`${fontSize} fontSize`);
      bodyClientWidth = idBody.clientWidth;
      bodyClientHeight = idBody.clientHeight;
      let screenWidth = bodyClientWidth;
      console.log(`${screenWidth} screenWidth`);
      let questLength = questRef.current.offsetWidth;
      let parseLength = parsedRef.current.offsetWidth;
      console.log(`${questLength} questLength`);
      calc = ((screenWidth / 100) * 90) - questLength;
      console.log(`${calc} calc`);
      if (calc < 0) {
        first = first - 10;
        console.log(`${first} first`);
        idBody.style.setProperty('--questFontSize', first + '%');
      }
      console.log('setFontSize');




*/
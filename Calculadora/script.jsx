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
        console.log(fontSize + 'fontSize setRootSize');
        idBody.style.setProperty('--fontSize', fontSize + 'px');
        idRoot.style.setProperty('--widthRoot', '46.8vh');
        idRoot.style.setProperty('--heightRoot', '90vh');
        idRoot.style.setProperty('--minWidthRoot', '188px');
        idRoot.style.setProperty('--maxWidthRoot', '465px');
        idRoot.style.setProperty('--minHeightRoot', '362px');
        idRoot.style.setProperty('--maxHeightRoot', '895px');
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
    },
    setFontSize(key) {
      bodyClientWidth = idBody.clientWidth;
      let titleFontSize = 110;
      let questFontSize = 120;
      let parseFontSize = 120;
      let ansFontSize = 90;
      let colorQuest = "white";
      let colorParse = "white";
      let colorAns = "gray";
      console.log(key + ' keyy');
      if (key === "EQ") {
        ansFontSize = 140;
        colorQuest = "black";
        colorParse = "gray";
        colorAns = "white";
      }
      idBody.style.setProperty('--colorQuest', colorQuest);
      idBody.style.setProperty('--colorParse', colorParse);
      idBody.style.setProperty('--colorAns', colorAns);
      idBody.style.setProperty('--titleFontSize', titleFontSize + "%");
      idBody.style.setProperty('--questFontSize', questFontSize + "%");
      idBody.style.setProperty('--parseFontSize', parseFontSize + "%");
      idBody.style.setProperty('--ansFontSize', ansFontSize + "%");
      let titleWidth = titleRef.current.offsetWidth + 10;
      let questWidth = questRef.current.offsetWidth + 20;
      let parseWidth = parsedRef.current.offsetWidth + 20;
      let ansWidth = answerRef.current.offsetWidth + 20;
      let titleCalc = bodyClientWidth - titleWidth;
      let questCalc = bodyClientWidth - questWidth;
      let parseCalc = bodyClientWidth - parseWidth;
      let ansCalc = bodyClientWidth - ansWidth;
      try {
        while (titleCalc < 5) {
          bodyClientWidth = idBody.clientWidth;
          titleWidth = titleRef.current.offsetWidth + 10;
          titleCalc = bodyClientWidth - titleWidth;
          if (titleCalc < 5) {
            titleFontSize = titleFontSize -5;
            idBody.style.setProperty('--titleFontSize', titleFontSize + "%");
          }
        }
        while (questCalc < 10) {
          bodyClientWidth = idBody.clientWidth;
          questWidth = questRef.current.offsetWidth + 20;
          questCalc = bodyClientWidth - questWidth;
          if (questCalc < 10) {
            questFontSize = questFontSize -5;
            idBody.style.setProperty('--questFontSize', questFontSize + "%");
          }
        }
        while (parseCalc < 10) {
          bodyClientWidth = idBody.clientWidth;
          parseWidth = parsedRef.current.offsetWidth + 20;
          parseCalc = bodyClientWidth - parseWidth;
          if (parseCalc < 10) {
            parseFontSize = parseFontSize -5;
            idBody.style.setProperty('--parseFontSize', parseFontSize + "%");
          }
        }
        while (ansCalc < 10) {
          bodyClientWidth = idBody.clientWidth;
          ansWidth = answerRef.current.offsetWidth + 20;
          ansCalc = bodyClientWidth - ansWidth;
          if (ansCalc < 10) {
            ansFontSize = ansFontSize -5;
            idBody.style.setProperty('--ansFontSize', ansFontSize + "%");
          }
        }
      } catch (error) {
        setTitle(error);
        setTimeout(() => {
          setTitle("Calculator");
        }, 2000);
      }
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
        getDocSize();
  }, [land]);

  useEffect(() => {
    setFontSize();
  }, [quest,title]);


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
      console.log(`${index}  index`);
      console.log(`${exp} exp`);
      var moneyFormatter  = new Intl.NumberFormat();
      let forma = moneyFormatter.format(str);
      console.log(`${forma} forma`);
      /* console.log(exp.toLocaleString('de-DE')); */
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
          console.log('pars');
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
          console.log('eva');
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
    /* dot() {
      str = str + "0.";
      upExp();
    }, */
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
    equal(key) {
      console.log('voltou');
      setFontSize(key);
      console.log("equal");
    }
  };
  const clear = fns.clear;
  const same = fns.same;
  const add = fns.add;
  /* const dot = fns.dot; */
  const sliceStr = fns.sliceStr;
  const chgZeros = fns.chgZeros;
  const onOff = fns.onOff;
  const equal = fns.equal;

  //------------------------------------------------------------------------------------------------------

  const prsd = {
    numKey(key) {
      try {
        if (exp === "0" && key === "0") throw "Try another number.";
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
        if (regDot(exp)) throw "Number it's already decimal.";
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
        if (regNoZero(exp) == false) throw "Try a valid number.";
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
        if (regOpCent(str)) throw "Invalid expression.";
        if (regNoZero(exp) == false) throw "Try a valid number.";
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
    eqKey(key) {
      try {
        if (regEndOp(str)) throw "Expression must end with a number.";
        if (regNoZero(exp) == false) throw "Try a valid number.";
        equal(key);
        console.log('eqKey');
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle("Calculator");
        }, 2000);
      }
    }
  };
  const numKey = prsd.numKey;
  const dotKey = prsd.dotKey;
  const opKey = prsd.opKey;
  const bsKey = prsd.bsKey;
  const centKey = prsd.centKey;
  const eqKey = prsd.eqKey;

  //------------------------------------------------------------------------------------------------------

  const getClick = (e) => {
    let key = e.target.value;
    console.log(`${key} key`);
    regEndNum(key) ? numKey(key) :
    regEndOp(key) ? opKey(key) :
    key === "." ? dotKey(key) :
    key === "C" ? clear() :
    key === "BS" ? bsKey() :
    key === "%" ? centKey(key) :
    key === "PWR" ? onOff() :
    key === "EQ" ? eqKey(key) :
    console.log("getClick");
  };

  //------------------------------------------------------------------------------------------------------

  console.log(`width: ${idRoot.offsetWidth},  height: ${idRoot.offsetHeight}`);
    console.log(`${display} display is ` + typeof display);
    console.log(`${land} land is ` + typeof land);
    console.log(`${exp} exp is ` + typeof exp);
    console.log(`${str} str is ` + typeof str);
    console.log(`${quest} quest is ` + typeof quest);
    console.log(`${answer} answer is ` + typeof answer);
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
      ) : (display) ? (
        <div className="display-off">
          <button
            type="button"
            className="material-icons-outlined iconOnOff button-on-off btnG btnY"
            onClick={getClick}
            title="btn"
            value={"PWR"}
          >
            &#xe8ac;
          </button>
        </div>
      ) : (
        <div className="main-calc">
          <div className="screen">
              <p className="output-title">
                <span className="btnF span-title" ref={titleRef}>
                  {title}
                </span>
              </p>
              <p className="output-question">
                <span className="btnF span-quest" id="spanQuest" ref={questRef}>
                  {quest}
                </span>
              </p>
              <p className="output-parsed">
                <span className="btnF span-pars" ref={parsedRef}>
                  {parsed}
                </span>
              </p>
              <p className="output-answer">
                <span className="btnF span-ans" ref={answerRef}>
                  {answer}
                </span>
              </p>
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
              className="button-cent btnO btnG btnF"
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
              className="button-x btnO btnG btnF"
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
              value={"EQ"}
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


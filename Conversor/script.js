const { useState, useEffect, useRef } = React;


const idRoot = document.getElementById("root");
const idBody = document.getElementById("body");

var str = "0";
var exp = "0";
var count = 0;
var lastKey = "none";

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
      console.log(fontSize + 'fontSize small');
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
    }
  }
  const getDocSize = sizes.getDocSize;
  const setRootSize = sizes.setRootSize;
  const smallWidth = sizes.smallWidth;
  const littleHeight = sizes.littleHeight;


  useEffect(() => {
    window.addEventListener('resize', getDocSize);
  }, []);
  
  useEffect(() => {
        getDocSize();
  }, [land]);

  



  console.log(`${exp} exp is ` + typeof exp);
  console.log(`${str} str is ` + typeof str);
  console.log(`${quest} quest is ` + typeof quest);
  console.log(`${answer} answer is ` + typeof answer);
  //  console.log('render');
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
        ) : (
        <div className='screen'>
          <p className="output-title">teste</p>
        </div>)}
    </div>
  );
}

const element = <Calculator />;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);


const { useState, useEffect, useRef } = React;

const options = math.config({
  parenthesis: 'all',
  implicit: 'show',
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

const idRoot = document.getElementById('root');
const idBody = document.getElementById('body');

var str = '0';
var exp = '0';
var count = 0;
var lastKey = 'none';

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

  const [title, setTitle] = useState('Calculator');
  const [quest, setQuest] = useState('0');
  const [parsed, setParsed] = useState('');
  const [answer, setAnswer] = useState('');
  const [display, setDisplay] = useState(false);
  const [land, setLand] = useState(false);

  //------------------------------------------------------------------------------------------------------

  useEffect(() => {
    document.getElementById('seven').addEventListener('click', () => {
      console.log("aqui");
    })
  })
  
  
  
  
  


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
      //console.log(fontSize + 'fontSize setRootSize');
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
      //console.log(fontSize + 'fontSize small');
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
    setFontSize() {
      bodyClientWidth = idBody.clientWidth;
      let titleFontSize = 110;
      let questFontSize = 120;
      let parseFontSize = 120;
      let ansFontSize = 90;
      let colorQuest = 'white';
      let colorParse = 'white';
      let colorAns = 'gray';
      if (exp === '=') {
        ansFontSize = 140;
        colorQuest = 'black';
        colorParse = 'gray';
        colorAns = 'white';
      }
      if (title == 'WTF...') {
        //console.log('deu');
        idBody.style.setProperty('--titleAnim', 'wheel');
      } else if (title != 'WTF...') {
        //console.log('num deu');
        idBody.style.setProperty('--titleAnim', 'wheell');
      }
      idBody.style.setProperty('--colorQuest', colorQuest);
      idBody.style.setProperty('--colorParse', colorParse);
      idBody.style.setProperty('--colorAns', colorAns);
      idBody.style.setProperty('--titleFontSize', titleFontSize + '%');
      idBody.style.setProperty('--questFontSize', questFontSize + '%');
      idBody.style.setProperty('--parseFontSize', parseFontSize + '%');
      idBody.style.setProperty('--ansFontSize', ansFontSize + '%');
      let titleWidth = titleRef.current.offsetWidth;
      let questWidth = questRef.current.offsetWidth + 10;
      let parseWidth = parsedRef.current.offsetWidth + 10;
      let ansWidth = answerRef.current.offsetWidth + 10;
      let titleCalc = bodyClientWidth - titleWidth;
      let questCalc = bodyClientWidth - questWidth;
      let parseCalc = bodyClientWidth - parseWidth;
      let ansCalc = bodyClientWidth - ansWidth;
      try {
        while (titleCalc < 5) {
          bodyClientWidth = idBody.clientWidth;
          titleWidth = titleRef.current.offsetWidth;
          titleCalc = bodyClientWidth - titleWidth;
          if (titleCalc < 5) {
            titleFontSize = titleFontSize - 5;
            idBody.style.setProperty('--titleFontSize', titleFontSize + '%');
          }
          if (titleFontSize < 80) {
            break;
          }
        }
        while (questCalc < 10) {
          bodyClientWidth = idBody.clientWidth;
          questWidth = questRef.current.offsetWidth + 10;
          questCalc = bodyClientWidth - questWidth;
          if (questCalc < 10) {
            questFontSize = questFontSize - 5;
            idBody.style.setProperty('--questFontSize', questFontSize + '%');
          }
        }
        while (parseCalc < 10) {
          bodyClientWidth = idBody.clientWidth;
          parseWidth = parsedRef.current.offsetWidth + 10;
          parseCalc = bodyClientWidth - parseWidth;
          if (parseCalc < 10) {
            parseFontSize = parseFontSize - 5;
            idBody.style.setProperty('--parseFontSize', parseFontSize + '%');
          }
        }
        while (ansCalc < 10) {
          bodyClientWidth = idBody.clientWidth;
          ansWidth = answerRef.current.offsetWidth + 10;
          ansCalc = bodyClientWidth - ansWidth;
          if (ansCalc < 10) {
            ansFontSize = ansFontSize - 5;
            idBody.style.setProperty('--ansFontSize', ansFontSize + '%');
          }
        }
      } catch (error) {
        setTitle(error);
        setTimeout(() => {
          setTitle('Calculator');
        }, 2000);
      }
    },
  };
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
  }, [quest, title]);

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
      if (str.length > 19) {
        setTitle('Press the equals key please.');
        setTimeout(() => {
          setTitle('Calculator');
        }, 2000);
      } else {
        let index = [];
        for (let i = 0; i < str.length; i++) {
          if (regOpCent(str[i])) index.unshift(i);
        }
        exp = str.slice(index[0] + 1);
        setQuest(
          str
            .replaceAll(' ', '')
            .replaceAll('/', '÷')
            .replaceAll('.', ',')
            .replaceAll('*', 'x')
        );
        if (regEndOp(str)) {
          setAnswer('');
          setParsed('');
        } else {
          parsedToStr();
          eva();
        }
      }
    },
    parsedToStr() {
      let toStr = null;
      if (str === '0') {
        return setAnswer('');
      } else {
        try {
          //console.log('pars');
          toStr = math
            .parse(str)
            .toString(options)
            .replaceAll(' ', '')
            .replaceAll('/', '÷')
            .replaceAll('*', 'x')
            .replaceAll('.', ',');
          setParsed(toStr);
        } catch (error) {
          setTitle(error);
          setTimeout(() => {
            setTitle('Calculator');
          }, 2000);
        }
      }
    },
    eva() {
      let ans = null;
      if (str === '0') {
        return setAnswer('');
      } else {
        try {
          //console.log('eva');
          ans = math.format(math.evaluate(str), formatOpt).replaceAll('.', ',');
          setAnswer(ans);
        } catch (error) {
          console.log(error.toString());
          setTitle(error);
          setTimeout(() => {
            setTitle('Calculator');
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
      str = '0';
      exp = '';
      setParsed('');
      setAnswer('');
      upExp();
    },
    same(value) {
      str = value;
      upExp();
    },
    add(value) {
      //console.log(value + '  add');
      str = str + value;
      upExp();
    },
    addMulti(value) {
      str = str + '*' + value;
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
    equal() {
      str = answer.replace(',', '.');
      //console.log(str + ' equal');
      exp = '=';
      //console.log(exp + ' equal');
      setFontSize();
    },
  };
  const clear = fns.clear;
  const same = fns.same;
  const add = fns.add;
  const sliceStr = fns.sliceStr;
  const chgZeros = fns.chgZeros;
  const onOff = fns.onOff;
  const equal = fns.equal;

  //------------------------------------------------------------------------------------------------------

  const prsd = {
    numKey(key) {
      try {
        if (exp.length > 14) throw 'WTF... Why such a large number?';
        if (count > 12) throw 'WTF...';
        if (exp === '=') return clear(), same(key);
        if (exp === '0' && key === '0') throw 'Try another number.';
        if (str === '0') return same(key);
        if (exp === '0' && key !== '0') return sliceStr(), add(key);
        if (regCent(str)) return add('*' + key);
        return add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle('Calculator');
        }, 2000);
      }
    },
    dotKey(key) {
      try {
        if (count > 2) throw 'WTF...';
        if (exp === '=') return clear(), add('.');
        if (regCent(str)) return add('*0.');
        if (exp === '') return add('0.');
        if (regDot(exp)) throw "Number it's already decimal.";
        if (regEndNum(exp)) return add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle('Calculator');
        }, 2000);
      }
    },
    opKey(key) {
      if (exp === '=') {
        exp = str;
      }
      const opr = {
        strZero(key) {
          //  console.log("srtZero");
          key === '-' && same(key);
        },
        strMinus() {
          //  console.log("strMinus");
          key === '-' && clear();
          key === '+' && clear();
        },
        numOp(key) {
          //  console.log("numOp");
          key !== '-' && sliceStr();
          add(key);
        },
        opMinus() {
          //  console.log("opMinus");
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
        if (count > 2) throw 'WTF...';
        if (str === '-') return strMinus();
        if (str === '0' && key === '-') return strZero(key);
        if (regNumOp(str)) return numOp(key);
        if (regCentOp(str)) return numOp(key);
        if (regMinus(str)) return opMinus();
        if (regCent(str)) return add(key);
        if (regNoZero(exp) == false) throw 'Try a valid number.';
        if (regDotZeros(exp)) return chgZeros(key);
        add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle('Calculator');
        }, 2000);
      }
    },
    bsKey() {
      if (exp === '=') return clear();
      str.length == 1 ? clear() : sliceStr();
    },
    centKey(key) {
      try {
        if (count > 2) throw 'WTF...';
        if (regOpCent(str)) throw 'Invalid expression.';
        if (regNoZero(exp) == false)
          throw 'Do you really want to know the percentage of zero?'; //"Try a valid number."   "Do you really want to know the percentage of zero?"
        if (regDotZeros(exp)) return chgZeros(key);
        add(key);
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle('Calculator');
        }, 2500);
      }
    },
    eqKey() {
      let index = [];
      let op = '';
      for (let i = 0; i < str.length; i++) {
        if (regOpCent(str[i])) index.unshift(i);
      }
      //console.log(index);
      op = str[index[0]];
      //console.log(op + '  op');
      let message = 'Do you really want to ' + op + ' zero?';
      message = message
        .replace('-', 'subtract')
        .replace('+', 'add')
        .replace('/', 'divide by')
        .replace('*', 'multiply by');
      try {
        if (count > 2) throw 'WTF...';
        if (exp === '=') return equal();
        if (regEndOp(str)) throw 'Expression must end with a number.';
        if (str === '0') throw 'WTF...';
        if (regNoZero(exp) == false) throw message;
        //console.log('eqKey');
        equal();
      } catch (error) {
        console.log(error.toString());
        setTitle(error);
        setTimeout(() => {
          setTitle('Calculator');
        }, 3000);
      }
    },
  };
  const numKey = prsd.numKey;
  const dotKey = prsd.dotKey;
  const opKey = prsd.opKey;
  const bsKey = prsd.bsKey;
  const centKey = prsd.centKey;
  const eqKey = prsd.eqKey;

  //------------------------------------------------------------------------------------------------------

  const getClick = (e) => {
    //console.log(`${lastKey} lastKey`);
    let key = e.target.value;
    //console.log(`${key} key`);
    lastKey == key ? count++ : (count = 0);
    //console.log(`${count} count`);
    lastKey = key;
    regEndNum(key)
      ? numKey(key)
      : regEndOp(key)
      ? opKey(key)
      : key === '.'
      ? dotKey(key)
      : key === 'C'
      ? clear()
      : key === 'BS'
      ? bsKey()
      : key === '%'
      ? centKey(key)
      : key === 'PWR'
      ? onOff()
      : key === 'EQ'
      ? eqKey()
      : console.log('getClick');
  };

  //------------------------------------------------------------------------------------------------------

  //  console.log(`width: ${idRoot.offsetWidth},  height: ${idRoot.offsetHeight}`);
  //  console.log(`${display} display is ` + typeof display);
  //  console.log(`${land} land is ` + typeof land);
  //console.log(`${exp} exp is ` + typeof exp);
  //console.log(`${str} str is ` + typeof str);
  //console.log(`${quest} quest is ` + typeof quest);
  //console.log(`${answer} answer is ` + typeof answer);
  //  console.log('render');
  return (
    <div className='frame' id='frame'>
      {land ? (
        <div className='main-error'>
          <p className='error'>
            <span className='btnF span-error'>
              Please keep the device in portrait position.
            </span>
          </p>
        </div>
      ) : display ? (
        <div className='display-off'>
          <button
            id='pwr'
            type='button'
            className='material-icons-outlined iconOnOff button-on-off btnG btnY'
            onClick={getClick}
            title='btn'
            value={'PWR'}
          >
            &#xe8ac;
          </button>
        </div>
      ) : (
        <div className='main-calc'>
          <div className='screen'>
            <p className='output-title'>
              <span className='btnF span-title' ref={titleRef}>
                {title}
              </span>
            </p>
            <p className='output-question'>
              <span className='btnF span-quest' id='spanQuest' ref={questRef}>
                {quest}
              </span>
            </p>
            <p className='output-parsed'>
              <span className='btnF span-pars' ref={parsedRef}>
                {parsed}
              </span>
            </p>
            <p className='output-answer'>
              <span className='btnF span-ans' ref={answerRef}>
                {answer}
              </span>
            </p>
          </div>
          <div className='button-grid'>
            <button
              id='C'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-ac btnO btnG btnF'
              value={'C'}
            >
              C
            </button>
            <button
              id='BS'
              type='button'
              onClick={getClick}
              title='btn'
              className='material-icons-outlined iconBS button-bs btnO btnG'
              value={'BS'}
            >
              &#xe14a;
            </button>
            <button
              id='cent'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-cent btnO btnG btnF'
              value={'%'}
            >
              %
            </button>
            <button
              id='div'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-op btnO btnG btnF'
              value={'/'}
            >
              ÷
            </button>
            <button
              id='seven'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'7'}
            >
              7
            </button>
            <button
              id='eight'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'8'}
            >
              8
            </button>
            <button
              id='nine'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'9'}
            >
              9
            </button>
            <button
              id='multi'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-x btnO btnG btnF'
              value={'*'}
            >
              x
            </button>
            <button
              id='four'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'4'}
            >
              4
            </button>
            <button
              id='five'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'5'}
            >
              5
            </button>
            <button
              id='six'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'6'}
            >
              6
            </button>
            <button
              id='sub'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-op btnO btnG btnF'
              value={'-'}
            >
              -
            </button>
            <button
              id='one'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'1'}
            >
              1
            </button>
            <button
              id='two'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'2'}
            >
              2
            </button>
            <button
              id='three'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'3'}
            >
              3
            </button>
            <button
              id='add'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-op btnO btnG btnF'
              value={'+'}
            >
              +
            </button>
            <button
              id='AC'
              type='button'
              className='material-icons-outlined iconOnOff button-on-off btnG btnO'
              onClick={getClick}
              title='btn'
              value={'PWR'}
            >
              &#xe8ac;
            </button>
            <button
              id='zero'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-num btnW btnG btnF'
              value={'0'}
            >
              0
            </button>
            <button
              id='dot'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-d btnW btnG btnF'
              value={'.'}
            >
              ·
            </button>
            <button
              id='eq'
              type='button'
              onClick={getClick}
              title='btn'
              className='button-op btnO btnG btnF'
              value={'EQ'}
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
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);

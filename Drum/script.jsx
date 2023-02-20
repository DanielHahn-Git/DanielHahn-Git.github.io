const { useEffect, useCallback } = React;


let padList = [
    {
      nKey: 0,
      id: "Kick",
      keyPad: "Q",
      class: "item1",
      src: "kik.ogg"
    },
    {
      nKey: 1,
      id: "Snare1",
      keyPad: "W",
      class: "item2",
      src: "snare2.ogg"
    },
    {
      nKey: 2,
      id: "Snare2",
      keyPad: "E",
      class: "item3",
      src: "snare1.ogg"
    },
    {
      nKey: 3,
      id: "Hihat",
      keyPad: "A",
      class: "item4",
      src: "hihat1.ogg"
    },
    {
      nKey: 4,
      id: "OpenHihat",
      keyPad: "S",
      class: "item5",
      src: "open1.ogg"
    },
    {
      nKey: 5,
      id: "Tom1",
      keyPad: "D",
      class: "item6",
      src: "tom1.ogg"
    },
    {
      nKey: 6,
      id: "Tom2",
      keyPad: "Z",
      class: "item7",
      src: "tom2.ogg"
    },
    {
      nKey: 7,
      id: "Ride",
      keyPad: "X",
      class: "item8",
      src: "ride1.ogg"
    },
    {
      nKey: 8,
      id: "Crash",
      keyPad: "C",
      class: "item9",
      src: "crash1.ogg"
    }
];


function Drum() {

  //------------------------------------------------------------------------------------------------------
  const handleKey = useCallback ((pressedKey) => {
    let padKey = pressedKey.key.toUpperCase();
    let sampleName = document.getElementById(padKey);
    if (sampleName) {
      let divId = sampleName.parentElement.id;
      let clickDiv = document.getElementById(divId);
      clickDiv.click();
    }
    
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  //------------------------------------------------------------------------------------------------------
  const playSample = (e) => {
    let innerTxt = e.target.innerText;
    let padCtrl = document.getElementById(innerTxt);
    padCtrl.currentTime = 0;
    padCtrl.play();
    let divId = e.target.id;
    document.getElementById("display").innerText = divId;
    let idDivPad = document.getElementById(divId);
    idDivPad.style.setProperty("--background", "red");
    setTimeout(() => {
      idDivPad.style.setProperty("--background", "black");
    }, 150);
  }
  //------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------

  console.log('render');
  return (
    <div className="frame" id="frame">
      <div className="container" id="drum-machine" >
        <div className="screen">
          <p className="display" id="display"></p>
        </div>
        <div className="pad-grid">
          { padList.map((pad) => {
              return (
                <div key={pad.nKey} id={pad.id} className={`${pad.class} drum-pad`} onClick={playSample}>
                  <audio id={pad.keyPad} className="clip" src={`Samples/${pad.src}`} ></audio>
                  {pad.keyPad}
                </div>
              )
          }) }
        </div>
      </div>
    </div>
  );
}


const element = <Drum />;
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(element);


const { useState, useEffect, useRef } = React;


function Calculator() {


  //------------------------------------------------------------------------------------------------------

  console.log('render');
  return (
    <div className="frame" id="frame">
      <p className='span-title'>teste</p>
    </div>
  );
}

const element = <Calculator />;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);


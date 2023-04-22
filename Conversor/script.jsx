const { useState } = React;

function App() {
  const [count, setCount] = useState(100);
function Button(value) {  
  const click = (e) => {
    console.log('click');
    let key = e.target.value;
    console.log(key);
    switch (key) {
      case '-':
        setCount(count => count - 1);
        break;
      case '+':
        setCount(count => count + 1);
        break;
    }
  }
  console.log('render');
  return (
    <input type='button' onClick={click}/>
    );
}
  console.log(count);
  return (
    <div>
      <Button value={'-'}/>
      <input value={count} readOnly />
      <Button value={'+'}/>
    </div>
    );
}



const element = <App />
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
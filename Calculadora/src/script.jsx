class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <div className="calculator_grid">
          <div className="output">
            <div className="previous">123 +</div>
            <div className="current">654</div>
          </div>
          <button className="double operator">AC</button>
          <button className="operator">DEL</button>
          <button className="operator">÷</button>
          <button className="numb">1</button>
          <button className="numb">2</button>
          <button className="numb">3</button>
          <button className="operator">*</button>
          <button className="numb">4</button>
          <button className="numb">5</button>
          <button className="numb">6</button>
          <button className="operator">+</button>
          <button className="numb">7</button>
          <button className="numb">8</button>
          <button className="numb">9</button>
          <button className="operator">-</button>
          <button className="numb">.</button>
          <button className="numb">0</button>
          <button className="double operator">=</button>
        </div>
      </main>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));

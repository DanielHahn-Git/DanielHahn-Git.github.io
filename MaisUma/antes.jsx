class LogInput extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    return (
      <div>
        <div className="in">adsf{this.props.input}</div>
        <div className="out">asfd{this.props.input}</div>
      </div>      
    );
  }
}




class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      equal: []
    };
    /* this.handleChange = this.handleChange.bind(this); */
    this.inputNum = this.inputNum.bind(this); 
  }
  inputNum(event) {
    console.log(this.state.input);
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  }

  
  render() {
    return (
      <main>
        <div className="calculator_grid">
          <div className="outputDiv">
            <LogInput value={this.state.input}/>
          </div>
          <button type="reset" className="double operator">AC</button>
          <button type="button" className="operator">DEL</button>
          <button type="button" className="operator">÷</button>
          <button type="button" className="numb" onClick={this.inputNum} value={1} >1</button>
          <button type="button" className="numb" onClick={this.inputNum} value={2} >2</button>
          <button type="button" className="numb" onClick={this.inputNum} value={3} >3</button>
          <button type="button" className="operator">*</button>
          <button type="button" className="numb" onClick={this.inputNum} value={4} >4</button>
          <button type="button" className="numb" onClick={this.inputNum} value={5} >5</button>
          <button type="button" className="numb" onClick={this.inputNum} value={6} >6</button>
          <button type="button" className="operator">+</button>
          <button type="button" className="numb" onClick={this.inputNum} value={7} >7</button>
          <button type="button" className="numb" onClick={this.inputNum} value={8} >8</button>
          <button type="button" className="numb" onClick={this.inputNum} value={9} >9</button>
          <button type="button" className="operator">-</button>
          <button type="button" className="numb">.</button>
          <button type="button" className="numb" onClick={this.inputNum} value={0} >0</button>
          <button type="button" className="double operator">=</button>
        </div>
      </main>
    );
  }
}


ReactDOM.render(<MyComponent />, document.getElementById("root"));

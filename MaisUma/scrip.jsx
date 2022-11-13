const IconOnOff = () => (
  <i className="material-icons-outlined iconOnOff">&#xe8ac;</i>
);

const IconBS = () => (
  <i className='material-icons-outlined iconBS'>&#xe14a;</i>
);

const CalculatorTitle = (props) => (
  <div className="calculator-title">
    <p className="title">{props.value}</p>
  </div>
);
 


const OutputScreenRow = (props) => (
  <div className="screen-row">
    <input className="output" title="display" type="text" label="teste" readOnly value={props.value} />
  </div>
);


const OutputScreen = (props) => (
  <div className="screen">
    <OutputScreenRow id="question" value={props.value.question} />
    <OutputScreenRow id="answer" value={props.value.answer} />
  </div>
);

const ButtonNum = (props) => (
  <input
    title="buttonNum"
    className="button-num btnW btn btnF"
    onClick={props.handleClick}
    type="button"
    value={props.label} />
);

const ButtonOp = (props) => (
  <input
    title="buttonOp"
    className="button-op btnO btn btnF"
    onClick={props.handleClick}
    type="button"
    value={props.label} />
);

const ButtonAC = (props) => (
  <input
    title="buttonAC"
    className="button-ac btnO btn btnF"
    onClick={props.handleClick}
    type="button"
    value={props.label} />
);

const ButtonD = (props) => (
  <input
    title="buttonD"
    className="button-d btnW btn btnF"
    onClick={props.handleClick}
    type="button"
    value={props.label} />
);

const ButtonOnOff = (props) => (
  <button
    title="buttonOnOff"
    className="button-on-off btn"
    type="button"
    onClick={props.handleClick}
    value={props.label}>
    {props.value}
  </button>
);

const ButtonBS = (props) => (
  <button
    title="buttonBS"
    className="button-bs btnO btn"
    type="button"
    onClick={props.handleClick}
    value={props.label}>
    {props.value}
  </button>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;
    this.setState({
      question: (this.state.question += value),
      answer: (this.state.answer += value),
    });
    console.log(`${this.state.question} handleClick`);
  }
  
  render() {
    return (
      <div className="frame">
        <CalculatorTitle value='Calculator' />
        <div className="mainCalc">
          <OutputScreen value={this.state} handleChange={this.handleChange} />
          <div className="button-grid">
            <ButtonAC handleClick={this.handleClick} id="button" label={"AC"} />
            <ButtonBS handleClick={this.handleClick} id="button" label={"DEL"} value={<IconBS />} /> 
            <ButtonOp handleClick={this.handleClick} id="button" label={"%"} />
            <ButtonOp handleClick={this.handleClick} id="button" label={"÷"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"7"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"8"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"9"} />
            <ButtonOp handleClick={this.handleClick} id="button" label={"*"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"4"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"5"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"6"} />
            <ButtonOp handleClick={this.handleClick} id="button" label={"-"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"1"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"2"} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"3"} />
            <ButtonOp handleClick={this.handleClick} id="button" label={"+"} />
            <ButtonOnOff handleClick={this.handleClick} id="buttonOnOff" label={"."} value={<IconOnOff />} />
            <ButtonNum handleClick={this.handleClick} id="button" label={"0"} />
            <ButtonD handleClick={this.handleClick} id="button" label={"."} />
            <ButtonOp handleClick={this.handleClick} id="button" label={"="} />
          </div>
        </div>
      </div>
    );
  }
}

const element = <Calculator />;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(element);


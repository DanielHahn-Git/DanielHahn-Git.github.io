class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <div>
                { /* Altere o código abaixo desta linha */}
                <GetInput inputValue={this.state.input} handleChange={this.handleChange} />
                <RenderInput input={this.state.inputValue} />
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};
ReactDOM.render(<MyApp />, document.getElementById('root'));


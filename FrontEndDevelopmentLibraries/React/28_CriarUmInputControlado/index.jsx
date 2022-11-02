class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // Altere o código abaixo desta linha
        this.handleChange = this.handleChange.bind(this);
        // Altere o código acima desta linha
    }
    // Altere o código abaixo desta linha
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    // Altere o código acima desta linha
    render() {
        return (
            <div>
                { /* Altere o código abaixo desta linha */}
                <input type="text" title="text" placeholder="Digite aqui" value={this.state.input} onChange={this.handleChange} />
                { /* Altere o código acima desta linha */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};
ReactDOM.render(<ControlledInput />, document.getElementById('root'));


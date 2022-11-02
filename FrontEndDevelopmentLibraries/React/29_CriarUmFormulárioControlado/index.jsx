class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        // Altere o código abaixo desta linha
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
        // Altere o código acima desta linha
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Altere o código abaixo desta linha */}
                    <input type="text" title="text" placeholder="Digite aqui" value={this.state.input} onChange={this.handleChange} />
                    {/* Altere o código acima desta linha */}
                    <button type='submit'>Submit!</button>
                </form>
                {/* Altere o código abaixo desta linha */}
                <h1>{this.state.submit}</h1>
                {/* Altere o código acima desta linha */}
            </div>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
        // Altere o código abaixo desta linha
        this.handleClick = this.handleClick.bind(this);
        // Altere o código acima desta linha
    }
    handleClick() {
        this.setState({
            text: "You clicked!"
        });
    }
    render() {
        return (
            <div>
                { /* Altere o código abaixo desta linha */}
                <button onClick={this.handleClick} >Click Me</button>
                { /* Altere o código acima desta linha */}
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));


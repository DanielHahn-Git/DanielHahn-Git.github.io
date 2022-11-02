class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // Altere o código abaixo desta linha
        this.setState({
            name: 'React Rocks!'
        })
        // Altere o código acima desta linha
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};





const JSX = <MyComponent />;

ReactDOM.render(JSX, document.getElementById('root'));
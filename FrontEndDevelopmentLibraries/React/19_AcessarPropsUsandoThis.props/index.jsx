class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Altere o código abaixo desta linha */}
                <Welcome name={"Free code camp"} />
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Altere o código abaixo desta linha */}
                <p>Hello, <strong>{this.props.name}</strong>!</p>
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};



const JSX = <App />

ReactDOM.render(JSX, document.getElementById('root'));
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>
                {/* Altere o código abaixo desta linha */}
                <Navbar name={this.state.name} />
                {/* Altere o código acima desta linha */}
            </div>
        );
    }
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* Altere o código abaixo desta linha */}
                <h1>Hello, my name is: {this.props.name} </h1>
                {/* Altere o código acima desta linha */}
            </div>
        );
    }
};

ReactDOM.render(<MyApp />, document.getElementById('root'));


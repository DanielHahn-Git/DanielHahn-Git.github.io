class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            <div>
                {/* Altere o código abaixo desta linha */}
                <h1>Active Users: {this.state.activeUsers} </h1>
                {/* Altere o código acima desta linha */}
            </div>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));


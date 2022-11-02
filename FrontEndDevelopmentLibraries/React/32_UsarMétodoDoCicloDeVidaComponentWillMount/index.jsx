class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // Altere o código abaixo desta linha
        console.log("teste");
        // Altere o código acima desta linha
    }
    render() {
        return <div />
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));


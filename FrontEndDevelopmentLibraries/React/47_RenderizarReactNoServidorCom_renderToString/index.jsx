class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <div /> 
    }
};

// Altere o código abaixo desta linha

/* ReactDOM.render(<App />, document.getElementById('root')); */

ReactDOMServer.renderToString(<App />);

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        // Altere o código abaixo desta linha
        const name = this.state.name;
        // Altere o código acima desta linha
        return (
            <div>
                { /* Altere o código abaixo desta linha */}
                <h1>{ name }</h1>
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};





const JSX = <MyComponent />;

ReactDOM.render(JSX, document.getElementById('root'));
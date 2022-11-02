const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            { /* Altere o código abaixo desta linha */}
            <TypesOfFruit />
            { /* Altere o código acima desta linha */}
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Altere o código abaixo desta linha */}
                <Fruits />
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('root'));
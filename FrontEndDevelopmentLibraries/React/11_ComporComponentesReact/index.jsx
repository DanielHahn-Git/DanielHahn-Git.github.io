const Vegetables = () => {
    return (
        <div>
            <h2>Vegetables:</h2>
            <ul>
                <li>Brussel Sprouts</li>
                <li>Broccoli</li>
                <li>Squash</li>
            </ul>
        </div>
    );
};

const NonCitrus = () => {
    return (
        <div>
            <h4>Non-Citrus:</h4>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Citrus = () => {
    return (
        <div>
            <h4>Citrus:</h4>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Orange</li>
                <li>Grapefruit</li>
            </ul>
        </div>
    );
};

class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                { /* Altere o código abaixo desta linha */}
                <NonCitrus />
                <Citrus />
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
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
                <Vegetables />
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('root'));
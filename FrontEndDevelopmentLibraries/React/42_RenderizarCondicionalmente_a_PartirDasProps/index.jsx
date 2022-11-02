class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {/* Altere o código abaixo desta linha */ }
        return <h1>
            {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
        </h1>;
        {/* Altere o código acima desta linha */ }
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            // Complete a declaração de retorno:
            return {
                counter: this.state.counter + 1
            }
        });
    }
    render() {
        const expression = Math.random() >= .5 ? true : false // Altere esta linha
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {/* Altere o código abaixo desta linha */}
                <Results fiftyFifty={expression}/>
                {/* Altere o código acima desta linha */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}
ReactDOM.render(<GameOfChance />, document.getElementById('root'));


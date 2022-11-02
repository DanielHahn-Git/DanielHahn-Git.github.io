
//Redux

const ADD = 'ADD';

function addMessage(message) {
    return {
        type: ADD,
        message
    };
}

const initialState = [];

function messageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            let newArray = [...state, action.message];
            return newArray;
        default:
            return state;
    }
};

const store = Redux.createStore(messageReducer);


//React


class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    // Adicione os métodos handleChange() e submitMessage() aqui
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.setState({
            messages: [...this.state.messages, this.state.input],
            input: ''
        });
    }

    render() {
        let message = this.state.messages.map(i => <li>{i}</li>);
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* Exiba um elemento input, um button e um ul a partir desta linha */}
                <input type="text" title="text" placeholder="Digite aqui..." value={this.state.input} onChange={this.handleChange} />
                <br />
                <button type="submit" title="button" onClick={this.submitMessage}>Add message</button>
                <br />
                <ul>{message}</ul>
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

ReactDOM.render(<DisplayMessages />, document.getElementById('root'));


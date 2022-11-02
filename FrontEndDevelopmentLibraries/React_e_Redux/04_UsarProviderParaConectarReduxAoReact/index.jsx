// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.setState((state) => {
            const currentMessage = state.input;
            return {
                input: '',
                messages: state.messages.concat(currentMessage)
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    type="text" title="text"
                    placeholder="Digite aqui..."
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
    // Exiba um Provedor abaixo desta linha
    render() {
        return (
            <Provider store={store}>
                <DisplayMessages />
            </Provider>
        )
    }
    // Altere o código acima desta linha
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));


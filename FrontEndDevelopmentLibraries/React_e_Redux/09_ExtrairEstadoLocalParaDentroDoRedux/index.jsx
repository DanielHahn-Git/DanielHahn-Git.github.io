// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
    console.log(`${message} criador`);
    return {
        type: ADD,
        message: message
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Altere o código abaixo desta linha
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
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
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
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
                    {this.props.messages.map((message, idx) => {
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
// Altere o código acima desta linha

const mapStateToProps = (state) => {
    return { messages: state }
};

const mapDispatchToProps = dispatch => ({
    submitNewMessage: (message) => { dispatch(addMessage(message)) }
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));


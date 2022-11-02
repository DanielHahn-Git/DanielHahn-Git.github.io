const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

// Altere o código abaixo desta linha

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));


const state = [];

const mapStateToProps = (state) => {
    return {
        messages: state
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));


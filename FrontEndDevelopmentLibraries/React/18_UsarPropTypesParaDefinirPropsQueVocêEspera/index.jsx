const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Altere o código abaixo desta linha

Items.propTypes = {
    quantity: PropTypes.number.isRequired
};

// Altere o código acima desta linha

Items.defaultProps = {
    quantity: 10
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};

ReactDOM.render(<ShoppingCart />, document.getElementById('root'));
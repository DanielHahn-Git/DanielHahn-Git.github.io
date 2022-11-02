const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        { /* Altere o código abaixo desta linha */ }
        return <Items quantity = {10} />
        { /* Altere o código acima desta linha */ }
    }
};

const JSX = <ShoppingCart />

ReactDOM.render(JSX, document.getElementById('root'));
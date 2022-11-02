const CurrentDate = (props) => {
    return (
        <div>
            { /* Altere o código abaixo desta linha */}
            <p>The current date is: {props.date} </p>
            { /* Altere o código acima desta linha */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* Altere o código abaixo desta linha */}
                <CurrentDate date={Date()}/>
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

ReactDOM.render(<Calendar />, document.getElementById('root'));
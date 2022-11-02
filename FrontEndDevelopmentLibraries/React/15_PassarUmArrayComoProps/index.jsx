const List = (props) => {
    { /* Altere o código abaixo desta linha */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Altere o código acima desta linha */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* Altere o código abaixo desta linha */}
                <List tasks={["walk dog", "workout"]} />
                <h2>Tomorrow</h2>
                <List tasks={["walk dog", "workout", "code"]} />
                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

ReactDOM.render(<ToDo />, document.getElementById('root'));
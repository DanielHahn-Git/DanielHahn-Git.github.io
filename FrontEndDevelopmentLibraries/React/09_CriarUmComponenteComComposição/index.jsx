const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* Altere o código abaixo desta linha */}
                <ChildComponent />

                { /* Altere o código acima desta linha */}
            </div>
        );
    }
};

ReactDOM.render(<ParentComponent />, document.getElementById('root'));
const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(i => <li key={frontEndFrameworks.indexOf(i) + 1}>{i}</li>); // Altere esta linha
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
        </div>
    );
};

ReactDOM.render(<Frameworks />, document.getElementById('root'));


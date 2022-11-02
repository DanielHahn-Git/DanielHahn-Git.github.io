const styles = {
    color: 'purple',
    fontSize: 40,
    border: '2px solid purple'
};

// Altere o código acima desta linha
class Colorful extends React.Component {
    render() {
        // Altere o código abaixo desta linha
        return (
            <div style={styles}>Style Me!</div>
        );
        // Altere o código acima desta linha
    }
};

ReactDOM.render(<Colorful />, document.getElementById('root'));


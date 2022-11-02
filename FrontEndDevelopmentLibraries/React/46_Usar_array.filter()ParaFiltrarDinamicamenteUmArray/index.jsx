class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        };
    }
    render() {
        const usersOnline = this.state.users.filter(user => user.online); // Altere esta linha
        const renderOnline = usersOnline.map(i => <li key={usersOnline.indexOf(i) + 1}>{i.username}</li>); // Altere esta linha
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>{renderOnline}</ul>
            </div>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));


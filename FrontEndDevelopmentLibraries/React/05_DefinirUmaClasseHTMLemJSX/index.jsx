const JSX = (
    <div className= "myDiv">
        <h1>Add a class to this div</h1>
    </div>
);

const element = JSX;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

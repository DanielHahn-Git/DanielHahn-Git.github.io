const JSX = (
    <div>
        <h1>This is a block of JSX</h1>
        {/* Comentários são assim. */}
        <p>Here's a subtitle</p>
    </div>
);

const element = JSX;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

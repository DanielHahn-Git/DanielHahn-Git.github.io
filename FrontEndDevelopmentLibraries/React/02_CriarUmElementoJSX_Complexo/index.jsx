const JSX = <div>
    <h1>Header</h1>
    <p>Paragrafo</p>
    <ul>
        <li>Item 1 da lista.</li>
        <li>Item 2 da lista.</li>
        <li>Item 3 da lista.</li>
    </ul>
</div>

const element = JSX;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

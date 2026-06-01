function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function Props() {
    return (
        <div>
            <Greeting name = "John" />
            <Greeting name = "jane" />
            <Greeting name = "Bob" />
        </div>
    );
}

export default Props;
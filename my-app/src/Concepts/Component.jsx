function Welcome() {
    return <h1>Hello World</h1>
}

function Component() {
    return (
        <div>
            <Welcome />
            <Welcome />
            <Welcome />

        </div>
    );
}

export default Component; 
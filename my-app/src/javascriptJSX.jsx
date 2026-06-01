//JavaScript in JSX

function JavascriptJSX() {
    const name = "Ayush";
    const age = 22;

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years Old</p>
            <p>Neat Year: {age + 1}</p>
        </div>
    );
}

export default JavascriptJSX;
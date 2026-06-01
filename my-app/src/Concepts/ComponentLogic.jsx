function Greeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : "Good Evening"

     return <h1>{greeting}!</h1>;
}

export default Greeting;
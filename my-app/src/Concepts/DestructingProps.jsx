function UserCard({name, age, email}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email {email}</p>
        </div>
    );
}

function DestructingProps() {
    return <UserCard name="Ayush Kute" age={30} email={"ayushkute@gmail.com"} />;
}
export default DestructingProps;
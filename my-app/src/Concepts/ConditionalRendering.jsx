// Keep only ONE version — pick whichever you like
function UserStatus({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please log in</h1>;
}

function Notification({ hasMessage }) {
    return (
        <div>
            {hasMessage && <p>You have new messages!</p>}
        </div>
    );
}

// Main component that uses both
function ConditionalRendering() {
    return (
        <div>
            <UserStatus isLoggedIn={true} />
            {/* //<UserStatus isLoggedIn={false} /> */}
            <Notification hasMessage={true} />
            {/* <Notification hasMessage={false} /> */}
        </div>
    );
}

export default ConditionalRendering;  // ✅ matches import name!=

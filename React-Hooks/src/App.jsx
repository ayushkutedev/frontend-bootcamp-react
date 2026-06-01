// //UseState

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default Counter;




// UseEffect 

// import React, { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>

//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default Users;





// //useContext
// import React, { createContext, useContext } from "react";

// // Step 1: Create Context
// const UserContext = createContext();

// // Step 3: Consume Data (Define Home component)
// function Home() {
//   const user = useContext(UserContext);

//   return <h2>Welcome {user}</h2>;
// }

// // Step 2: Provide Data (Main App component)
// function App() {
//   return (
//     <UserContext.Provider value={"Shreya"}>
//       <Home />
//     </UserContext.Provider>
//   );
// }

// export default App;





//Custom Hooks 

import React, { useState } from "react";

// 1. Define the Custom Hook at the top
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}

// 2. Define the Counter Component that uses the hook
function Counter() {
  const { count, increment } = useCounter(); // 👈 Using the hook here

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {count}</h2>
      <button 
        onClick={increment} 
        style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
      >
        Increment
      </button>
    </div>
  );
}

// 3. Export the component to run it
export default Counter;
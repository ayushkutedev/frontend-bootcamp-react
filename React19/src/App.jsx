// async function loginAction(formData) {
//   "use server";

//   console.log(formData.get("username"));
// }

// function App() {
//   return (
//     <form action={loginAction}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Enter Username"
//       />

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default App;













// Use() 



// import { use } from "react";

// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   ).then((res) => res.json());
// }

// const usersPromise = fetchUsers();

// function Users() {
//   const users = use(usersPromise);

//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id}>
//           {user.name}   
//         </p>
//       ))}
//     </div>
//   );
// }

// export default Users;











// Suspense 


// import React, { Suspense, use } from "react";

// function fetchData() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   ).then((res) => res.json());
// }

// const postsPromise = fetchData();

// function Posts() {
//   const posts = use(postsPromise);

//   return (
//     <div>
//       {posts.map((post) => (
//         <p key={post.id}>
//           {post.title}
//         </p>
//       ))}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <Posts />
//     </Suspense>
//   );
// }

// export default App;



















// React 19 

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component Re-rendered");

  return (
    <div>
      <h2>{count}</h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
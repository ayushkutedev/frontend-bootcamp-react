//React Portal 

// import { createPortal } from "react-dom";

// function Modal() {
//   const portalRoot = document.getElementById("portal-root");

//   if (!portalRoot) return null;

//   return createPortal(
//     <div style={{
//       background: "black",
//       color: "white",
//       padding: "20px",
//       position: "fixed",
//       top: "50px",
//       left: "50px",
//       zIndex: 1000
//     }}>
//       <h2>This is Portal Modal</h2>
//     </div>,
//     portalRoot
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Main App</h1>
//       <Modal />
//     </div>
//   );
// }

// export default App;







//Error Boundary

// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hasError: false,
//     };
//   }

//   static getDerivedStateFromError(error) {
//     return {
//       hasError: true,
//     };
//   }

//   componentDidCatch(error, info) {
//     console.log(error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong.</h2>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;













//Uncontrolled Form

// import React, { useRef } from "react";

// function Form() {
//   const nameRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert(nameRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         ref={nameRef}
//         placeholder="Enter Name"
//       />

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Form;







///TanStack Router

// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// function Users() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       return res.json();
//     },
//   });

//   if (isLoading) return <h2>Loading...</h2>;

//   return (
//     <div>
//       {data.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// function App({ children }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//     </QueryClientProvider>
//   );
// }

// export default App;




// Lazy Loading


// import React, {
//   Suspense,
//   lazy,
// } from "react";

//  const Dashboard = lazy(() => import("./Dashboard.jsx"))

// function App() {
//   return (
//     <div>
//       <h1>React Application</h1>

//       <Suspense
//         fallback={
//           <h2>Loading...</h2>
//         }
//       >
//         <Dashboard />
//       </Suspense>
//     </div>
//   );
// }

// export default App;












//Skeleton UI

// import React from "react";

// import Skeleton from "@mui/material/Skeleton";

// import Stack from "@mui/material/Stack";

// function UserLoader() {
//   return (
//     <Stack spacing={1}>
//       <Skeleton
//         variant="text"
//         width={200}
//         height={40}
//       />

//       <Skeleton
//         variant="rectangular"
//         width={300}
//         height={120}
//       />

//       <Skeleton
//         variant="circular"
//         width={50}
//         height={50}
//       />
//     </Stack>
//   );
// }

// export default UserLoader;











//Example with API Loading


import React, {
  useEffect,
  useState,
} from "react";

import Skeleton from "@mui/material/Skeleton";

function Users() {
  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <Skeleton
          variant="text"
          width={200}
          height={40}
        />

        <Skeleton
          variant="rectangular"
          width={300}
          height={100}
        />
      </div>
    );
  }

  return (
    <div>
      {users.map((user) => (
        <h3 key={user.id}>
          {user.name}
        </h3>
      ))}
    </div>
  );
}

export default Users;
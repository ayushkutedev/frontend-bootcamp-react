import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);
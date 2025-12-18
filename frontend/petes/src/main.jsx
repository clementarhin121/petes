import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import City from "./Pages/City.jsx";
import App from "./App.jsx";
import Signup from "./User/Signup.jsx";
import Signin from "./User/Signin.jsx";
import Destinations from "./Pages/Destinations.jsx";
import { UserProvider } from "./Contexts/UserContext.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/city/:id",
    element: <City />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </StrictMode>
);

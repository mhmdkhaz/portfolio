import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
import Sidebar from "./pages/Navbar/SideBar";
import ErrorPage from "./pages/Navbar/ErrorRouter";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

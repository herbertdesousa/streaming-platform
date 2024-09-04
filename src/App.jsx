import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <About />,
  },
  {
    path: "/contato",
    element: <Contact />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

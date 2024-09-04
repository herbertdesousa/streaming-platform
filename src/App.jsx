import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./screens/Home";
import { About } from "./screens/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <About />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

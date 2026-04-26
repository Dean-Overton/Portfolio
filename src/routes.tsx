import type { RouteObject } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/main";
import Havoc from "./pages/Havoc";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/havoc", element: <Havoc /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;

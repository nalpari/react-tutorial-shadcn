import Api from "@/components/Api";
import App from "../App";
import About from "../components/About";
import TutorialReducer from "../components/TutorialReducer";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about/me",
        element: <h3>Me</h3>,
      },
      {
        path: "/about/you",
        element: <h3>You</h3>,
      },
    ],
  },
  {
    path: "/api",
    element: <Api />,
  },
  {
    path: "/tutorial",
    element: <TutorialReducer />,
  },
];

export default routes;

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LetterCard from "./components/LetterCard";
import LetterList from "./components/LetterList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LetterList />,
      },
      {
        path: "/:folderName",
        element: <LetterList />,
      },
      {
        path: "/:folderName/:letterId",
        element: <LetterCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

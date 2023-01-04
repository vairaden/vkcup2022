import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LetterCard, { letterLoader } from "./components/LetterCard";
import LetterList from "./components/LetterList";
import { folderLoader } from "./components/LetterList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LetterList />,
        loader: folderLoader,
      },
      {
        path: "/:folderName",
        element: <LetterList />,
        loader: folderLoader,
      },
      {
        path: "/:folderName/:letterId",
        element: <LetterCard />,
        loader: letterLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import LetterDetailsPage from "../pages/letter-details";
import LetterListPage from "../pages/letter-list-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LetterListPage />,
      },
      {
        path: "/:folderName",
        element: <LetterListPage />,
      },
      {
        path: "/:folderName/:letterId",
        element: <LetterDetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LetterCard from "./components/letterView/LetterCard";
import LetterList from "./components/letterList/LetterList";
import "./index.css";
import LetterListHeader from "./components/letterList/LetterListHeader";
import LetterCardHeader from "./components/letterView/LetterCardHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <LetterListHeader />
            <LetterList />
          </>
        ),
      },
      {
        path: "/:folderName",
        element: (
          <>
            <LetterListHeader />
            <LetterList />
          </>
        ),
      },
      {
        path: "/:folderName/:letterId",
        element: (
          <>
            <LetterCardHeader />
            <LetterCard />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

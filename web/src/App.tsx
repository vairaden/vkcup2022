import { useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchData } from "./api";
import Navbar from "./components/Navbar";

export default function App() {
  const [data, setData] = useState();

  return (
    <>
      <header className="h-14 bg-white px-4 py-3">
        <img src="mailru_logo.svg" alt="Mail ru logo"></img>
      </header>
      <main className="flex">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

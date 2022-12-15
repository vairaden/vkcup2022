import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <header className="fixed h-14 bg-white px-4 py-3 w-[100vw] shadow-sm">
        <img src="/mailru_logo.svg" alt="Mail ru logo"></img>
      </header>
      <main className="flex">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

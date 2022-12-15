import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <header className="fixed top-0 h-14 px-4 py-3 w-[100vw] bg-white shadow-sm">
        <img src="/mailru_logo.svg" alt="Mail ru logo"></img>
      </header>
      <main>
        <Navbar />
        <div className="ml-[236px] w-[calc(100vh - 236px] mt-[68px] pr-[16px]">
          <Outlet />
        </div>
      </main>
    </>
  );
}

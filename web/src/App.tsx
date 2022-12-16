import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="sm:ml-[236px] ml-[68px] w-[calc(100vh - 236px] mt-[68px] pr-[16px]">
        <Outlet />
      </div>
    </main>
  );
}

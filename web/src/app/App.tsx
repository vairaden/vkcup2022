import { Outlet } from "react-router-dom";
import Navbar from "../widgets/navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="ml-[68px] md:ml-[236px] mt-[68px] pr-[16px]">
        <Outlet />
      </div>
    </main>
  );
}

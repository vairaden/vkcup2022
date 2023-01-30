import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Outlet />
    </DndProvider>
  );
}

import Button from "./Button";
import FolderThumbnail from "./FolderThumbnail";

import folderList from "../data/folderList";
import { useState } from "react";

export default function Navbar() {
  const [activeFolder, setActiveFolder] = useState("");

  return (
    <nav className="fixed top-14 flex flex-col justify-between px-4 py-3 w-[232px] h-[calc(100vh-56px)]">
      <div>
        <Button className="mb-3">Написать письмо</Button>
        <ul>
          {folderList.map((folder) => (
            <FolderThumbnail
              key={folder.name}
              to={folder.route}
              imgSrc={folder.imgSrc}
              imgAlt={folder.imgAlt}
              onClick={() => setActiveFolder(folder.alias)}
              selected={folder.alias === activeFolder}
            >
              {folder.name}
            </FolderThumbnail>
          ))}
        </ul>
      </div>
      <button>Тема:</button>
    </nav>
  );
}

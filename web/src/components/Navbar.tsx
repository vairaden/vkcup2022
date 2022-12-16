import Button from "./Button";
import FolderThumbnail from "./FolderThumbnail";

import folderList from "../data/folderList";
import { useState } from "react";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [activeFolder, setActiveFolder] = useState("");
  const { theme, changeTheme } = useTheme();

  return (
    <nav className="fixed top-14 flex flex-col justify-between px-4 py-3 sm:w-[232px] w-[68px] h-[calc(100vh-56px)]">
      <div>
        <Button className="mb-3 hidden sm:block">Написать письмо</Button>
        <Button className="mb-3 block sm:hidden w-9">
          <img
            className="m-2"
            src="/compose_outline_20.svg"
            alt="Написать письмо"
          ></img>
        </Button>
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
        <div className="h-[1px] mx-auto w-[85%] bg-gray-200 my-2"></div>
        <button className="flex items-center sm:w-[200px] w-8 h-9 mt-4 sm:ml-2 mx-auto rounded-lg hover:bg-grayHover">
          <img className="m-2" src="/plus_icon.svg" alt="Новая папка"></img>
          <p className="hidden sm:block">Новая папка</p>
        </button>
      </div>
      <button
        className="flex items-center dark:text-white rounded-lg hover:bg-grayHover"
        onClick={changeTheme}
      >
        <img
          className="m-2"
          src="/palette_outline_20.svg"
          alt="Theme icon"
        ></img>
        <p className="hidden sm:block">
          Тема: {theme === "light" ? "Светлая" : "Тёмная"}
        </p>
      </button>
    </nav>
  );
}

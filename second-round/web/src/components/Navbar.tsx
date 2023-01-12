import Button from "./Button";
import FolderThumbnail from "./FolderThumbnail";

import folderList from "../data/folderList";
import { useState } from "react";
import Settings from "./settingsMenu/Settings";
import useTranslation from "../hooks/useTranslation";

export default function Navbar() {
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [showSettings, setShowSettings] = useState(false);

  const { text } = useTranslation();

  return (
    <nav className="fixed top-14 flex flex-col justify-between px-4 py-3 md:w-[232px] w-[68px] h-[calc(100vh-56px)]">
      <div>
        <Button onClick={() => null} className="mb-3 w-9 md:w-full font-bold">
          <img
            className="m-2 md:hidden"
            src="/compose_outline_20.svg"
            alt="Написать письмо"
          ></img>
          <p className="hidden md:inline">{text.writeLetter}</p>
        </Button>
        <ul>
          {folderList.map((folder) => (
            <FolderThumbnail
              key={folder.name}
              to={folder.route}
              imgSrc={folder.imgSrc}
              darkImgSrc={folder.darkImgSrc}
              imgAlt={folder.imgAlt}
              onClick={() => setActiveFolder(folder.name)}
              selected={folder.name === activeFolder}
            >
              {text[(folder.name + "Folder") as keyof typeof text]}
            </FolderThumbnail>
          ))}
        </ul>
        <div className="h-[1px] mx-auto w-[85%] bg-separatorGray dark:bg-black my-2"></div>
        <button className="flex items-center md:w-[200px] w-8 h-9 mt-4 md:ml-2 mx-auto rounded-lg hover:bg-grayHover dark:hover:bg-darkHover">
          <img className="m-2" src="/plus_icon.svg" alt="Новая папка"></img>
          <p className="hidden md:block text-[#74767A]">{text.newFolder}</p>
        </button>
      </div>
      <button
        className="flex items-center dark:text-textPrimaryWhite rounded-lg hover:bg-grayHover dark:hover:bg-darkHover"
        onClick={() => setShowSettings(true)}
      >
        <p className="hidden md:block">{text.settings}</p>
      </button>
      {showSettings && (
        <Settings closeCallback={() => setShowSettings(false)} />
      )}
    </nav>
  );
}

import Button from "./Button";
import FolderThumbnail from "./FolderThumbnail";
import folderList from "../data/folderList";
import { useState } from "react";
import Settings from "./settingsMenu/Settings";
import useTranslation from "../hooks/useTranslation";
import useThemeStore from "../hooks/useThemeStore";
import { useParams } from "react-router-dom";

export default function Navbar() {
  const activeFolder = useParams().folderName || "inbox";
  const [showSettings, setShowSettings] = useState(false);

  const { text } = useTranslation();
  const theme = useThemeStore((state) => state.theme);

  return (
    <nav className="fixed z-10 top-14 flex flex-col justify-between px-4 py-3 md:w-[232px] w-[68px] h-[calc(100vh-56px)]">
      <div>
        {/* Compose button */}
        <Button onClick={() => null} className="mb-3 w-9 md:w-full font-bold">
          <img
            className="m-2 md:hidden"
            src="/icons/compose_outline_20.svg"
            alt={text.composeLetter}
          ></img>
          <p className="hidden md:inline">{text.composeLetter}</p>
        </Button>
        {/* Folder list */}
        <ul>
          {folderList.map((folder) => (
            <FolderThumbnail
              key={folder.name}
              to={folder.route}
              imgSrc={folder.imgSrc}
              darkImgSrc={folder.darkImgSrc}
              imgAlt={folder.imgAlt}
              selected={folder.name === activeFolder}
            >
              {text[(folder.name + "Folder") as keyof typeof text]}
            </FolderThumbnail>
          ))}
        </ul>
        {/* New folder button */}
        <div className="h-[1px] mx-auto w-[85%] bg-menuSeparator my-2"></div>
        <button
          className="group/newFolder flex items-center w-8 h-8 md:w-[200px] p-2 md:px-4 mx-auto rounded-lg
         hover:bg-altHover transition-colors"
        >
          <img src="/icons/plus_icon.svg" alt={text.newFolder}></img>
          <p className="ml-2 hidden md:block text-menuText/50 group-hover/newFolder:text-menuText">
            {text.newFolder}
          </p>
        </button>
      </div>
      {/* Settings button */}
      <button
        className="flex items-center p-2 md:px-4 rounded-lg hover:bg-altHover"
        onClick={() => setShowSettings(true)}
      >
        {theme.darkThemeIcons ? (
          <img
            className="mr-2"
            src="/icons/dark/gear_outline_dark_20.svg"
            alt={text.settings}
          ></img>
        ) : (
          <img
            className="mr-2"
            src="/icons/light/gear_outline_20.svg"
            alt={text.settings}
          ></img>
        )}
        <p className="hidden md:block text-menuText">{text.settings}</p>
      </button>
      {/* Settings */}
      {showSettings && (
        <Settings closeCallback={() => setShowSettings(false)} />
      )}
    </nav>
  );
}

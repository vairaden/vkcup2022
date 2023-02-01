import Button from "../../shared/ui/Button";
import FolderThumbnail from "../../entities/folder/FolderThumbnail";
import folderList from "../../entities/folder/folderList";
import useTranslation from "../../shared/translation/useTranslation";
import { useParams } from "react-router-dom";
import useMenuStore from "../../shared/store/useMenuStore";
import PlusIcon from "../../shared/icons/controls/PlusIcon";
import GearIcon from "../../shared/icons/controls/GearIcon";
import PencilIcon from "../../shared/icons/PencilIcon";

export default function Navbar() {
  const activeFolder = useParams().folderName || "inbox";
  const toggleSettingsOpen = useMenuStore((state) => state.toggleSettingsOpen);
  const toggleLetterCreatorOpen = useMenuStore(
    (state) => state.toggleLetterCreatorOpen
  );
  const toggleFolderCreatorOpen = useMenuStore(
    (state) => state.toggleFolderCreatorOpen
  );

  const { text } = useTranslation();

  return (
    <nav className="fixed top-14 flex flex-col justify-between px-4 py-3 md:w-[232px] w-[68px] h-[calc(100vh-56px)]">
      <div>
        {/* Compose button */}
        <Button
          onClick={toggleLetterCreatorOpen}
          className="flex items-center justify-center mb-3 w-9 md:w-full font-bold bg-white"
        >
          <PencilIcon className="md:hidden" />
          <p className="hidden md:inline">{text.composeLetter}</p>
        </Button>
        {/* Folder list */}
        <ul>
          {folderList.map((folder) => (
            <FolderThumbnail
              key={folder.name}
              to={folder.route}
              flag={folder.flag}
              selected={folder.name === activeFolder}
            >
              {folder.icon}
              <p className="ml-2 hidden md:block text-menuText">
                {text[(folder.name + "Folder") as keyof typeof text]}
              </p>
            </FolderThumbnail>
          ))}
        </ul>
        {/* New folder button */}
        <div className="h-[1px] mx-auto w-[85%] bg-menuSeparator my-2"></div>
        <button
          className="group/newFolder flex items-center w-8 h-8 md:w-[200px] p-2 md:px-4 mx-auto rounded-lg
         hover:bg-altHover transition-colors"
          onClick={toggleFolderCreatorOpen}
        >
          <PlusIcon className="fill-menuText/50 group-hover/newFolder:fill-menuText" />
          <p className="ml-2 hidden md:block text-menuText/50 group-hover/newFolder:text-menuText">
            {text.newFolder}
          </p>
        </button>
      </div>
      {/* Settings button */}
      <button
        className="flex items-center p-2 md:px-4 rounded-lg hover:bg-altHover"
        onClick={toggleSettingsOpen}
      >
        <GearIcon className="fill-menuText" />
        <p className="hidden md:block text-menuText ml-2">{text.settings}</p>
      </button>
    </nav>
  );
}

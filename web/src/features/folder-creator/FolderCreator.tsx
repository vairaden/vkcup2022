import { FormEvent, useState } from "react";
import CrossIcon from "../../shared/icons/controls/CrossIcon";
import useMenuStore from "../../shared/store/useMenuStore";
import useTranslation from "../../shared/translation/useTranslation";
import Button from "../../shared/ui/Button";

export default function FolderCreator() {
  const toggleFolderCreatorOpen = useMenuStore(
    (state) => state.toggleFolderCreatorOpen
  );
  const [newFolderName, setNewFolderName] = useState("");
  const { text } = useTranslation();

  function handleCreateFolder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Create folder with name: ", newFolderName);
    toggleFolderCreatorOpen();
    setNewFolderName("");
  }

  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
      onClick={toggleFolderCreatorOpen}
    >
      <form
        className="absolute flex flex-col items-center bg-elementBg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[26rem] p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-primaryText">{text.newFolder}</h2>
            <button type="button" onClick={toggleFolderCreatorOpen}>
              <CrossIcon className="stroke-primaryText" width={16} hight={16} />
            </button>
          </div>
          <input
            className="w-full border-[2px] border-textGray text-primaryText rounded-lg my-6 p-2 outline-none bg-elementBg"
            placeholder={text.folderName}
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          ></input>
        </label>
        {/* Controls */}
        <div className="w-full flex">
          <Button
            type="submit"
            onClick={handleCreateFolder}
            className="bg-electricBlue text-white border-none px-6 mr-2"
          >
            {text.addFolder}
          </Button>
          <Button
            type="button"
            onClick={() => {
              toggleFolderCreatorOpen();
              setNewFolderName("");
            }}
            className="bg-selected text-primaryText border-none px-6"
          >
            {text.cancel}
          </Button>
        </div>
      </form>
    </div>
  );
}

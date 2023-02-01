import useMenuStore from "../../shared/store/useMenuStore";
import useTranslation from "../../shared/translation/useTranslation";

export default function FolderCreator() {
  const toggleFolderCreatorOpen = useMenuStore(
    (state) => state.toggleFolderCreatorOpen
  );
  const { text } = useTranslation();

  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
      onClick={toggleFolderCreatorOpen}
    >
      <form
        className="absolute flex flex-col bg-elementBg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-[55rem] h-[52rem] rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <label>
          Folder name
          <input></input>
        </label>
      </form>
    </div>
  );
}

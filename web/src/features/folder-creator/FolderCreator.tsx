import CrossIcon from "../../shared/icons/controls/CrossIcon";
import useMenuStore from "../../shared/store/useMenuStore";
import useTranslation from "../../shared/translation/useTranslation";
import Button from "../../shared/ui/Button";

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
        className="absolute flex flex-col items-center bg-elementBg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[26rem] p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="w-full">
          <div className="flex justify-between items-center">
            <h2>New folder</h2>
            <button type="button" onClick={() => {}}>
              <CrossIcon className="stroke-primaryText" width={16} hight={16} />
            </button>
          </div>
          <input
            className="w-full border-[2px] border-separator rounded-lg"
            placeholder="name"
          ></input>
        </label>
        <div className="w-full">
          <Button
            type="submit"
            onClick={() => {}}
            className="bg-electricBlue text-white border-none w-min px-6 mr-2"
          >
            {text.send}
          </Button>
          <Button
            type="button"
            onClick={() => {}}
            className="bg-selected text-primaryText border-none w-min px-6"
          >
            {text.cancel}
          </Button>
        </div>
      </form>
    </div>
  );
}

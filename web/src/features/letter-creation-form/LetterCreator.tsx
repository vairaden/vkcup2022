import { useEffect, useState } from "react";
import LetterCreationControls from "./LetterCreationControls";
import LetterCreationForm from "./LetterCreationForm";
import useMenuStore from "../../shared/store/useMenuStore";
import useTranslation from "../../shared/translation/useTranslation";
import clsx from "clsx";
import CrossIcon from "../../shared/icons/controls/CrossIcon";
import ExpandIcon from "../../shared/icons/controls/ExpandIcon";

export default function LetterCreator() {
  const toggleLetterCreatorOpen = useMenuStore(
    (state) => state.toggleLetterCreatorOpen
  );
  const [fullScreen, setFullScreen] = useState(false);
  const [letter, setLetter] = useState({
    title: "",
    body: "",
  });

  const { text } = useTranslation();

  function mediaHandler(e: MediaQueryListEvent | MediaQueryList) {
    if (e.matches) {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }
  }
  const mediaQuery = window.matchMedia("(max-width: 960px)");
  useEffect(() => {
    mediaHandler(mediaQuery);
    mediaQuery.addEventListener("change", mediaHandler);
  }, []);

  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
      onClick={toggleLetterCreatorOpen}
    >
      <div
        className={clsx("absolute flex flex-col bg-elementBg", {
          "top-0 left-0 w-full h-full": fullScreen,
          "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-[55rem] h-[52rem] rounded-xl":
            !fullScreen,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <LetterCreationForm
          widgetControls={
            <div className="w-20 flex items-center justify-between">
              <button
                type="button"
                className="p-2"
                onClick={() => setFullScreen((prev) => !prev)}
              >
                <ExpandIcon className="stroke-primaryText" />
              </button>
              <button
                type="button"
                className="p-2"
                onClick={toggleLetterCreatorOpen}
              >
                <CrossIcon className="stroke-primaryText" />
              </button>
            </div>
          }
        />
        <LetterCreationControls
          sendClick={() => {}}
          cancelClick={() => {}}
          saveClick={() => {}}
        />
      </div>
    </div>
  );
}

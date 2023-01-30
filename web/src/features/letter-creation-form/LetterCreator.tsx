import { useState } from "react";
import LetterCreationControls from "./LetterCreationControls";
import LetterCreationForm from "./LetterCreationForm";
import useMenuStore from "../../shared/store/useMenuStore";
import useTranslation from "../../shared/translation/useTranslation";
import clsx from "clsx";

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
            <>
              <button
                type="button"
                onClick={() => setFullScreen((prev) => !prev)}
              >
                F
              </button>
              <button type="button" onClick={toggleLetterCreatorOpen}>
                x
              </button>
            </>
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

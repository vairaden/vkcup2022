import { useState } from "react";
import useMenuStore from "../../shared/store/useMenuStore";
import useTranslation from "../../shared/translation/useTranslation";
import Button from "../../shared/ui/Button";

export default function LetterCreator() {
  const toggleLetterCreatorOpen = useMenuStore(
    (state) => state.toggleLetterCreatorOpen
  );

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
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
        flex w-[55rem] h-[52rem] bg-elementBg rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="flex flex-col">
          <label>
            {text.to}
            <input type="text" />
          </label>
          <label>
            {text.subject}
            <input type="text" />
          </label>
          <label>
            {text.cc}
            <input type="text" />
          </label>
          <label>
            {text.bcc}
            <input type="text" />
          </label>
          <textarea className="h-full w-full"></textarea>
          <div className="flex">
            <Button
              type="submit"
              onClick={() => {}}
              className="bg-electricBlue"
            >
              Submit
            </Button>
            <Button onClick={() => {}}>Save</Button>
            <Button onClick={() => {}}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

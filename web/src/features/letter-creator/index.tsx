import { FormEvent, useEffect, useState } from "react";
import useMenuStore from "../../shared/store/useMenuStore";
import clsx from "clsx";
import CrossIcon from "../../shared/icons/controls/CrossIcon";
import ExpandIcon from "../../shared/icons/controls/ExpandIcon";
import LetterHeaderInputs from "./ui/LetterHeaderInputs";
import FileAttachmentInput from "./ui/FileAttachmentInput";
import LetterBodyInput from "./ui/LetterBodyInput";
import LetterCreatorControls from "./ui/LetterCreatorControls";
import { z } from "zod";
import {
  CreatedLetter,
  letterCreatorSchema,
} from "../../entities/letter/schemas/letterCreatorSchema";

export default function LetterCreator() {
  const toggleLetterCreatorOpen = useMenuStore(
    (state) => state.toggleLetterCreatorOpen
  );
  const [fullScreen, setFullScreen] = useState(false);
  const [letter, setLetter] = useState<CreatedLetter>({
    to: "",
    subject: "",
    cc: "",
    bcc: "",
    attachments: [],
    body: "",
    signature: "",
  });

  function handleSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      ...letter,
      cc:
        letter.cc.length > 0
          ? letter.cc.split(",").map((email) => email.trim())
          : [],
      bcc:
        letter.bcc.length > 0
          ? letter.bcc.split(",").map((email) => email.trim())
          : [],
    };

    try {
      letterCreatorSchema
        .extend({
          cc: z.array(z.string().email()),
          bcc: z.array(z.string().email()),
        })
        .parse(data);

      console.log(letter);
      setLetter({
        to: "",
        subject: "",
        cc: "",
        bcc: "",
        attachments: [],
        body: "",
        signature: "",
      });
      toggleLetterCreatorOpen();
    } catch (error) {
      console.log(error);
    }
  }

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

    return () => {
      mediaQuery.removeEventListener("change", mediaHandler);
    };
  }, []);

  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
      onClick={toggleLetterCreatorOpen}
    >
      <form
        className={clsx("absolute flex flex-col bg-elementBg", {
          "top-0 left-0 w-full h-full": fullScreen,
          "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-[55rem] h-[52rem] rounded-xl":
            !fullScreen,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <LetterHeaderInputs
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
          letter={letter}
          setLetter={setLetter}
        />
        <div className="overflow-auto h-full bg-white">
          <FileAttachmentInput letter={letter} setLetter={setLetter} />
          <LetterBodyInput letter={letter} setLetter={setLetter} />
        </div>
        <LetterCreatorControls
          sendClick={handleSend}
          cancelClick={() => {
            setLetter({
              to: "",
              subject: "",
              cc: "",
              bcc: "",
              attachments: [],
              body: "",
              signature: "",
            });
            toggleLetterCreatorOpen();
          }}
        />
      </form>
    </div>
  );
}

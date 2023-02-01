import { ReactNode, useState } from "react";
import useTranslation from "../../shared/translation/useTranslation";
import CrossIcon from "../../shared/icons/controls/CrossIcon";
import LetterCreatorInput from "./LetterCreatorInput";
import { CreatedLetter } from "../../entities/letter/letterCreatorSchema";

export default function LetterHeaderInputs({
  widgetControls,
  letter,
  setLetter,
}: {
  widgetControls: ReactNode;
  letter: CreatedLetter;
  setLetter: (fn: (prev: CreatedLetter) => CreatedLetter) => void;
}) {
  const { text } = useTranslation();
  const [ccOpen, setCcOpen] = useState(false);
  const [bccOpen, setBccOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <LetterCreatorInput
        value={letter.to}
        label={text.to}
        onChange={(e) => setLetter((prev) => ({ ...prev, to: e.target.value }))}
      >
        {widgetControls}
      </LetterCreatorInput>
      {ccOpen && (
        <LetterCreatorInput
          value={letter.cc}
          label={text.cc}
          onChange={(e) => {
            setLetter((prev) => ({ ...prev, cc: e.target.value }));
          }}
        >
          <button
            className="w-5 h-5"
            type="button"
            onClick={() => setCcOpen(false)}
          >
            <CrossIcon
              className="stroke-textGray mx-auto"
              width={8}
              hight={8}
            />
          </button>
        </LetterCreatorInput>
      )}
      {bccOpen && (
        <LetterCreatorInput
          value={letter.bcc}
          label={text.bcc}
          onChange={(e) => {
            setLetter((prev) => ({ ...prev, bcc: e.target.value }));
          }}
        >
          <button
            className="w-5 h-5"
            type="button"
            onClick={() => setBccOpen(false)}
          >
            <CrossIcon
              className="stroke-textGray mx-auto"
              width={8}
              hight={8}
            />
          </button>
        </LetterCreatorInput>
      )}
      <LetterCreatorInput
        value={letter.subject}
        label={text.subject}
        onChange={(e) =>
          setLetter((prev) => ({ ...prev, subject: e.target.value }))
        }
      >
        <div className="flex whitespace-nowrap text-textGray text-xs">
          {!ccOpen && (
            <button
              className="underline hover:no-underline"
              type="button"
              onClick={() => setCcOpen(true)}
            >
              {text.cc}
            </button>
          )}
          {!bccOpen && (
            <button
              className="ml-6 underline hover:no-underline"
              type="button"
              onClick={() => setBccOpen(true)}
            >
              {text.bcc}
            </button>
          )}
        </div>
      </LetterCreatorInput>
      <div className="overflow-scroll"></div>
    </div>
  );
}

import { ReactNode, useState } from "react";
import LetterCreationInput from "./LetterCreationInput";
import useTranslation from "../../shared/translation/useTranslation";
import CrossIcon from "../../shared/icons/controls/CrossIcon";

export default function LetterDataInputs({
  widgetControls,
}: {
  widgetControls: ReactNode;
}) {
  const { text } = useTranslation();
  const [ccOpen, setCcOpen] = useState(false);
  const [bccOpen, setBccOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <LetterCreationInput label={text.to}>
        {widgetControls}
      </LetterCreationInput>
      {ccOpen && (
        <LetterCreationInput label={text.cc}>
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
        </LetterCreationInput>
      )}
      {bccOpen && (
        <LetterCreationInput label={text.bcc}>
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
        </LetterCreationInput>
      )}
      <LetterCreationInput label={text.subject}>
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
      </LetterCreationInput>
      <div className="overflow-scroll"></div>
    </div>
  );
}

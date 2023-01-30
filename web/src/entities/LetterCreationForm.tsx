import { ReactNode, useState } from "react";
import LetterCreationInput from "../features/LetterCreationInput";
import useTranslation from "../shared/translation/useTranslation";

export default function LetterCreationForm({
  widgetControls,
}: {
  widgetControls: ReactNode;
}) {
  const { text } = useTranslation();
  const [ccOpen, setCcOpen] = useState(false);
  const [bccOpen, setBccOpen] = useState(false);

  return (
    <form className="flex flex-col h-full">
      <LetterCreationInput label={text.to}>
        {widgetControls}
      </LetterCreationInput>
      {ccOpen && (
        <LetterCreationInput label={text.cc}>
          <button type="button" onClick={() => setCcOpen(false)}>
            x
          </button>
        </LetterCreationInput>
      )}
      {bccOpen && (
        <LetterCreationInput label={text.bcc}>
          <button type="button" onClick={() => setBccOpen(false)}>
            x
          </button>
        </LetterCreationInput>
      )}
      <LetterCreationInput label={text.subject}>
        <div className="flex whitespace-nowrap">
          {!ccOpen && (
            <button type="button" onClick={() => setCcOpen(true)}>
              {text.cc}
            </button>
          )}
          {!bccOpen && (
            <button type="button" onClick={() => setBccOpen(true)}>
              {text.bcc}
            </button>
          )}
        </div>
      </LetterCreationInput>
      <textarea className="h-full w-full resize-none"></textarea>
    </form>
  );
}

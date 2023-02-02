import { FormEvent } from "react";
import useTranslation from "../../../shared/translation/useTranslation";
import Button from "../../../shared/ui/Button";

export default function LetterCreatorControls({
  sendClick,
  cancelClick,
}: {
  sendClick: (e: FormEvent<HTMLFormElement>) => void;
  cancelClick: () => void;
}) {
  const { text } = useTranslation();

  return (
    <div className="flex items-center px-5 h-[70px] border-t-[1px] border-separator">
      <Button
        type="submit"
        onClick={sendClick}
        className="bg-electricBlue text-white border-none w-min px-6 mr-2"
      >
        {text.send}
      </Button>
      <Button
        type="button"
        onClick={cancelClick}
        className="bg-selected text-primaryText border-none w-min px-6"
      >
        {text.cancel}
      </Button>
    </div>
  );
}

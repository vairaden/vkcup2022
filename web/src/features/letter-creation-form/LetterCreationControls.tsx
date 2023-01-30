import useTranslation from "../../shared/translation/useTranslation";
import Button from "../../shared/ui/Button";

export default function LetterCreationControls({
  sendClick,
  saveClick,
  cancelClick,
}: {
  sendClick: () => void;
  saveClick: () => void;
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
        onClick={saveClick}
        className="bg-lightGray border-none w-min px-6 mr-2"
      >
        {text.save}
      </Button>
      <Button
        onClick={cancelClick}
        className="bg-lightGray border-none w-min px-6"
      >
        {text.cancel}
      </Button>
    </div>
  );
}
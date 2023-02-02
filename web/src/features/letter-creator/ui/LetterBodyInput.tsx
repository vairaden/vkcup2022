import { CreatedLetter } from "../../../entities/letter/schemas/letterCreatorSchema";
import useTranslation from "../../../shared/translation/useTranslation";

export default function LetterBodyInput({
  letter,
  setLetter,
}: {
  letter: CreatedLetter;
  setLetter: (fn: (prev: CreatedLetter) => CreatedLetter) => void;
}) {
  const { text } = useTranslation();
  return (
    <div className="bg-white h-full w-full p-6">
      <label className="text-primaryText">
        <textarea
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
            setLetter((prev) => ({ ...prev, body: e.target.value }));
          }}
          className="w-full whitespace-nowrap resize-none outline-none text-black"
          value={letter.body}
        ></textarea>
      </label>
      <label className="flex flex-col text-textGray">
        {text.signature}
        <textarea
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
            setLetter((prev) => ({ ...prev, signature: e.target.value }));
          }}
          value={letter.signature}
          className="w-full resize-none outline-none text-black"
        ></textarea>
      </label>
    </div>
  );
}

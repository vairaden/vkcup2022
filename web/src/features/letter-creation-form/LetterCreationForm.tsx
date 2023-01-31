import { ReactNode, useState } from "react";
import LetterCreationInput from "./LetterCreationInput";
import useTranslation from "../../shared/translation/useTranslation";
import CrossIcon from "../../shared/icons/controls/CrossIcon";
import AttachmentIcon from "../../shared/icons/AttachmentIcon";
import { calculateFileSize } from "../../shared/utils/calculateFileSize";

export default function LetterCreationForm({
  widgetControls,
}: {
  widgetControls: ReactNode;
}) {
  const { text, alt } = useTranslation();
  const [ccOpen, setCcOpen] = useState(false);
  const [bccOpen, setBccOpen] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  return (
    <form className="flex flex-col h-full">
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
      <label className="grid grid-cols-[16rem_auto] items-center h-12 border-b-[1px] border-separator text-primaryText">
        <div className="flex items-center h-8 py-2 px-4 mx-6 rounded-lg hover:bg-hover cursor-pointer">
          <AttachmentIcon className="fill-primaryText mr-2" />
          {text.attachFile}
        </div>
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            if (!e.target.files) return;
            const file = e.target.files[0];
            setAttachments((prev) => [...prev, file]);
          }}
        ></input>
        <div className="flex overflow-x-auto">
          {attachments.map((attachment) => (
            <div className="flex items-center w-[298px] p-2 border-x-[1px] border-separator">
              <img
                className="w-8 h-8 rounded"
                width={32}
                height={32}
                src={URL.createObjectURL(attachment)}
                alt={alt.attachment}
              ></img>
              <p className="text-sm ml-2">
                {attachment.name + " " + calculateFileSize(attachment.size)}
              </p>
            </div>
          ))}
        </div>
      </label>
      <label className="m-6 text-primaryText">
        <textarea className="resize-none bg-elementBg outline-none"></textarea>
      </label>
      <label className="m-6 flex flex-col text-primaryText">
        Подпись
        <textarea className="m-6 resize-none bg-elementBg outline-none"></textarea>
      </label>
    </form>
  );
}

import { ReactNode, useState } from "react";
import LetterCreationInput from "./LetterCreationInput";
import useTranslation from "../../shared/translation/useTranslation";
import CrossIcon from "../../shared/icons/controls/CrossIcon";
import AttachmentIcon from "../../shared/icons/AttachmentIcon";
import { calculateFileSize } from "../../shared/utils/calculateFileSize";
import { v4 } from "uuid";
import DraftsIcon from "../../shared/icons/folder-icons/DraftsIcon";

export default function LetterCreationForm({
  widgetControls,
}: {
  widgetControls: ReactNode;
}) {
  const { text, alt } = useTranslation();
  const [ccOpen, setCcOpen] = useState(false);
  const [bccOpen, setBccOpen] = useState(false);
  const [attachments, setAttachments] = useState<{ id: string; file: File }[]>(
    []
  );

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
      <label className="grid grid-cols-[min-content_auto] items-center h-12 border-b-[1px] border-separator text-primaryText">
        <div className="flex items-center h-8 py-2 px-4 mx-6 my-2 whitespace-nowrap rounded-lg hover:bg-hover cursor-pointer">
          <AttachmentIcon className="fill-primaryText mr-2" />
          {text.attachFile}
        </div>
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            if (!e.target.files) {
              setAttachments([]);
              return;
            }
            const file = e.target.files[0];
            setAttachments((prev) => [...prev, { id: v4(), file }]);
            e.target.value = "";
          }}
        ></input>
        <div className="flex overflow-x-scroll">
          {attachments.length > 0 &&
            attachments.map((attachment) => (
              <div
                className="grid grid-cols-[32px_min-content_20px] items-center p-2 whitespace-nowrap"
                key={attachment.id + attachment.file.name}
              >
                {attachment.file.type.startsWith("image") ? (
                  <img
                    className="w-8 h-8 rounded"
                    width={32}
                    height={32}
                    src={URL.createObjectURL(attachment.file)}
                    alt={alt.attachment}
                  ></img>
                ) : (
                  <DraftsIcon className="fill-primaryText ml-auto" />
                )}
                <p className="text-sm ml-2">
                  {`${attachment.file.name} (${calculateFileSize(
                    attachment.file.size
                  )})`}
                </p>
                <button
                  className="w-5 h-5"
                  type="button"
                  onClick={() => {
                    setAttachments((prev) =>
                      prev.filter(
                        (a) =>
                          a.id !== attachment.id ||
                          a.file.name !== attachment.file.name
                      )
                    );
                  }}
                >
                  <CrossIcon
                    className="stroke-primaryText mx-auto"
                    width={8}
                    hight={8}
                  />
                </button>
              </div>
            ))}
        </div>
      </label>
      <div className="bg-white h-full w-full p-6">
        <label className="text-primaryText">
          <textarea className="w-full resize-none outline-none"></textarea>
        </label>
        <label className="flex flex-col text-textGray">
          Подпись
          <textarea className="w-full resize-none outline-none text-black"></textarea>
        </label>
      </div>
    </form>
  );
}

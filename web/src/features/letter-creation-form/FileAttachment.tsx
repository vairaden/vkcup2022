import { useState } from "react";
import { v4 } from "uuid";
import AttachmentIcon from "../../shared/icons/AttachmentIcon";
import CrossIcon from "../../shared/icons/controls/CrossIcon";
import DraftsIcon from "../../shared/icons/folder-icons/DraftsIcon";
import useTranslation from "../../shared/translation/useTranslation";
import { calculateFileSize } from "../../shared/utils/calculateFileSize";

export default function FileAttachment() {
  const [attachments, setAttachments] = useState<{ id: string; file: File }[]>(
    []
  );

  const { text, alt } = useTranslation();

  return (
    <label className="grid grid-cols-[min-content_auto] grid-rows-1 items-top border-b-[1px] border-separator text-primaryText">
      <div className="flex items-center h-8 py-2 px-4 mx-6 my-2 whitespace-nowrap rounded-lg hover:bg-hover cursor-pointer">
        <AttachmentIcon className="fill-primaryText mr-2" />
        {text.attachFile}
      </div>
      <input
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          setAttachments((prev) => [
            ...prev,
            ...Array.from(e.target.files ? e.target.files : []).map((file) => ({
              id: v4(),
              file,
            })),
          ]);
          e.target.files = null;
        }}
      ></input>
      <div className="flex flex-wrap" onClick={(e) => e.preventDefault()}>
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
      {attachments.length > 0 && (
        <div className="flex items-center" onClick={(e) => e.preventDefault()}>
          {`${attachments.length} ${"File"}, ${calculateFileSize(
            attachments.reduce((acc, cur) => acc + cur.file.size, 0)
          )}`}
          <button
            onClick={() => {
              setAttachments([]);
            }}
            className="underline hover:no-underline"
          >
            Delete all
          </button>
        </div>
      )}
    </label>
  );
}

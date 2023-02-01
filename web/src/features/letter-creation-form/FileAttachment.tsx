import clsx from "clsx";
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
  const [isDraggingFileOver, setIsDraggingFileOver] = useState(false);

  const { text, alt } = useTranslation();

  //* Don't forget to add pointer-events-none to children of label

  function dropHandler(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setIsDraggingFileOver(false);
    if (e.dataTransfer.files.length > 0) {
      setAttachments((prev) => [
        ...prev,
        ...Array.from(e.dataTransfer.files).map((file) => ({
          id: v4(),
          file,
        })),
      ]);
    }
  }

  function dragOverHandler(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
  }
  return (
    <label
      id="file-drop-zone"
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragEnter={(e) => {
        e.preventDefault();
        setIsDraggingFileOver(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setIsDraggingFileOver(false);
      }}
      className={clsx(
        "grid grid-cols-[min-content_auto] grid-rows-1 items-top  text-primaryText",
        {
          "border-b-[1px] border-separator": !isDraggingFileOver,
          "border-2 border-electricBlue": isDraggingFileOver,
        }
      )}
    >
      <div className="pointer-events-none flex items-center h-8 py-2 px-4 mx-6 my-2 whitespace-nowrap rounded-lg hover:bg-hover cursor-pointer">
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
      <div
        className="pointer-events-none flex flex-wrap"
        onClick={(e) => e.preventDefault()}
      >
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
                className="pointer-events-auto w-5 h-5"
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
        <div
          className="pointer-events-none col-span-2 flex items-center text-sm text-textGray mx-10 mb-1"
          onClick={(e) => e.preventDefault()}
        >
          {`${attachments.length} ${"File"}, (${calculateFileSize(
            attachments.reduce((acc, cur) => acc + cur.file.size, 0)
          )})`}
          <button
            onClick={() => {
              setAttachments([]);
            }}
            className="pointer-events-auto underline hover:no-underline ml-2"
          >
            Delete all
          </button>
        </div>
      )}
    </label>
  );
}

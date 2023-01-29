import AttachmentIcon from "../shared/icons/AttachmentIcon";
import DownloadIcon from "../shared/icons/DownloadIcon";
import useThemeStore from "../shared/store/useThemeStore";
import useTranslation from "../shared/translation/useTranslation";

export default function AttachmentsPreview({ doc }: { doc: { img: string } }) {
  function calculateFileSize(file: string) {
    const fileSize = file.length / 1024;

    return fileSize < 1024
      ? `${parseInt(fileSize.toFixed(2))} Kb`
      : `${parseInt((fileSize / 1024).toFixed(2))} Mb`;
  }

  const { text, alt } = useTranslation();
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="z-0 relative group/list">
      {/* attachment list */}
      <div className="absolute bottom-[-50%] left-0 translate-x-[-302px] w-[320px] hidden group-hover/list:block">
        <div className="flex items-center w-[298px] p-2 bg-elementBg rounded-xl shadow-md">
          {/* attachment image */}
          <div className="group/image">
            <div className="absolute bottom-0 left-0 translate-x-[-268px] hidden group-hover/image:block w-[286px]">
              <div className="w-[264px] h-[198px] p-1 rounded-2xl bg-elementBg shadow-md group/download">
                <img
                  className="w-[256px] h-[190px] rounded-xl"
                  src={doc.img}
                  alt={alt.attachment}
                ></img>
                <a
                  className="hidden group-hover/download:flex items-center absolute bottom-2 left-[50%] translate-x-[-50%]"
                  download="attachment.jpg"
                  href={doc.img}
                >
                  <DownloadIcon className="fill-menuText mr-2" />
                  {text.download}
                </a>
              </div>
            </div>
            <img
              className="w-8 h-8 rounded"
              src={doc.img}
              alt={alt.attachment}
            ></img>
          </div>
          <p className="text-sm ml-2">
            attachment.jpg {calculateFileSize(doc.img)}
          </p>
        </div>
      </div>
      <div className="rounded-lg group-hover/list:bg-hover ml-2">
        <AttachmentIcon className="fill-primaryText" />
      </div>
    </div>
  );
}

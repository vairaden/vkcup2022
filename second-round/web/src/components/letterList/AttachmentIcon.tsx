import useTranslation from "../../hooks/useTranslation";

export default function AttachmentIcon({ doc }: { doc: { img: string } }) {
  function calculateFileSize(file: string) {
    const fileSize = file.length / 1024;

    return fileSize < 1024
      ? `${parseInt(fileSize.toFixed(2))} Kb`
      : `${parseInt((fileSize / 1024).toFixed(2))} Mb`;
  }

  const { text } = useTranslation();

  return (
    <div className="z-0 relative group/list my-auto">
      {/* attachment list */}
      <div className="absolute bottom-[-50%] left-0 translate-x-[-302px] w-[320px] hidden group-hover/list:block">
        <div className="flex items-center w-[298px] p-2 bg-white dark:bg-blackBg rounded-xl shadow-md">
          {/* attachment image */}
          <div className="group/image">
            <div className="absolute bottom-0 left-0 translate-x-[-268px] hidden group-hover/image:block w-[286px]">
              <div className="w-[264px] h-[198px] p-1 rounded-2xl bg-white dark:bg-blackBg shadow-md group/download">
                <img
                  className="w-[256px] h-[190px] rounded-xl"
                  src={doc.img}
                  alt="Attachment"
                  loading="lazy"
                ></img>
                <a
                  className="shadow-lg hidden group-hover/download:flex absolute bottom-2 left-[50%] translate-x-[-50%]"
                  download="attachment.jpg"
                  href={doc.img}
                >
                  <img
                    className="mr-2"
                    src="/icons/light/download_outline.svg"
                    alt="Скачать"
                    loading="lazy"
                  ></img>
                  {text.download}
                </a>
              </div>
            </div>
            <img className="w-8 h-8 rounded" src={doc.img} alt="Файлы"></img>
          </div>
          <p className="text-sm ml-2">
            attachment.jpg {calculateFileSize(doc.img)}
          </p>
        </div>
      </div>
      <div className="rounded-lg group-hover/list:bg-[#00103D14]  dark:group-hover/list:dark:bg-[#FFFFFF14]">
        <img
          className="block dark:hidden"
          src="/icons/light/attach_outline_20.svg"
          alt="Файлы"
        ></img>
        <img
          className="hidden dark:block"
          src="/icons/dark/attach_outline_dark_20.svg"
          alt="Файлы"
        ></img>
      </div>
    </div>
  );
}

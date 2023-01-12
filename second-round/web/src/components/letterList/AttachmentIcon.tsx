import useTranslation from "../../hooks/useTranslation";

export default function AttachmentIcon({ doc }: { doc: { img: string } }) {
  function calculateFileSize(file: string) {
    const fileSize = file.length / 1024;

    return fileSize < 1024
      ? `${parseInt(fileSize.toFixed(2))} Kb`
      : `${parseInt((fileSize / 1024).toFixed(2))} Mb`;
  }

  const text = useTranslation();

  return (
    <>
      <div className="group/list my-auto">
        <div className="fixed hidden group-hover/list:block w-[310px] translate-x-[-300px] translate-y-[-45%]">
          <div className="w-[298px] p-2 bg-white dark:bg-blackBg rounded-xl shadow-md">
            <div className="flex items-center mb-2 last:mb-0">
              <div className="group/image">
                <div className="fixed hidden group-hover/image:block w-[272px] translate-x-[-264px] translate-y-[-45%]">
                  <div className="w-[264px] h-[198px] p-1 rounded-xl bg-white dark:bg-blackBg shadow-md group/download">
                    <img
                      className="w-[256px] h-[190px] rounded-xl"
                      src={doc.img}
                      alt="Attachment"
                    ></img>
                    <a
                      className="items-center text-textPrimaryWhite shadow-lg hidden group-hover/download:flex absolute bottom-2 right-[50%] transform translate-x-1/2"
                      download="attachment.jpg"
                      href={doc.img}
                    >
                      <img
                        className="mr-2"
                        src="/download_outline.svg"
                        alt="Скачать"
                      ></img>
                      {text.download}
                    </a>
                  </div>
                </div>
                <img
                  className="w-8 h-8 rounded"
                  src={doc.img}
                  alt="Файлы"
                ></img>
              </div>
              <p className="text-sm ml-2">
                attachment.jpg {calculateFileSize(doc.img)}
              </p>
            </div>
          </div>
        </div>
        <img
          className="ml-1 block dark:hidden"
          src="/attach_outline_20.svg"
          alt="Файлы"
        ></img>
        <img
          className="ml-1 hidden dark:block"
          src="/attach_outline_dark_20.svg"
          alt="Файлы"
        ></img>
      </div>
    </>
  );
}

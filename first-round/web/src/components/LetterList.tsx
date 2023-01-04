import LetterThumbnail from "./LetterThumbnail";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../api";
import Letter from "../dtos";

export async function folderLoader({ params }: { params: any }) {
  const folderName = params.folderName ?? "inbox";
  return {
    data: (await fetchData(folderName)) ?? [],
    folderName,
  };
}

export default function LetterList() {
  const { data, folderName } = useLoaderData() as {
    data: Letter[];
    folderName: string;
  };

  return (
    <>
      <header className="fixed left-0 top-0 h-14 px-4 py-3 w-[100vw] bg-white dark:bg-darkGray shadow-sm">
        <img
          className="block sm:hidden"
          src="/mailru_logo_no_letters.svg"
          alt="Mail ru logo"
        ></img>
        <img
          className="hidden sm:block dark:hidden"
          src="/mailru_logo.svg"
          alt="Mail ru logo"
        ></img>
        <img
          className="hidden sm:dark:block"
          src="/mailru_logo_dark.svg"
          alt="Mail ru logo"
        ></img>
      </header>
      <section className="mb-3 bg-white dark:bg-darkGray rounded-xl">
        <ul>
          {data.map((letterData, index) => (
            <>
              <LetterThumbnail
                to={`/${folderName}/${index}`}
                key={letterData.text}
                data={letterData}
              />
              <div className="h-[1px] mx-auto w-[85%] bg-separatorGray dark:bg-black last:hidden"></div>
            </>
          ))}
        </ul>
      </section>
    </>
  );
}
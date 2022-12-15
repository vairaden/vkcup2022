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
  console.log(data);

  return (
    <section>
      <div className="bg-white rounded-xl">
        <ul>
          {data.map((letterData, index) => (
            <LetterThumbnail
              to={`/${folderName}/${index}`}
              key={letterData.text}
              data={letterData}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

import { useLoaderData } from "react-router-dom";
import { fetchLetter } from "../api";
import Letter from "../dtos";

export async function letterLoader({ params }: { params: any }) {
  return await fetchLetter(params.folderName, params.letterId);
}

export default function LetterCard() {
  const data = useLoaderData() as Letter;
  return (
    <section className="rounded-xl bg-white">
      <h1 className="font-bold text-2xl">{data.title}</h1>
      <div className="w-[16rem] flex items-center">
        {data.author.avatar && (
          <img
            className="h-8 w-8 rounded-2xl mr-2"
            src={data.author.avatar}
            alt="avatar"
          />
        )}
        <h2 className="mr-2 truncate">
          {data.author.name + " " + data.author.surname}
        </h2>
      </div>
      {data.doc && (
        <img
          className="w-[256px] h-[190px]"
          src={data.doc.img}
          alt="Attachment"
        ></img>
      )}
      <p className="text-sm">{data.text}</p>
    </section>
  );
}

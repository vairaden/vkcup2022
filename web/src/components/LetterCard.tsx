import { useLoaderData } from "react-router-dom";

export async function letterLoader({ params }: { params: any }) {
  // return fetchData(params.folderName);
  return params.folderName;
}

export default function LetterCard() {
  const data = useLoaderData() as string;
  return (
    <section className="ml-[236px] mt-[68px] pr-3 w-[100%] rounded-xl bg-white">
      <h2>{data}</h2>
    </section>
  );
}

import { useLoaderData } from "react-router-dom";

export async function letterLoader({ params }: { params: any }) {
  // return fetchData(params.folderName);
  return params.folderName;
}

export default function LetterCard() {
  const data = useLoaderData() as string;
  return (
    <h1 className="ml-[236px] mt-[56px] py-3 pr-3 w-[100%]">Letter card</h1>
  );
}

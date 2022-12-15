import Letter from "../dtos";

async function fetchData(folderName: string) {
  const res = await fetch(`http://localhost:3000/api/${folderName}`, {
    method: "GET",
  });
  const letters = (await res.json()) as Letter[];
  return letters;
}

export default fetchData;

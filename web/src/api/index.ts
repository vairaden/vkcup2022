import Letter from "../dtos";

async function fetchData(folderName: string) {
  const res = await fetch(`http://localhost:3000/api/${folderName}`, {
    method: "GET",
  });
  const letters = (await res.json()) as Letter[];
  return letters;
}

async function fetchLetter(folderName: string, letterId: string) {
  const res = await fetch(
    `http://localhost:3000/api/${folderName}/${letterId}`,
    {
      method: "GET",
    }
  );
  const letter = (await res.json()) as Letter;
  console.log(letter);
  return letter;
}

export { fetchData, fetchLetter };

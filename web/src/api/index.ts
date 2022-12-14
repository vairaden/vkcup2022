interface Letter {
  author: {
    name: string;
    surname: string;
    email: string;
    avatar?: string;
  };
  to: {
    name: string;
    surname: string;
    email: string;
    avatar?: string;
  }[];
  title: string;
  text: string;
  bookmark: boolean;
  important: boolean;
  read: boolean;
  folder?: string;
  date: string;
  doc?: {
    img: string;
  };
}

async function fetchData() {
  const res = await fetch("http://localhost:3000/api", {
    method: "GET",
  });
  const letters = (await res.json()) as Letter[];
  return letters;
}

export { fetchData };

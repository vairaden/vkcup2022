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

  const reader = res.body?.getReader();
  const contentLength = +res.headers.get("Content-Length");
  let receivedLength = 0;
  let chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
    receivedLength += value.length;
    console.log(`Получено ${receivedLength} из ${contentLength}`);
  }
  let chunksAll = new Uint8Array(receivedLength);
  let position = 0;
  for (let chunk of chunks) {
    chunksAll.set(chunk, position);
    position += chunk.length;
  }
  let result = new TextDecoder("utf-8").decode(chunksAll);
  let letters = JSON.parse(result);

  console.dir(letters);
}

export { fetchData };

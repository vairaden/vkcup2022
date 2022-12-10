import { useState } from "react";

export default function App() {
  const [data, setData] = useState();

  return (
    <>
      <button onClick={fetchData}>Fetch data</button>
      <p>lol kek</p>
    </>
  );
}

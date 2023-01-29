import { useState } from "react";
import useMenuStore from "../../shared/store/useMenuStore";

export default function LetterCreator() {
  const toggleLetterCreatorOpen = useMenuStore(
    (state) => state.toggleLetterCreatorOpen
  );

  const [letter, setLetter] = useState({
    title: "",
    body: "",
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLetter({
      ...letter,
      title: event.target.value,
    });
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLetter({
      ...letter,
      body: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(letter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={letter.title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Body"
        value={letter.body}
        onChange={handleBodyChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

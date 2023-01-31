export default function LetterBodyInput() {
  return (
    <div className="bg-white h-full w-full p-6">
      <label className="text-primaryText">
        <textarea
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          className="w-full whitespace-nowrap resize-none outline-none"
        ></textarea>
      </label>
      <label className="flex flex-col text-textGray">
        Подпись
        <textarea
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          defaultValue={`--\nС уважением, Иван Иванов`}
          className="w-full resize-none outline-none text-black"
        ></textarea>
      </label>
    </div>
  );
}

export default function AttachmentIcon({ doc }: { doc: { img: string } }) {
  return (
    <>
      <div>
        <div>
          <img src={doc.img} alt="Файлы"></img>
        </div>
      </div>
      <img src="/attach_outline_20.svg" alt="Файлы"></img>
    </>
  );
}

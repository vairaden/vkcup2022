import Button from "./Button";
import LinkButton from "./LinkButton";

const folderList = {
  inbox: "Входящие",
  important: "Важные",
  sent: "Отправленные",
  drafts: "Черновики",
  archive: "Архив",
  junk: "Спам",
  trash: "Корзина",
};

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-between px-4 py-3 w-[232px] h-[calc(100vh-56px)]">
      <div>
        <Button className="mb-3">Написать письмо</Button>
        <ul>
          <li>
            <LinkButton to="/inbox" selected>
              <img src="/inbox_outline_20.svg" alt="Inbox icon"></img>
              Входящие
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/important">
              <img src="/important_outline_20.svg" alt="Important icon"></img>
              Важные
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/sent">
              <img src="/sent_outline_20.svg" alt="Sent icon"></img>
              Отправленные
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/drafts">
              <img src="/drafts_outline_20.svg" alt="Drafts icon"></img>
              Черновики
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/archive">
              <img src="/archive_outline_20.svg" alt="Archive icon"></img>
              Архив
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/junk">
              <img src="/junk_outline_20.svg" alt="Junk icon"></img>
              Спам
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/trash">
              <img src="/trash_outline_20.svg" alt="Trash icon"></img>
              Корзина
            </LinkButton>
          </li>
        </ul>
      </div>
      <button>Тема:</button>
    </nav>
  );
}

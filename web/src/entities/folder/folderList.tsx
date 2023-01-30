import ArchiveIcon from "../../shared/icons/folder-icons/ArchiveIcon";
import DraftsIcon from "../../shared/icons/folder-icons/DraftsIcon";
import FolderIcon from "../../shared/icons/folder-icons/FolderIcon";
import InboxIcon from "../../shared/icons/folder-icons/InboxIcon";
import SentIcon from "../../shared/icons/folder-icons/SentIcon";
import JunkIcon from "../../shared/icons/folder-icons/JunkIcon";
import TrashIcon from "../../shared/icons/folder-icons/TrashIcon";

export default [
  {
    route: "/",
    name: "inbox",
    flag: "Входящие",
    icon: <InboxIcon className="fill-menuText" />,
  },
  {
    route: "/important",
    name: "important",
    flag: "Важные",
    icon: <FolderIcon className="fill-menuText" />,
  },
  {
    route: "/sent",
    name: "sent",
    flag: "Отправленные",
    icon: <SentIcon className="fill-menuText" />,
  },
  {
    route: "/drafts",
    name: "drafts",
    flag: "Черновики",
    icon: <DraftsIcon className="fill-menuText" />,
  },
  {
    route: "/archive",
    name: "archive",
    flag: "Архив",
    icon: <ArchiveIcon className="fill-menuText" />,
  },
  {
    route: "/junk",
    name: "junk",
    flag: "Спам",
    icon: <JunkIcon className="fill-menuText" />,
  },
  {
    route: "/trash",
    name: "trash",
    flag: "Корзина",
    icon: <TrashIcon className="fill-menuText" />,
  },
];

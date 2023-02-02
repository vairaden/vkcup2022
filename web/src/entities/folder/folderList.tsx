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
  },
  {
    route: "/important",
    name: "important",
    flag: "Важные",
  },
  {
    route: "/sent",
    name: "sent",
    flag: "Отправленные",
  },
  {
    route: "/drafts",
    name: "drafts",
    flag: "Черновики",
  },
  {
    route: "/archive",
    name: "archive",
    flag: "Архив",
  },
  {
    route: "/junk",
    name: "junk",
    flag: "Спам",
  },
  {
    route: "/trash",
    name: "trash",
    flag: "Корзина",
  },
];

export function StandardFolderIcons({
  className,
  folderName,
}: {
  className?: string;
  folderName: string;
}) {
  return folderName === "inbox" ? (
    <InboxIcon className={className} />
  ) : folderName === "important" ? (
    <FolderIcon className={className} />
  ) : folderName === "sent" ? (
    <SentIcon className={className} />
  ) : folderName === "drafts" ? (
    <DraftsIcon className={className} />
  ) : folderName === "archive" ? (
    <ArchiveIcon className={className} />
  ) : folderName === "junk" ? (
    <JunkIcon className={className} />
  ) : folderName === "trash" ? (
    <TrashIcon className={className} />
  ) : (
    <FolderIcon className={className} />
  );
}

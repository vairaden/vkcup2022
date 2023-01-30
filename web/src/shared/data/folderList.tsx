import ArchiveIcon from "../icons/folder-icons/ArchiveIcon";
import DraftsIcon from "../icons/folder-icons/DraftsIcon";
import FolderIcon from "../icons/folder-icons/FolderIcon";
import InboxIcon from "../icons/folder-icons/InboxIcon";
import SentIcon from "../icons/folder-icons/SentIcon";
import JunkIcon from "../icons/folder-icons/JunkIcon";
import TrashIcon from "../icons/folder-icons/TrashIcon";

export default [
  {
    route: "/",
    name: "inbox",
    icon: <InboxIcon className="fill-menuText" />,
  },
  {
    route: "/important",
    name: "important",
    icon: <FolderIcon className="fill-menuText" />,
  },
  {
    route: "/sent",
    name: "sent",
    icon: <SentIcon className="fill-menuText" />,
  },
  {
    route: "/drafts",
    name: "drafts",
    icon: <DraftsIcon className="fill-menuText" />,
  },
  {
    route: "/archive",
    name: "archive",
    icon: <ArchiveIcon className="fill-menuText" />,
  },
  {
    route: "/junk",
    name: "junk",
    icon: <JunkIcon className="fill-menuText" />,
  },
  {
    route: "/trash",
    name: "trash",
    icon: <TrashIcon className="fill-menuText" />,
  },
];

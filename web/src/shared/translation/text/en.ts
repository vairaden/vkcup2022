import { TranslationText } from "./ru";

const textEn: TranslationText = {
  // general
  letterNotFound: "Letter not found",
  loading: "Loading...",
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  today: "Today",
  to: "To",
  subject: "Subject",
  cc: "Cc",
  bcc: "Bcc",
  file: (count: number) => {
    if (count === 1) {
      return "File";
    } else if (count > 1 && count < 5) {
      return "Files";
    } else {
      return "Files";
    }
  },
  letter: (count: number) => {
    if (count === 1) {
      return "Letter";
    } else if (count > 1 && count < 5) {
      return "Letters";
    } else {
      return "Letters";
    }
  },
  // controls
  send: "Send",
  save: "Save",
  attachFile: "Attach file",
  cancel: "Cancel",
  deleteAll: "Delete all",
  move: "Move",
  selectAll: "Select all",
  deselectAll: "Deselect all",
  // filters
  filter: "Filter",
  filterAll: "All letters",
  filterUnread: "Unread",
  filterBookmarked: "Bookmarked",
  filterWithAttachments: "With attachments",
  resetAll: "Reset all",
  // sort
  sort: "Sorting",
  sortDateAsc: "Newest on top",
  sortDateDesc: "Oldest on top",
  sortAuthorAsc: "Sender: A to Z",
  sortAuthorDesc: "Sender: Z to A",
  sortTitleAsc: "Subject: A to Z",
  sortTitleDesc: "Subject: Z to A",
  // folders
  composeLetter: "Compose a letter",
  inboxFolder: "Inbox",
  importantFolder: "Important",
  sentFolder: "Sent",
  draftsFolder: "Drafts",
  archiveFolder: "Archive",
  junkFolder: "Spam",
  trashFolder: "Trash",
  newFolder: "New folder",
  // letterView
  back: "Back",
  // attachments
  download: "Download",
  // settings
  settings: "Settings",
  // theme setting
  theme: "Theme",
  themeMenu: "Settings for the appearance of your mail and the theme",
  // language setting
  language: "Language",
  changeLanguage: "Change language",
  selectLanguage: "Select language",
};

export default textEn;

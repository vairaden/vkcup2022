import { useAtom } from "jotai";
import { languageAtom } from "../store/language";

export default function useTranslation() {
  const text = {
    ru: {
      // general
      loading: "Загрузка...",
      months: [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ],
      // filters
      filter: "Фильтр",
      filterAll: "Все письма",
      filterUnread: "Непрочитанные",
      filterBookmarked: "С флажком",
      filterWithAttachments: "С вложениями",
      // folders
      writeLetter: "Написать письмо",
      inboxFolder: "Входящие",
      importantFolder: "Важные",
      sentFolder: "Отправленные",
      draftsFolder: "Черновики",
      archiveFolder: "Архив",
      junkFolder: "Спам",
      trashFolder: "Корзина",
      newFolder: "Новая папка",
      // letterView
      back: "Вернуться",
      // attachments
      download: "Скачать",
      // settings
      settings: "Настройки",
      // theme setting
      theme: "Внешний вид",
      themeMenu: "Настройки внешнего вида вашей почты и темы оформления",
      // language setting
      language: "Язык",
      changeLanguage: "Изменить язык",
      selectLanguage: "Выбрать язык",
    },
    en: {
      // general
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
      // filters
      filter: "Filter",
      filterAll: "All letters",
      filterUnread: "Unread",
      filterBookmarked: "Bookmarked",
      filterWithAttachments: "With attachments",
      // folders
      writeLetter: "Write a letter",
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
    },
  };

  const [language] = useAtom(languageAtom);

  return (text[language] || text.ru) as typeof text.ru;
}

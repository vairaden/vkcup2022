const textRu = {
  // general
  letterNotFound: "Письмо не найдено",
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
  today: "Сегодня",
  to: "Кому",
  subject: "Тема",
  cc: "Копия",
  bcc: "Скрытая",
  signature: "Подпись",
  file: (count: number): string => {
    if (count === 1) {
      return "Файл";
    } else if (count > 1 && count < 5) {
      return "Файла";
    } else {
      return "Файлов";
    }
  },
  letter: (count: number): string => {
    if (count === 1) {
      return "Письмо";
    } else if (count > 1 && count < 5) {
      return "Письма";
    } else {
      return "Писем";
    }
  },
  folderName: "Название папки",
  // controls
  send: "Отправить",
  save: "Сохранить",
  attachFile: "Прикрепить файл",
  cancel: "Отмена",
  deleteAll: "Удалить все",
  move: "Переместить",
  selectAll: "Выбрать все",
  deselectAll: "Снять выбор",
  addFolder: "Добавить папку",
  // filters
  filter: "Фильтр",
  filterAll: "Все письма",
  filterUnread: "Непрочитанные",
  filterBookmarked: "С флажком",
  filterWithAttachments: "С вложениями",
  resetAll: "Сбросить все",
  // sort
  sort: "Сортировка",
  sortDateAsc: "Cначала новые",
  sortDateDesc: "Cначала старые",
  sortAuthorAsc: "Автор: от А до Я",
  sortAuthorDesc: "Автор: от Я до А",
  sortTitleAsc: "Тема: от А до Я",
  sortTitleDesc: "Тема: от Я до А",
  // folders
  composeLetter: "Написать письмо",
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
};

export type TranslationText = typeof textRu;

export default textRu;

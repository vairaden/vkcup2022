import { Link } from "react-router-dom";
import Letter from "../../dtos";
import AttachmentIcon from "./AttachmentIcon";

const months = [
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
];

export default function LetterThumbnail({
  data,
  to,
}: {
  data: Letter;
  to: string;
}) {
  function formatDate(date: string) {
    const dateObj = new Date(date);
    if (dateObj.toDateString() === new Date().toDateString()) {
      return `${dateObj.getHours()}:${
        dateObj.getMinutes() < 10 ? "0" : ""
      }${dateObj.getMinutes()}`;
    }
    return `${dateObj.getDate()} ${months[dateObj.getMonth()]}`;
  }

  return (
    <li className="flex justify-between h-12 rounded-xl hover:bg-grayHover dark:hover:bg-darkHover dark:text-textPrimaryWhite">
      <Link to={to} className="flex">
        <div className="flex items-center h-12 w-[16rem] mr-2">
          <div
            className={`mx-2 h-[6px] w-[6px] rounded-md ${
              !data.read && "bg-electricBlue"
            }`}
          ></div>
          {data.author.avatar && (
            <img
              className="h-8 w-8 rounded-2xl mr-2"
              src={data.author.avatar}
              alt="avatar"
            />
          )}
          <h2 className={`mr-2 truncate ${!data.read && "font-bold"}`}>
            {data.author.name + " " + data.author.surname}
          </h2>
          <div className="ml-auto">
            {data.important ? (
              <img src="/important_20.svg" alt="Важное"></img>
            ) : (
              data.bookmark && <img src="/bookmark_20.svg" alt="Закладка"></img>
            )}
          </div>
        </div>
        <div className="flex text-sm w-[30vw] md:w-[40vw] items-center whitespace-nowrap">
          <p className={`mr-3 truncate w-[40%] ${!data.read && "font-bold"}`}>
            {data.title}
          </p>
          <p className="truncate w-[60%] text-textGray">{data.text}</p>
        </div>
      </Link>
      <div className="flex">
        <div className="flex items-center">
          {data.flag === "Заказы" ? (
            <img src="/shopping_cart_outline_20.svg" alt="Заказы"></img>
          ) : data.flag === "Финансы" ? (
            <img src="/money_ruble_outline_20.svg" alt="Финансы"></img>
          ) : data.flag === "Регистрации" ? (
            <img src="/key_outline_20.svg" alt="Регистрации"></img>
          ) : data.flag === "Путешествия" ? (
            <img src="/plane_outline_20.svg" alt="Путешествия"></img>
          ) : data.flag === "Билеты" ? (
            <img src="/ticket_outline_20.svg" alt="Билеты"></img>
          ) : (
            data.flag === "Штрафы и налоги" && (
              <img src="/government_outline_20.svg" alt="Штрафы и налоги"></img>
            )
          )}
        </div>
        {data.doc && <AttachmentIcon doc={data.doc} />}
        <div className="my-auto p-3 w-20 text-right text-textGray">
          {formatDate(data.date)}
        </div>
      </div>
    </li>
  );
}

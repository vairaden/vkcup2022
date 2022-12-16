import { Link } from "react-router-dom";
import Letter from "../dtos";
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
    <li>
      <Link
        to={to}
        className="flex h-12 rounded-xl hover:bg-grayHover whitespace-nowrap dark:text-white"
      >
        <div className="flex items-center w-[16rem]">
          <div
            className={`mx-2 h-[6px] w-[6px] rounded-md ${
              data.read && "bg-electricBlue"
            }`}
          ></div>
          {data.author.avatar && (
            <img
              className="h-8 w-8 rounded-2xl mr-2"
              src={data.author.avatar}
              alt="avatar"
            />
          )}
          <h2 className="mr-2 truncate">
            {data.author.name + " " + data.author.surname}
          </h2>
          <div className="ml-auto mr-2">
            {data.important ? (
              <img src="/important_20.svg" alt="Важное"></img>
            ) : (
              data.bookmark && <img src="/bookmark_20.svg" alt="Закладка"></img>
            )}
          </div>
        </div>
        <div className="flex text-sm items-center w-[40%]">
          <p className="mr-3 font-bold truncate w-[60%]">{data.title}</p>
          <p className="truncate w-[40%]">{data.text}</p>
        </div>
        <div className="flex items-center justify-end mr-4 ml-auto w-12">
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
          {data.doc && <AttachmentIcon doc={data.doc} />}
        </div>
        <div className="flex items-center justify-end mr-4 w-14">
          {formatDate(data.date)}
        </div>
      </Link>
      <div className="h-[1px] mx-auto w-[85%] bg-gray-200"></div>
    </li>
  );
}

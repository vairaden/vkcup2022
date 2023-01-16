import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import Letter from "../../dtos";
import useTranslation from "../../hooks/useTranslation";
import AttachmentIcon from "./AttachmentIcon";

export default function LetterThumbnail({
  data,
  to,
}: {
  data: Letter;
  to: string;
}) {
  const [selected, setSelected] = useState(false);
  const { text, alt } = useTranslation();

  function formatDate(date: string) {
    const dateObj = new Date(date);
    if (dateObj.toDateString() === new Date().toDateString()) {
      return `${dateObj.getHours()}:${
        dateObj.getMinutes() < 10 ? "0" : ""
      }${dateObj.getMinutes()}`;
    }
    return `${dateObj.getDate()} ${text.months[dateObj.getMonth()]}`;
  }

  return (
    <article
      className={`group/letter grid grid-cols-[22px_40px_12rem_40px_minmax(0,auto)_minmax(0,auto)_minmax(0,auto)_5rem]
       w-full h-12 rounded-xl hover:bg-hover text-sm text-primaryText ${
         selected && "bg-selected hover:bg-selected"
       }`}
    >
      {/* Unread icon */}
      <Link to={to} className="flex items-center">
        <div
          className={`mx-2 h-[6px] w-[6px] rounded-md group-hover/letter:bg-darkGray ${
            !data.read && "bg-electricBlue group-hover/letter:bg-electricBlue"
          }`}
        ></div>
      </Link>
      {/* Avatar */}
      <div className="flex items-center">
        {data.author.avatar ? (
          <img
            className="h-8 w-8 rounded-2xl mr-2 group-hover/letter:hidden"
            src={data.author.avatar}
            alt={alt.avatar}
          />
        ) : (
          <div className="group-hover/letter:hidden flex items-center justify-center h-8 w-8 rounded-2xl mr-2 bg-[#FFB980] text-[#C25C21] text-center text-[12px]">
            {data.author.name[0]}
          </div>
        )}
        <div className="hidden group-hover/letter:block h-8 w-8 mr-2">
          <label>
            <input
              type="checkbox"
              className="w-4 h-4 m-2 mb-3"
              checked={selected}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSelected(e.target.checked)
              }
            />
          </label>
        </div>
      </div>
      {/* Author name */}
      <Link to={to} className="flex items-center">
        <h2 className={`mr-2 truncate ${!data.read && "font-bold"}`}>
          {data.author.name + " " + data.author.surname}
        </h2>
      </Link>
      {/* Flags */}
      <Link to={to} className="flex items-center">
        {data.important ? (
          <img
            src="/letter_indicators/important_20.svg"
            alt={alt.important}
          ></img>
        ) : (
          data.bookmark && (
            <img
              src="/letter_indicators/bookmark_20.svg"
              alt={alt.bookmark}
            ></img>
          )
        )}
      </Link>
      {/* Title */}
      <Link to={to}>
        <p className="leading-[48px] align-middle truncate">
          <span className={`mr-3 ${!data.read && "font-bold"}`}>
            {data.title}
          </span>
          <span className="text-textGray">{data.text}</span>
        </p>
      </Link>
      {/* Letter flags */}
      <Link to={to} className="flex ml-8">
        {data.flag === "Заказы" ? (
          <img
            src="/letter_indicators/shopping_cart_outline_20.svg"
            alt={alt.orders}
          ></img>
        ) : data.flag === "Финансы" ? (
          <img
            src="/letter_indicators/money_ruble_outline_20.svg"
            alt={alt.finance}
          ></img>
        ) : data.flag === "Регистрации" ? (
          <img
            src="/letter_indicators/key_outline_20.svg"
            alt={alt.registrations}
          ></img>
        ) : data.flag === "Путешествия" ? (
          <img
            src="/letter_indicators/plane_outline_20.svg"
            alt={alt.travels}
          ></img>
        ) : data.flag === "Билеты" ? (
          <img
            src="/letter_indicators/ticket_outline_20.svg"
            alt={alt.tickets}
          ></img>
        ) : (
          data.flag === "Штрафы и налоги" && (
            <img
              src="/letter_indicators/government_outline_20.svg"
              alt={alt.finesAndTaxes}
            ></img>
          )
        )}
      </Link>
      <div className="flex items-center">
        {data.doc && <AttachmentIcon doc={data.doc} />}
      </div>
      {/* Date */}
      <Link to={to} className="px-3">
        <p className="leading-[48px] align-middle text-right text-textGray">
          {formatDate(data.date)}
        </p>
      </Link>
    </article>
  );
}

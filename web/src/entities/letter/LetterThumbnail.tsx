import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Letter } from "./letterSchema";
import useTranslation from "../../shared/translation/useTranslation";
import AttachmentsPreview from "./AttachmentsPreview";
import ShoppingCartIcon from "../../shared/icons/letter-indicators/ShoppingCartIcon";
import MoneyIcon from "../../shared/icons/letter-indicators/MoneyIcon";
import KeyIcon from "../../shared/icons/letter-indicators/KeyIcon";
import PlaneIcon from "../../shared/icons/letter-indicators/PlaneIcon";
import TicketIcon from "../../shared/icons/letter-indicators/TicketIcon";
import BookmarkIcon from "../../shared/icons/letter-indicators/BookmarkIcon";
import GovernmentIcon from "../../shared/icons/letter-indicators/GovernmentIcon";
import ImportantIcon from "../../shared/icons/letter-indicators/ImportantIcon";
import { useDrag } from "react-dnd";

export default function LetterThumbnail({
  className,
  data,
  to,
  selected,
  setSelected,
}: {
  className?: string;
  data: Letter;
  to: string;
  selected: boolean;
  setSelected: (id: number, selected: boolean) => void;
}) {
  const [contextMenu, setContextMenu] = useState({ isOpen: false, x: 0, y: 0 });

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

  const [, drag, preview] = useDrag(() => ({
    type: "letter",
    item: {
      id: data.id,
      folder: data.folder,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <article
      ref={drag}
      className={clsx(
        "group/letter grid grid-cols-[22px_2.5rem_14rem_40px_minmax(0,auto)_minmax(0,auto)_minmax(0,auto)_5rem] w-full h-12 \
        transition-colors text-sm text-primaryText",
        className,
        {
          "hover:bg-hover": !selected,
          "bg-selected hover:bg-selected": selected,
        }
      )}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      {/* Unread icon */}
      <Link to={to} className="flex items-center">
        <div
          className={clsx("mx-2 h-[6px] w-[6px] rounded-md", {
            "group-hover/letter:bg-darkGray": data.read,
            "bg-electricBlue group-hover/letter:bg-electricBlue": !data.read,
          })}
        ></div>
      </Link>
      {/* Avatar */}
      <div className="relative mr-2">
        <div
          className="w-8 h-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          group-hover/letter:scale-0 transition-all duration-100"
        >
          {data.author.avatar ? (
            <img
              className="rounded-2xl w-8 h-8"
              width={32}
              height={32}
              src={data.author.avatar}
              alt={alt.avatar}
            />
          ) : (
            <div className="flex items-center justify-center w-8 h-8 rounded-2xl bg-[#FFB980] text-[#C25C21] text-center text-[12px]">
              {data.author.name[0]}
            </div>
          )}
        </div>
        <label
          className="w-4 h-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          scale-0 group-hover/letter:scale-100 transition-all duration-100"
        >
          <input
            type="checkbox"
            className="w-4 h-4 cursor-pointer"
            checked={selected}
            onChange={(e) => setSelected(data.id, e.target.checked)}
          />
        </label>
      </div>
      {/* Author name */}
      <Link to={to} className="flex items-center">
        <h2
          ref={preview}
          className={clsx("mr-2 truncate", {
            "font-bold": !data.read,
          })}
        >
          {data.author.name + " " + data.author.surname}
        </h2>
      </Link>
      {/* Flags */}
      <Link to={to} className="flex items-center">
        {data.important ? (
          <ImportantIcon />
        ) : (
          <BookmarkIcon
            className={clsx(
              "group-hover/letter:fill-hover group-hover/letter:stroke-darkGray group-hover/letter:stroke-2",
              {
                "hidden group-hover/letter:block": !data.bookmark,
              }
            )}
          />
        )}
      </Link>
      {/* Title and body */}
      <Link to={to}>
        <p className="leading-[48px] align-middle truncate">
          <span className={`mr-3 ${!data.read && "font-bold"}`}>
            {data.title}
          </span>
          <span className="text-textGray">{data.text}</span>
        </p>
      </Link>
      {/* Letter flags */}
      <Link to={to} className="flex items-center ml-8">
        {data.flag === "Заказы" ? (
          <ShoppingCartIcon />
        ) : data.flag === "Финансы" ? (
          <MoneyIcon />
        ) : data.flag === "Регистрации" ? (
          <KeyIcon />
        ) : data.flag === "Путешевствия" ? (
          <PlaneIcon />
        ) : data.flag === "Билеты" ? (
          <TicketIcon />
        ) : (
          data.flag === "Штрафы и налоги" && <GovernmentIcon />
        )}
      </Link>
      <div className="flex items-center">
        {data.doc && <AttachmentsPreview doc={data.doc} />}
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

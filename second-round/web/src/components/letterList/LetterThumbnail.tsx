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
    <article className="grid grid-cols-[20rem_auto_auto_auto_5rem] w-full h-12 rounded-xl hover:bg-grayHover dark:hover:bg-darkHover dark:text-textPrimaryWhite">
      <Link to={to} className="flex">
        <div className="flex items-center h-12 mr-2">
          <div
            className={`mx-2 h-[6px] w-[6px] rounded-md ${
              !data.read && "bg-electricBlue"
            }`}
          ></div>
          {data.author.avatar ? (
            <img
              className="h-8 w-8 rounded-2xl mr-2"
              src={data.author.avatar}
              alt={alt.avatar}
            />
          ) : (
            <div className="flex items-center justify-center h-8 w-8 rounded-2xl mr-2 bg-[#FFB980] text-[#C25C21] text-center text-[12px]">
              {data.author.name[0]}
            </div>
          )}
          <h2 className={`mr-2 truncate w-48 ${!data.read && "font-bold"}`}>
            {data.author.name + " " + data.author.surname}
          </h2>
          <div className="ml-auto w-5">
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
          </div>
        </div>
      </Link>
      <p className={`mr-3 truncate ${!data.read && "font-bold"}`}>
        {data.title}
      </p>
      <p className="truncate text-textGray">{data.text}</p>
      <div className="mr-1 flex items-center">
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
        {data.doc && <AttachmentIcon doc={data.doc} />}
      </div>
      <div className="my-auto p-3 w-20 text-right text-textGray">
        {formatDate(data.date)}
      </div>
    </article>
  );
}

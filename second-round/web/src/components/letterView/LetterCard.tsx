import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchLetterById } from "../../api";
import useFilterStore from "../../hooks/useFilterStore";
import useTranslation from "../../hooks/useTranslation";

function calculateFileSize(file: string) {
  const fileSize = file.length / 1024;

  return fileSize < 1024
    ? `${parseInt(fileSize.toFixed(2))}Kb`
    : `${parseInt((fileSize / 1024).toFixed(2))}Mb`;
}

export default function LetterCard() {
  const folderName = useParams().folderName || "inbox";
  const letterId = useParams().letterId || "0";

  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );

  const { text, alt } = useTranslation();

  function formatDate(date: string) {
    const dateObj = new Date(date);

    return `${
      dateObj.toDateString() === new Date().toDateString()
        ? "Сегодня"
        : `${dateObj.getDate()} ${text.months[dateObj.getMonth()]}`
    }, ${dateObj.getHours()}:${
      dateObj.getMinutes() < 10 ? "0" : ""
    }${dateObj.getMinutes()}`;
  }

  const { data, isLoading } = useQuery(
    [
      "letter",
      folderName,
      letterId,
      filterUnread,
      filterBookmarked,
      filterWithAttachments,
    ],
    () =>
      fetchLetterById(
        folderName,
        letterId,
        filterUnread,
        filterBookmarked,
        filterWithAttachments
      )
  );

  return isLoading ? (
    <div className="flex justify-center items-center h-screen text-menuText">
      <h2>{text.loading}</h2>
    </div>
  ) : !data ? (
    <div className="flex justify-center items-center h-screen text-menuText">
      <h2>{text.letterNotFound}</h2>
    </div>
  ) : (
    <section className="mb-3 rounded-xl bg-elementBg text-primaryText">
      <div className="flex items-center justify-between mr-4 ml-auto">
        <h1 className="font-bold text-2xl px-8 py-4">{data.title}</h1>
        <div className="flex items-center">
          {data.flag === "Заказы" ? (
            <>
              <img
                src="/letter_indicators/shopping_cart_outline_20.svg"
                alt={alt.orders}
              ></img>
              <p className="m-4 text-sm">{data.flag}</p>
            </>
          ) : data.flag === "Финансы" ? (
            <>
              <img
                src="/letter_indicators/money_ruble_outline_20.svg"
                alt={alt.finance}
              ></img>
              <p className="m-4 text-sm">{data.flag}</p>
            </>
          ) : data.flag === "Регистрации" ? (
            <>
              <img
                src="/letter_indicators/key_outline_20.svg"
                alt={alt.registrations}
              ></img>
              <p className="m-4 text-sm">{data.flag}</p>
            </>
          ) : data.flag === "Путешествия" ? (
            <>
              <img
                src="/letter_indicators/plane_outline_20.svg"
                alt={alt.travels}
              ></img>
              <p className="m-4 text-sm">{data.flag}</p>
            </>
          ) : data.flag === "Билеты" ? (
            <>
              <img
                src="/letter_indicators/ticket_outline_20.svg"
                alt={alt.tickets}
              ></img>
              <p className="m-4 text-sm">{data.flag}</p>
            </>
          ) : (
            data.flag === "Штрафы и налоги" && (
              <>
                <img
                  src="/letter_indicators/government_outline_20.svg"
                  alt={alt.finesAndTaxes}
                ></img>
                <p className="m-4 text-sm">{data.flag}</p>
              </>
            )
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`mx-[13px] h-[6px] w-[6px] rounded-md ${
            data.read && "bg-electricBlue"
          }`}
        ></div>
        {data.author.avatar && (
          <img
            className="h-8 w-8 rounded-2xl mr-2"
            src={data.author.avatar}
            alt={alt.avatar}
          ></img>
        )}
        <div>
          <div className="flex items-center">
            <h2 className="mr-2 whitespace-nowrap">
              {data.author.name + " " + data.author.surname}
            </h2>
            <p className="flex items-center justify-end min-w-[4rem] mr-4 whitespace-nowrap text-textGray text-sm">
              {formatDate(data.date)}
            </p>
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
          <p className="whitespace-nowrap truncate w-96 text-textGray text-sm">
            Кому:{" "}
            {data.to.map(
              (receiver, index) =>
                `${receiver.name} ${receiver.surname}${
                  index === data.to.length - 1 ? "" : ", "
                }`
            )}
          </p>
        </div>
      </div>
      <div className="px-8 py-4">
        {data.doc && (
          <>
            <img
              className="w-[256px] h-[190px] rounded-xl"
              src={data.doc.img}
              alt={alt.attachment}
            ></img>
            <a
              className="text-linkBlue"
              download="attachment.jpg"
              href={data.doc.img}
            >
              {text.download}
            </a>
            <p className="text-sm text-textGray inline-block ml-1">
              ({calculateFileSize(data.doc.img)})
            </p>
          </>
        )}
      </div>
      <p className="text-sm px-8 py-4">{data.text}</p>
    </section>
  );
}

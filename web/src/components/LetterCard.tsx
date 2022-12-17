import { Link, useLoaderData } from "react-router-dom";
import { fetchLetter } from "../api";
import Letter from "../dtos";

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

export async function letterLoader({ params }: { params: any }) {
  return {
    data: await fetchLetter(params.folderName, params.letterId),
    folderName: params.folderName,
  };
}

export default function LetterCard() {
  const { data, folderName } = useLoaderData() as {
    data: Letter;
    folderName: string;
  };

  function calculateFileSize(file: string) {
    const fileSize = file.length / 1024;

    return fileSize < 1024
      ? `${parseInt(fileSize.toFixed(2))}Kb`
      : `${parseInt((fileSize / 1024).toFixed(2))}Mb`;
  }

  function formatDate(date: string) {
    const dateObj = new Date(date);

    return `${
      dateObj.toDateString() === new Date().toDateString()
        ? "Сегодня"
        : `${dateObj.getDate()} ${months[dateObj.getMonth()]}`
    }, ${dateObj.getHours()}:${
      dateObj.getMinutes() < 10 ? "0" : ""
    }${dateObj.getMinutes()}`;
  }

  return (
    <>
      <header className="fixed left-0 top-0 h-14 px-4 py-3 w-[100vw] bg-white dark:bg-darkGray shadow-sm">
        <Link className="flex items-center w-9 ml-2 mt-1" to={"/" + folderName}>
          <img
            className="block dark:hidden"
            src="/chevron_left_outline_20.svg"
            alt="Вернуться"
          ></img>
          <img
            className="hidden dark:block"
            src="/chevron_left_outline_dark_20.svg"
            alt="Вернуться"
          ></img>
          <h1 className="dark:text-white hidden sm:block">Вернуться</h1>
        </Link>
      </header>
      <section className="mb-3 rounded-xl bg-white dark:text-white">
        <div className="flex items-center justify-between mr-4 ml-auto">
          <h1 className="font-bold text-2xl px-8 py-4">{data.title}</h1>
          <div className="flex items-center">
            {data.flag === "Заказы" ? (
              <>
                <img src="/shopping_cart_outline_20.svg" alt="Заказы"></img>
                {data.flag}
              </>
            ) : data.flag === "Финансы" ? (
              <>
                <img src="/money_ruble_outline_20.svg" alt="Финансы"></img>
                {data.flag}
              </>
            ) : data.flag === "Регистрации" ? (
              <>
                <img src="/key_outline_20.svg" alt="Регистрации"></img>
                {data.flag}
              </>
            ) : data.flag === "Путешествия" ? (
              <>
                <img src="/plane_outline_20.svg" alt="Путешествия"></img>
                {data.flag}
              </>
            ) : data.flag === "Билеты" ? (
              <>
                <img src="/ticket_outline_20.svg" alt="Билеты"></img>
                {data.flag}
              </>
            ) : (
              data.flag === "Штрафы и налоги" && (
                <>
                  <img
                    src="/government_outline_20.svg"
                    alt="Штрафы и налоги"
                  ></img>
                  {data.flag}
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
              alt="avatar"
            ></img>
          )}
          <div>
            <div className="flex items-center">
              <h2 className="mr-2 whitespace-nowrap">
                {data.author.name + " " + data.author.surname}
              </h2>
              <p className="flex items-center justify-end min-w-[4rem] mr-4 whitespace-nowrap">
                {formatDate(data.date)}
              </p>
              {data.important ? (
                <img src="/important_20.svg" alt="Важное"></img>
              ) : (
                data.bookmark && (
                  <img src="/bookmark_20.svg" alt="Закладка"></img>
                )
              )}
            </div>
            <p className="whitespace-nowrap truncate w-96">
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
                alt="Attachment"
              ></img>
              <a download="attachment.jpg" href={data.doc.img}>
                Скачать
              </a>
              <p className="text-sm">({calculateFileSize(data.doc.img)})</p>
            </>
          )}
        </div>
        <p className="text-sm px-8 py-4">{data.text}</p>
      </section>
    </>
  );
}

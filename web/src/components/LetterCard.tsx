import { Link, useLoaderData } from "react-router-dom";
import { fetchLetter } from "../api";
import Letter from "../dtos";

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

  return (
    <>
      <header className="fixed left-0 top-0 h-14 px-4 py-3 w-[100vw] bg-white dark:bg-darkGray shadow-sm">
        <Link className="flex items-center" to={"/" + folderName}>
          <img src="/chevron_left_outline_20.svg" alt="Вернуться"></img>
          <h1 className="dark:text-white">Вернуться</h1>
        </Link>
      </header>
      <section className="rounded-xl bg-white dark:text-white">
        <h1 className="font-bold text-2xl">{data.title}</h1>
        <div className="flex items-center justify-end min-w-[4rem] mr-4 ml-auto">
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
        <div className="w-[16rem] flex items-center">
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
        </div>
        {data.doc && (
          <img
            className="w-[256px] h-[190px] rounded-xl"
            src={data.doc.img}
            alt="Attachment"
          ></img>
        )}
        <p className="text-sm">{data.text}</p>
      </section>
    </>
  );
}

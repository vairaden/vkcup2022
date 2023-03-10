import { useParams } from "react-router-dom";
import useLetter from "./useLetter";
import useFilterStore from "../../shared/store/useFilterStore";
import useTranslation from "../../shared/translation/useTranslation";
import ShoppingCartIcon from "../../shared/icons/letter-indicators/ShoppingCartIcon";
import MoneyIcon from "../../shared/icons/letter-indicators/MoneyIcon";
import KeyIcon from "../../shared/icons/letter-indicators/KeyIcon";
import PlaneIcon from "../../shared/icons/letter-indicators/PlaneIcon";
import TicketIcon from "../../shared/icons/letter-indicators/TicketIcon";
import GovernmentIcon from "../../shared/icons/letter-indicators/GovernmentIcon";
import ImportantIcon from "../../shared/icons/letter-indicators/ImportantIcon";
import BookmarkIcon from "../../shared/icons/letter-indicators/BookmarkIcon";

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
        ? text.today
        : `${dateObj.getDate()} ${text.months[dateObj.getMonth()]}`
    }, ${dateObj.getHours()}:${
      dateObj.getMinutes() < 10 ? "0" : ""
    }${dateObj.getMinutes()}`;
  }

  const { data, isLoading } = useLetter(
    folderName,
    letterId,
    filterUnread,
    filterBookmarked,
    filterWithAttachments
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
      <div className="flex items-center justify-between px-8 ml-auto">
        {/* Title */}
        <h1 className="font-bold text-2xl mr-8 py-4">{data.title}</h1>
        {/* Flags */}
        <div className="flex items-center">
          {data.flag === "????????????" ? (
            <>
              <ShoppingCartIcon />
              <p className="ml-2 text-sm">{alt.orders}</p>
            </>
          ) : data.flag === "??????????????" ? (
            <>
              <MoneyIcon />
              <p className="ml-2 text-sm">{alt.finance}</p>
            </>
          ) : data.flag === "??????????????????????" ? (
            <>
              <KeyIcon />
              <p className="ml-2 text-sm">{alt.registrations}</p>
            </>
          ) : data.flag === "????????????????????????" ? (
            <>
              <PlaneIcon />
              <p className="ml-2 text-sm">{alt.travels}</p>
            </>
          ) : data.flag === "????????????" ? (
            <>
              <TicketIcon />
              <p className="ml-2 text-sm">{alt.tickets}</p>
            </>
          ) : (
            data.flag === "???????????? ?? ????????????" && (
              <>
                <GovernmentIcon />
                <p className="ml-2 text-sm">{alt.finesAndTaxes}</p>
              </>
            )
          )}
        </div>
      </div>
      <div className="flex items-center">
        {/* Read indicator */}
        <div
          className={`mx-[13px] h-[6px] w-[6px] rounded-md ${
            data.read && "bg-electricBlue"
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
        {/* Author and date */}
        <div>
          <div className="flex items-center">
            <h2 className="mr-2 whitespace-nowrap">
              {data.author.name + " " + data.author.surname}
            </h2>
            <p className="flex items-center justify-end min-w-[4rem] mr-4 whitespace-nowrap text-textGray text-sm">
              {formatDate(data.date)}
            </p>
            {data.important ? (
              <ImportantIcon />
            ) : (
              data.bookmark && <BookmarkIcon />
            )}
          </div>
          {/* Receivers */}
          <p className="whitespace-nowrap truncate w-96 text-textGray text-sm">
            {text.to + ": "}
            {data.to.map(
              (receiver, index) =>
                `${receiver.name} ${receiver.surname}${
                  index === data.to.length - 1 ? "" : ", "
                }`
            )}
          </p>
        </div>
      </div>
      {/* Attachment */}
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
      {/* Text */}
      <p className="text-sm px-8 py-4">{data.text}</p>
    </section>
  );
}

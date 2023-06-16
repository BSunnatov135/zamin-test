import useTranslation from "next-translate/useTranslation";
import styles from "../style.module.scss";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function EventCard({ item }) {
  const router = useRouter();
  const fullDate = (date) => {
    try {
      const res = format(new Date(date), "dd.MM.yyyy");
      return res;
    } catch (err) {}
  };
  const { lang } = useTranslation();
  console.log("item", item);
  return item ? (
    <div
      className={`${styles.item} ${styles.event}`}
      onClick={() => router.push(`/events-info/${item.guid}?from=events`)}
    >
      <img
        src={item?.[`${lang}_poster`]}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/images/default.svg";
        }}
      />
      <div className={styles.itemInfo}>
        <p
          dangerouslySetInnerHTML={{
            __html: item?.[`${lang}_header`],
          }}
        ></p>
        <p>{fullDate(item?.date)}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}

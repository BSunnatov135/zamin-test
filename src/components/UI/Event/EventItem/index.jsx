import styles from "./style.module.scss";
import Link from "next/link";
import ArrowRight from "assests/icons/narrowRight.svg";

export default function EventItem({ item }) {
  return (
    <Link href="/info/item?key=event">
      <a>
        <div className={styles.item} key={item.img}>
          <div className={styles.img}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={styles.body}>
            <p className={styles.body__title}>{item.title}</p>
            <p
              className={styles.body__text}
              dangerouslySetInnerHTML={{
                __html: item.desc || item.sub_desc,
              }}
            />
            <Link href="/info/item?key=event" styles={styles.body__link}>
              <a>
                Подробнее <ArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  );
}

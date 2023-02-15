import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { DefaultImage } from "/public/icons/icons";

export default function ProjectItem({ item }) {
  const { lang } = useTranslation();
  return (
    <Link href={`/project-info/${item.guid}?from=events`}>
      <a>
        <div className={styles.item} key={item.img}>
          <div className={styles.img}>
            <img src={item[`${lang}_photo`]} alt={item[`${lang}_header`]} />
          </div>
          <div className={styles.body}>
            <p
              className={styles.body__title}
              dangerouslySetInnerHTML={{
                __html: item[`${lang}_name`]
                  ? item[`${lang}_name`]
                  : item[`${lang}_header`],
              }}
            />
            <p
              className={styles.body__text}
              dangerouslySetInnerHTML={{
                __html: item?.[`${lang}_description`],
              }}
            />
          </div>
        </div>
      </a>
    </Link>
    // <div className={styles.item} key={item.guid}>
    //   <Link href={`/project-info/${item.guid}`}>
    //     <a className={styles.item__content}>
    //       <div className={styles.img}>
    //         {item[`${lang}_photo`] ? (
    //           <img src={item[`${lang}_photo`]} alt={item[`${lang}_header`]} />
    //         ) : (
    //           <DefaultImage className={styles.defaultImg} />
    //         )}
    //       </div>
    //       <div className={styles.body}>
    //         <p
    //           dangerouslySetInnerHTML={{
    //             __html: item[`${lang}_name`] ? item[`${lang}_name`] : item[`${lang}_header`],
    //           }}
    //           className={styles.body__title}
    //         />
    //         <p
    //           dangerouslySetInnerHTML={{
    //             __html: item[`${lang}_description`],
    //           }}
    //           className={styles.body__text}
    //         ></p>
    //       </div>
    //     </a>
    //   </Link>
    // </div>
  );
}

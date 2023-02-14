import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import styles from "../style.module.scss";

export default function Board() {
  const { t } = useTranslation("about");
  const { lang } = useTranslation();
  return (
    <div>
      <h2 className={styles.boardTitle}>{t("board")} </h2>
      <div className={styles.boardWrapper}>
        <div className={styles.boardItem}>
          <h6>{t("chairman_name")} </h6>
          <p className={styles.position}>{t("chairman")} </p>
          {/* <p>
              Заместитель директора по лечебной работе, главный врач
              Республиканского специализированного научно-практического
              медицинского центра педиатрии, доктор медицинских наук
            </p> */}
        </div>
        <div className={styles.boardItem}>
          <h6
            className={classNames(styles.name, {
              [styles.enName]: lang === "en",
            })}
          >
            {t("deputy_name")}{" "}
          </h6>
          <p
            className={classNames(styles.position, {
              [styles.deputy]: lang === "ru",
            })}
          >
            {t("deputy")}{" "}
          </p>

          <p>{t("deputy_job")}</p>
        </div>
        <div className={styles.boardItem}>
          <h6
            className={classNames(styles.name, {
              [styles.enName]: lang === "en",
            })}
          >
            {t("member_name_1")}{" "}
          </h6>
          <p
            className={classNames(styles.position, {
              [styles.deputy]: lang === "ru",
            })}
          >
            {t("member")}{" "}
          </p>

          <p>{t("member_1_job")}</p>
        </div>
        <div className={styles.boardItem}>
          <h6
            className={classNames(styles.name, {
              [styles.enName]: lang === "en",
            })}
          >
            {t("member_name_2")}{" "}
          </h6>
          <p
            className={classNames(styles.position, {
              [styles.deputy]: lang === "ru",
            })}
          >
            {t("member")}{" "}
          </p>
          <p>{t("member_2_job")}</p>
        </div>
      </div>
      <h2 className={styles.executiveBoardTitle}>{t("executive_board")} </h2>
      <div className={`${styles.boardWrapper} ${styles.executiveBoard}`}>
        <div className={styles.boardItem}>
          <h6>{t("director_name")}</h6>
          <p>{t("director")}</p>
        </div>
      </div>
    </div>
  );
}

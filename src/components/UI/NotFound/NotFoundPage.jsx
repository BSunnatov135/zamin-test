import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";

const NotFoundPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>{t("not_found")}</p>
    </div>
  );
};

export default NotFoundPage;

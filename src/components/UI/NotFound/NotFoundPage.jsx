import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const NotFoundPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Мы не можем найти страницу, которую вы ищете
      </p>
      <Link href="/">
        <div className={styles.btn}>Вернуться на главную страницу</div>
      </Link>
    </div>
  );
};

export default NotFoundPage;

import styles from "./style.module.scss";
import { Container } from "@mui/material";
import { ArrowRight } from "components/UI/svg";
import useTranslation from "next-translate/useTranslation";

export default function Banner({ contents, router, item }) {
  const { lang } = useTranslation();
  return (
    <Container>
      <div className={styles.main}>
        <p
          dangerouslySetInnerHTML={{
            __html: item?.[`${lang}_description`],
          }}
          className={styles.description}
        ></p>
        {!router.query.key && (
          <p className={styles.link}>
            <span>Сделайте пожертвование</span>
            <ArrowRight />
          </p>
        )}
      </div>
    </Container>
  );
}

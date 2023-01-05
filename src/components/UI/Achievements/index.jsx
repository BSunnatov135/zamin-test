import { Container } from "@mui/material";
import styles from "./style.module.scss";
import { Box } from "@mui/system";

import useTranslation from "next-translate/useTranslation";

const items = [
  {
    title: "120 млрд",
    desc: "Общая благотворительная поддержка",
  },

  {
    title: "30+",
    desc: "Установленных автоматических станции мониторинга воздуха",
  },
  {
    title: "2+",
    desc: "операций кохлеарной имплантации ежегодно",
  },
  {
    title: "55+",
    desc: "запущенных проектов",
  },
  {
    title: "5000",
    desc: "карт были переданы нуждающимся женщинам",
  },
];

export default function Achievements() {
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        background: "#09999a",
      }}
    >
      <Container>
        <div className={styles.main}>
          <h2>{t("achievement_title")}</h2>
          <div className={styles.list}>
            <div className={styles.item}>
              <p>{t("achievement_sum")}</p>
              <p>{t("achievement_support")}</p>
            </div>
            <div className={styles.item}>
              <p>30+</p>
              <p>{t("achievement_monitoring")}</p>
            </div>
            <div className={styles.item}>
              <p>2+</p>
              <p>{t("achievement_operation")}</p>
            </div>
            <div className={styles.item}>
              <p>55+</p>
              <p>{t("achievement_projects")}</p>
            </div>
            <div className={styles.item}>
              <p>5000</p>
              <p>{t("achievement_women")}</p>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

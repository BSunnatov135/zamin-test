import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import ArrowRight from "assests/icons/narrowRight.svg";
import { Box } from "@mui/system";
import useTransition from "next-translate/useTranslation";

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
  const { t } = useTransition("common");
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
            {items.map((item, index) => (
              <div key={index + "key"} className={styles.item}>
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Box>
  );
}

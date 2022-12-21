import { Container } from "@mui/material";
import Link from "next/link";
import BlogTitle from "../BlogTitle";
import styles from "./style.module.scss";
import ArrowRight from "assests/icons/narrowRight.svg";
import useTransition from "next-translate/useTranslation";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";

const items = [
  {
    title: "Междугородние трудовые поездки. Обмен опытом.",
    desc: "Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...",
  },
  {
    title: "Междугородние трудовые поездки. Обмен опытом.",
    desc: "Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...",
  },
  {
    title: "Междугородние трудовые поездки. Обмен опытом.",
    desc: "Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...",
  },
  {
    title: "Междугородние трудовые поездки. Обмен опытом.",
    desc: "Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...",
  },
  {
    title: "Междугородние трудовые поездки. Обмен опытом.",
    desc: "Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...",
  },
  {
    title: "Междугородние трудовые поездки. Обмен опытом.",
    desc: "Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...",
  },
];

export default function Advert() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const { adverts } = useAdverts({
    advertParams: {
      offset: 0,
      limit: 6,
    },
  });

  return (
    <Container>
      <div className={styles.main}>
        <BlogTitle title={t("advert_title")} />
        <div className={styles.list}>
          {adverts?.data?.response?.map((item) => (
            <div key={item.guid} className={styles.item}>
              <div className={styles.header}>
                <p>{item?.[`${lang}_header`]}</p>
              </div>
              <div className={styles.description}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item?.[`${lang}_description`],
                  }}
                ></p>
              </div>
              <Link href={`/info/${item.guid}?from=news`}>
                <a>
                  {t("more")}
                  <ArrowRight />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

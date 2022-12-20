import { Container } from "@mui/material";
import useTransition from "next-translate/useTranslation";
import styles from "./style.module.scss";
import MotarboardIcon from "assests/icons/motarboard.svg";
import EmergencyIcon from "assests/icons/emergency.svg";
import SecureIcon from "assests/icons/secure.svg";
import SeedingIcon from "assests/icons/seeding.svg";
import CardiogramIcon from "assests/icons/cardiogram.svg";
import ArrowRight from "assests/icons/narrowRight.svg";
import Link from "next/link";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

const items = [
  {
    title: "Образование",
    icon: <MotarboardIcon />,
  },
  {
    title: "Здоровье",
    icon: <CardiogramIcon />,
  },

  {
    title: "Чрезвычайная ситуация",
    icon: <EmergencyIcon />,
  },
  {
    title: "Защита",
    icon: <SecureIcon />,
  },
  {
    title: "Eco Природа",
    icon: <SeedingIcon />,
  },
];

export default function HelpPeople() {
  const { t } = useTranslation("common");
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.element}>
          <div className={styles.leftElement}>
            <h2>{t("helppeople_title")}</h2>
            <div className={styles.box}>
              <div className={styles.header}>
                {items.map((item, i) => (
                  <p
                    key={item.title}
                    onClick={() => setIndex(i)}
                    className={index === i ? styles.active : ""}
                  >
                    {item.icon}
                    {item.title}
                  </p>
                ))}
              </div>
              <div className={styles.body}>
                <h3>Каждый ребенок заслуживает здорового начала</h3>
                <p>
                  <span>
                    С января 2020 года Фонд Билла и Мелинды Гейтс выделил более
                    2 миллиардов долларов США на глобальные меры реагирования на
                    COVID-19
                  </span>
                  <span>
                    С января 2020 года Фонд Билла и Мелинды Гейтс выделил более
                    2 миллиардов долларов США на глобальные меры реагирования на
                    COVID-19
                  </span>
                </p>
                <Link href="/">
                  <a>
                    Подробнее <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.rightElement}>
            <img src="/images/people.png" alt="people" />
          </div>
        </div>
      </div>
    </Container>
  );
}

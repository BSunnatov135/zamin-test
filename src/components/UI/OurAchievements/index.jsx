import React from "react";
import cls from "./OurAchievemnts.module.scss";
import Achievements from "../Achievements";
import Projects from "./Projects";
import { Container } from "@mui/system";
import useTranslation from "next-translate/useTranslation";

function OurAchievemnts() {
  const { t } = useTranslation("common");
  return (
    <main className={cls.main}>
      <Container className={cls.container}>
        <h1 className={cls.title}>{t("achievement_title")}</h1>
        <Projects />
      </Container>
      <div className={cls.achievements}>
        <Achievements />
      </div>
    </main>
  );
}

export default OurAchievemnts;

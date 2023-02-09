import React from "react";
import cls from "./OurAchievemnts.module.scss";
import Achievements from "../Achievements";
import Projects from "./Projects";
import { Container } from "@mui/system";

function OurAchievemnts() {
  return (
    <main className={cls.main}>
      <Container className={cls.container}>
        <h1 className={cls.title}>Наши достижения</h1>
        <div className={cls.row}>
          <Projects />
          <div></div>
        </div>
      </Container>

      <div style={{ marginTop: "200px" }}>
        <Achievements />
      </div>
    </main>
  );
}

export default OurAchievemnts;

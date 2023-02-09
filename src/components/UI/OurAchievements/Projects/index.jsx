import React from "react";
import cls from "./Projects.module.scss";

function Projects() {
  return (
    <div className={cls.root}>
      <h1>Проекты</h1>
      <div className={cls.tabs}></div>
    </div>
  );
}

export default Projects;

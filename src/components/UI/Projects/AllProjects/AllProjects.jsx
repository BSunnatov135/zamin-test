import useTranslation from "next-translate/useTranslation";
import React from "react";
import ProjectItem from "../ProjectItem";
import styles from "./style.module.scss";

function AllProjects({ spheres = [] }) {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();

  return (
    <div className={styles.main}>
      {spheres.length > 0
        ? spheres.map((sphere, index) => (
            <div
              id={"project-" + index}
              key={index + "sphere"}
              className={styles.item}
            >
              <h2 className={styles.sectionTitle}>
                {sphere[0]?.spheres_id_data?.[`${lang}_name`]}
              </h2>
              <div className={styles.list}>
                {sphere?.map((item) => (
                  <ProjectItem key={item.guid} item={item} />
                ))}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default AllProjects;

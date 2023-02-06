import { Container } from "@mui/system";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import useSpheres from "services/spheres";
import ProjectItem from "../ProjectItem";
import styles from "./style.module.scss";

function FilteredProjects() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const { sphere } = useSpheres({
    dataSphere: {
      offset: 0,
      limit: 99,
      spheres_id: router.query.id,
    },
  });

  return (
    <Container>
      <div className={styles.main}>
        <h2 className={styles.sectionTitle}>{sphere?.data.response[0].spheres_id_data?.[`${lang}_name`]}</h2>
        <div className={styles.list}>
          {sphere?.data?.response?.map((item) => (
            <ProjectItem key={item.guid} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FilteredProjects;

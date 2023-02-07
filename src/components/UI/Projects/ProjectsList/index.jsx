import { Container } from "@mui/material";
import styles from "./style.module.scss";
import ProjectItem from "../ProjectItem";
import useProjects from "services/projects";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";

export default function ProjectsPage() {
  const { t } = useTranslation("common");
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 100,
    },
  });
  const { charitySphere } = useSpheres({
    dataSphere: {
      offset: 0,
      limit: 3,
      spheres_id: "954b354c-037c-4e9a-b9f3-4cb9057c9e1c",
    },
  });
  return (
    <Container>
      <div className={styles.main}>
        <h2 className={styles.sectionTitle}>{t("all_projects")}</h2>
        <div className={styles.list}>
          {projects?.data?.response?.map((item) => (
            <ProjectItem key={item.guid} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}

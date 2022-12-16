import { Button, Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import HeartIcon from "assests/icons/heart.svg";
import ArrowRightIcon from "assests/icons/arrowRight.svg";
import ProjectItem from "./ProjectItem";
import useTransition from "next-translate/useTranslation";
import useProjects from "services/projects";

export default function Projects() {
  const { t } = useTransition("common");
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 3,
    },
  });
  console.log(projects?.data);
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.leftElement}>
            <p>
              <span>
                <HeartIcon />
              </span>
              {t("projects_motto")}
            </p>
            <p className={styles.title}>{t("projects_title")}</p>
            <p className={styles.responsiveTitle}>Наши проекты</p>
          </div>
          <Link href="/projects">
            <a className={styles.responsiveLink}>
              Все <ArrowRightIcon />
            </a>
          </Link>
          <Link href="/projects">
            <a className={styles.link}>
              Все проекты <ArrowRightIcon />
            </a>
          </Link>
        </div>
        <div className={styles.list}>
          {projects?.data?.response?.map((item) => (
            <ProjectItem key={item.guid} item={item} />
          ))}
        </div>
        {/* <div className={styles.button}>
          <Button>Все проекты</Button>
        </div> */}
      </div>
    </Container>
  );
}

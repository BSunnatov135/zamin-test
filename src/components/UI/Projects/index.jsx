import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import HeartIcon from "assests/icons/heart.svg";
import ArrowRightIcon from "assests/icons/arrowRight.svg";
import ProjectItem from "./ProjectItem";
import useProjects from "services/projects";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useSpheres from "services/spheres";

export default function Projects(sphere) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 3,
    },
  });
  const { charitySphere } = useSpheres({
    dataSphere: {
      offset: 0,
      limit: 1,
      spheres_id: `954b354c-037c-4e9a-b9f3-4cb9057c9e1c`,
    },
  });
  console.log("charity===", charitySphere);

  console.log("sphere", sphere?.sphere?.data);
  return (
    <Container>
      {router?.asPath.includes("info") ? (
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
              <p className={styles.responsiveTitle}>{t("projects")}</p>
            </div>
            <Link
              href={`/projects/${sphere?.sphere?.data?.response[0].spheres_id}`}
            >
              <a
                className={styles.responsiveLink}
                href={`/projects/${sphere?.sphere?.data?.response[0].spheres_id}`}
              >
                {t("all")} <ArrowRightIcon />
              </a>
            </Link>
            <Link
              href={`/projects/${sphere?.sphere?.data?.response[0].spheres_id}`}
            >
              <a
                className={styles.link}
                href={`/projects/${sphere?.sphere?.data?.response[0].spheres_id}`}
              >
                {t("all_projects")} <ArrowRightIcon />
              </a>
            </Link>
          </div>
          <div className={styles.list}>
            {sphere?.sphere?.data?.response?.map((item) => (
              <ProjectItem key={item.guid} item={item} />
            ))}
          </div>
          {/* <div className={styles.button}>
          <Button>Все проекты</Button>
        </div> */}
        </div>
      ) : (
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
              <p className={styles.responsiveTitle}>{t("projects")}</p>
            </div>
            <Link href="/projects">
              <a className={styles.responsiveLink}>
                {t("all")} <ArrowRightIcon />
              </a>
            </Link>
            <Link href="/projects">
              <a className={styles.link}>
                {t("all_projects")} <ArrowRightIcon />
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
      )}
    </Container>
  );
}

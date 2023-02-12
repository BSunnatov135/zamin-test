import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import ArrowRightIcon from "assests/icons/arrowRight.svg";
import ProjectItem from "./ProjectItem";
import useProjects from "services/projects";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useSpheres from "services/spheres";
import { getProjects } from "services/projects";
import { useState } from "react";

export default function Projects(sphere) {
  const [projects, setProjects] = useState([]);
  const { t } = useTranslation("common");
  const router = useRouter();
  // const { projects } = useProjects({
  //   projectParams: {
  //     offset: 0,
  //     limit: 3,
  //   },
  // });

  function getAllData(values) {
    return Promise.all(
      values.map((value) => {
        return getProjects(value.data)
          .then((res) => res.data.response[0])
          .catch((err) => console.error("err", err));
      })
    );
  }

  const { spheres } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
    onSuccess: (res) => {
      if (!router?.asPath.includes("info")) {
        const values = res.data.response?.map((item) => ({
          data: {
            spheres_id: item.guid,
            offset: 0,
            limit: 1,
          },
        }));
        getAllData(values).then((result) => {
          setProjects(result);
        });
      }
    },
  });

  return (
    <Container>
      {router?.asPath.includes("info") ? (
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.leftElement}>
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
            {projects.length > 0
              ? projects?.map((item) => (
                  <ProjectItem key={item.guid} item={item} />
                ))
              : null}
          </div>
          {/* <div className={styles.button}>
        <Button>Все проекты</Button>
      </div> */}
        </div>
      )}
    </Container>
  );
}

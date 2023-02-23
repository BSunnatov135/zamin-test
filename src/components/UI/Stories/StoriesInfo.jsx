import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useProjects from "services/projects";
import styles from "./style.module.scss";

export default function StoriesInfo() {
  const { lang } = useTranslation();
  const router = useRouter();
  const { stories } = router.query;
  const { story } = useProjects({
    storyId: stories,
  });
  console.log(story?.data?.response);
  return (
    <Container>
      <div className={styles.item}>
        <h2
          className={styles.name}
          dangerouslySetInnerHTML={{
            __html: story?.data?.response[`${lang}_header`],
          }}
        ></h2>
        <video
          className={styles.storyFile}
          src={story?.data?.response[`${lang}_story_file`]}
          controls
        />
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: story?.data?.response[`${lang}_description`],
          }}
        ></p>
      </div>
    </Container>
  );
}

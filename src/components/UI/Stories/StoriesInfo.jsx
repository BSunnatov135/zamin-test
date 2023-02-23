import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import useProjects from "services/projects";
import styles from "./style.module.scss";

export default function StoriesInfo() {
  const { lang } = useTranslation();
  const router = useRouter();
  const { stories } = router.query;
  const { story } = useProjects({
    storyId: stories,
  });
  const fileTypes = (data) => {
    if (
      data?.includes("mkv") ||
      data?.includes("mp4") ||
      data?.includes("mov") ||
      data?.includes("webm") ||
      data?.includes("mpeg-4")
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Container>
      <div className={styles.item}>
        <h2
          className={styles.name}
          dangerouslySetInnerHTML={{
            __html: story?.data?.response[`${lang}_header`],
          }}
        ></h2>
        {fileTypes(story?.data?.response[`${lang}_story_file`]) === true ? (
          <ReactPlayer
            url={story?.data?.response[`${lang}_story_file`]}
            className={styles.video}
            controls
          />
        ) : (
          <img
            src={story?.data?.response[`${lang}_story_file`]}
            alt={item.guid}
          />
        )}
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

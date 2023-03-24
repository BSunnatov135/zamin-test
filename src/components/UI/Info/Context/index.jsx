import styles from "./style.module.scss";
import { Container, Link } from "@mui/material";
import { ArrowRight } from "components/UI/svg";
import useTranslation from "next-translate/useTranslation";
import getVideoId from "get-video-id";
import ProjectStats from "components/UI/Projects/ProjectStats";
export default function Banner({ contents, router, item }) {
  const { lang } = useTranslation();

  const { t } = useTranslation("common");
  const video = getVideoId(`${item?.[`${lang}_utube_link`]}`);
  return (
    <Container>
      <div className={styles.main}>
        <p
          dangerouslySetInnerHTML={{
            __html: item?.[`${lang}_description`],
          }}
          className={styles.description}
        ></p>
        {/* {!router.query.key && (
          <Link className={styles.link} href="/">
            <span>{t("donate")}</span>
            <ArrowRight />
          </Link>
        )} */}
        {video.id && (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            allowFullScreen
            title="Embedded youtube"
          />
        )}
      </div>
    </Container>
  );
}

import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import LearnMoreIcon from "assests/icons/learnMore.svg";
import PlayIcon from "assests/icons/play.svg";
import PauseIcon from "assests/icons/pause.svg";
import { useState } from "react";
import { useRef } from "react";
import useProjects from "services/projects";
import useTranslation from "next-translate/useTranslation";

export default function Banner() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef();
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 7,
    },
  });

  const playVideo = () => {
    videoRef.current.play();
    setIsPlay(false);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlay(true);
  };

  return (
    <>
      <div className={styles.banner}>
        <video
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
          poster="/video/poster.jpeg"
        >
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>
        <Container
          sx={{
            height: "100%",
          }}
        >
          {projects?.data?.response?.map(
            (item) =>
              item?.guid == "ae66b866-ff55-4e82-aa56-91e1b0dec7b7" && (
                <div className={styles.content}>
                  <h1>{item[`${lang}_name`]}</h1>
                  <Link href={`/project-info/${item.guid}`}>
                    <a>
                      <LearnMoreIcon />
                      {t("learn_more")}
                    </a>
                  </Link>
                </div>
              )
          )}
        </Container>
        <div className={styles.play} onClick={isPlay ? playVideo : pauseVideo}>
          {!isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
      </div>
    </>
  );
}

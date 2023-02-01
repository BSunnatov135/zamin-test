import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import LearnMoreIcon from "assests/icons/learnMore.svg";
import PlayIcon from "assests/icons/play.svg";
import PauseIcon from "assests/icons/pause.svg";
import { useState, useEffect, useRef } from "react";
import useProjects from "services/projects";
import useTranslation from "next-translate/useTranslation";
import { useCallback } from "react";
import useObjects from "services/objectService";

export default function Banner() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [isPlay, setIsPlay] = useState(false);
  const [videoIndex, setvideoIndex] = useState(0);
  const videoRef = useRef();
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 7,
    },
  });

  const { object } = useObjects({
    table_slug: "banners",
    objectParams: { data: {} },
    objectProperties: {
      enabled: true,
      select: (data) => data?.data?.response.map((el) => el.banner_video),
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

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setTimeout(() => {
      setvideoIndex((prev) => {
        if (object?.length - 1 === videoIndex) {
          return 0;
        } else {
          return ++prev;
        }
      });
    }, video.duration * 1000);
  }, [object, videoIndex]);

  useEffect(() => {
    if (object?.length) {
      videoRef.current.load();
    }
  }, [object, videoIndex]);

  return (
    <>
      <div className={styles.banner}>
        <video
          autoPlay
          muted
          ref={videoRef}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src={object?.[videoIndex]} type="video/mp4" />
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
                  {/* <h1>{item[`${lang}_name`]}</h1> */}
                  <h1>{t("banner_title")}</h1>
                  <Link href={`/about`}>
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

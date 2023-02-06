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
import Logo from "assests/icons/FaceBookHeader.svg";

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
      // select: (data) => data?.data?.response.map((el) => el.banner_video),
    },
  });
  const video = object?.data?.response.map((el) => el.banner_video);
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
        if (video?.length - 1 === videoIndex) {
          return 0;
        } else {
          return ++prev;
        }
      });
    }, video.duration * 1000);
  }, [video, videoIndex]);

  useEffect(() => {
    if (video?.length) {
      videoRef.current.load();
    }
  }, [video, videoIndex]);

  return (
    <>
      <div className={styles.banner}>
            <video
            src={video?.[videoIndex]}
            autoPlay
            muted
            ref={videoRef}
            poster={object?.data?.response[1]?.banner_photo }
            onLoadedMetadata={handleLoadedMetadata}
            width="640" height="480"
          ></video>
        <Container
          sx={{
            height: "100%",
          }}
        >
          <div className={styles.content}>
            <h1>{t("banner_title")}</h1>
            <Link href={`/about`}>
              <a>
                <LearnMoreIcon />
                {t("learn_more")}
              </a>
            </Link>
          </div>
        </Container>
        <div className={styles.play} onClick={isPlay ? playVideo : pauseVideo}>
          {!isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
      </div>
    </>
  );
}

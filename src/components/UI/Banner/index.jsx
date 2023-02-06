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
  const [videoIndex, setVideoIndex] = useState(0);
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

  const playVideo = (e) => {
    e.preventDefault();
    videoRef.current.play();
    setIsPlay(false);
  };

  const pauseVideo = (e) => {
    e.preventDefault();
    videoRef.current.pause();
    setIsPlay(true);
  };

  const handleLoadedMetadata = useCallback(() => {
    let videos = object?.data?.response.map((el) => el.banner_video);
    const video = videoRef.current;
    if (!video) return;
    console.log(videos.length);
    setTimeout(() => {
      setVideoIndex((prev) => {
        if (videos?.length - 1 === videoIndex) {
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
  }, [videoIndex]);

  return (
    <>
      <div className={styles.banner}>
        <video
          src={video?.[videoIndex]}
          autoPlay
          muted
          playsInline
          ref={videoRef}
          poster={object?.data?.response[0]?.banner_photo}
          onLoadedMetadata={handleLoadedMetadata}
        ></video>
        <Container
          sx={{
            height: "100%",
          }}
        >
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
        </Container>
        <div className={styles.play} onClick={isPlay ? playVideo : pauseVideo}>
          {!isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
      </div>
    </>
  );
}

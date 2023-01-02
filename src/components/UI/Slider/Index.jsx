import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import BtnSlider from "./BtnSlider";
import event1 from "/public/images/ev1.png";
import { useMemo } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRef } from "react";

export default function Slider({ data, title }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const videRef = useRef(null);
  const nextSlide = () => {
    if (slideIndex < data.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };
  const currentData = useMemo(() => {
    return data[slideIndex - 1];
  }, [slideIndex, data]);

  useEffect(() => {
    if (currentData?.file_link?.includes(".mp4")) {
      videRef.current.play();
    }
  }, [currentData, videRef]);
  return (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.containerSlider}>
        {data.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? `${styles.slide} ${styles.active_anim}`
                  : styles.slide
              }
            >
              {currentData?.file_link?.includes(".mp4") ? (
                <video
                  ref={videRef}
                  loop
                  playsInline
                  controls
                  width={"100%"}
                  height={"100%"}
                >
                  <source src={currentData?.file_link} type="video/mp4" />
                </video>
              ) : (
                <img src={currentData?.file_link}></img>
              )}
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </>
  );
}

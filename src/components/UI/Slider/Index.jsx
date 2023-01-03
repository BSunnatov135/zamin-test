import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import BtnSlider from "./BtnSlider";
import { useMemo } from "react";
import { useRef } from "react";

export default function Slider({ data, title }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const videRef = useRef(null);
  const [autoPlay, setautoPlay] = useState(false);
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
    if (currentData?.type === "mp4" && videRef?.current && autoPlay) {
      videRef.current.play();
    }
  }, [currentData, videRef, autoPlay]);

  return (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {currentData && (
        <div className={styles.containerSlider}>
          {data.map((obj, index) => {
            return (
              <>
                <div
                  key={obj.id}
                  className={
                    slideIndex === index + 1
                      ? `${styles.slide} ${styles.active_anim}`
                      : styles.slide
                  }
                >
                  {currentData?.type === "mp4" ? (
                    <video
                      autoPlay={true}
                      ref={videRef}
                      loop
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
              </>
            );
          })}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
      )}
    </>
  );
}

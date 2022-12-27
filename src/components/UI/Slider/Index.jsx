import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import BtnSlider from "./BtnSlider";
import sliderData from "./SliderData";
import event1 from "/public/images/ev1.png";
import { useMemo } from "react";
import useTranslation from "next-translate/useTranslation";

export default function Slider({ data, title }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    }
  };

  const currentData = useMemo(() => {
    return data[slideIndex - 1];
  }, [slideIndex, data]);

  return (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.containerSlider}>
        {sliderData.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? `${styles.slide} ${styles.active_anim}`
                  : styles.slide
              }
            >
              <img src={currentData?.file_link}></img>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </>
  );
}

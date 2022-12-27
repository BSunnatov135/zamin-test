import React from "react";
import styles from "./style.module.scss";
import LeftArrow from "/src/assests/icons/leftArrow.svg";
import RightArrow from "/src/assests/icons/rightCarouselArrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? `${styles.btnSlide} ${styles.next}`
          : `${styles.btnSlide} ${styles.prev}`
      }
    >
      {direction === "next" ? <RightArrow /> : <LeftArrow />}
    </button>
  );
}

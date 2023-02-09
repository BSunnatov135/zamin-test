import React, { useState } from "react";
import styles from "./style.module.scss";
import BtnSlider from "./BtnSlider/BtnSlider";
import { useMemo } from "react";
import Slider from "react-slick";

export default function InfoSlider({ data, title }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const [slideIndex, setSlideIndex] = useState(1);

  // console.log("slideIndex", data);

  // const nextSlide = () => {
  //   if (slideIndex < data.length) {
  //     setSlideIndex(slideIndex + 1);
  //   } else {
  //     setSlideIndex(1);
  //   }
  // };
  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1);
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(data.length);
  //   }
  // };
  // const newArr = [];
  // const currentData = useMemo(() => {
  //   data.filter((el) => el.file_link && newArr?.push(el));
  // }, [newArr, data]);
  // console.log("newArr", newArr);
  console.log("data", data);
  return (
    <>
      <h2
        className={styles.sectionTitle}
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
      {data &&
        (data.length > 1 ? (
          <>
            {/* <div className={styles.containerSlider}>
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
                      {currentData?.type?.toLowerCase() === "mp4" ? (
                        <video
                          loop
                          playsInline
                          autoPlay
                          muted
                          controls
                          height={"100%"}
                        >
                          <source
                            src={currentData?.file_link}
                            type="video/mp4"
                          />
                        </video>
                      ) : (
                        <img src={currentData?.file_link} />
                      )}
                    </div>
                  </>
                );
              })}

              <BtnSlider moveSlide={nextSlide} direction={"next"} />
              <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </div>
            <div className={styles.sliderDotsWrapper}>
              {data.map((_, index) => (
                <div
                  className={`${styles.sliderDots} ${
                    index === slideIndex && styles.active
                  }`}
                  key={`dots-${index}`}
                />
              ))}
            </div> */}
            <Slider {...settings} className={styles.containerSlider}></Slider>
          </>
        ) : data.length === 1 ? (
          <div className={styles.singleElement}>
            {data?.type?.toLowerCase() === "mp4" ? (
              <video
                loop
                playsInline
                autoPlay
                muted
                controls
                height={"100%"}
                className={styles.singleElement}
              >
                <source src={data?.file_link} type="video/mp4" />
              </video>
            ) : (
              <img src={data.file_link} className={styles.singleElement} />
            )}
          </div>
        ) : (
          {}
        ))}
    </>
  );
}

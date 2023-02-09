import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import BtnSlider from "./BtnSlider/BtnSlider";
import { useMemo } from "react";
import Slider from "react-slick";
import LeftArrow from "/src/assests/icons/leftArrow.svg";
import RightArrow from "/src/assests/icons/rightCarouselArrow.svg";
import { Container } from "@mui/material";

export default function InfoSlider({ data, title }) {
  const sliderRef = useRef();
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
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
      {data.length > 1 ? (
        <Container>
          <div className={styles.sliderWrapper}>
            <div id="infoSlider">
              <Slider {...settings} className={styles.containerSlider}>
                {data?.map((item) =>
                  item?.file_link?.toLowerCase().includes("mp4") ? (
                    <video loop playsInline autoPlay muted controls>
                      <source src={item?.file_link} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={item.file_link} />
                  )
                )}
              </Slider>
            </div>
            {/* <SampleNextArrow
              styles={styles}
              onClick={() => sliderRef.current.slickNext()}
            />
            <SamplePrevArrow
              styles={styles}
              onClick={() => sliderRef.current.slickPrev()}
            /> */}
          </div>
        </Container>
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
              <source src={data?.[0]?.file_link} type="video/mp4" />
            </video>
          ) : (
            <img src={data?.[0]?.file_link} className={styles.singleElement} />
          )}
        </div>
      ) : (
        {}
      )}
    </>
  );
}
// export function SampleNextArrow({ styles, onClick }) {
//   return (
//     <div className={styles.nextArrow} onClick={onClick}>
//       <RightArrow />
//     </div>
//   );
// }

// export function SamplePrevArrow({ styles, onClick }) {
//   return (
//     <div className={styles.prevArrow} onClick={onClick}>
//       <LeftArrow />
//     </div>
//   );
// }

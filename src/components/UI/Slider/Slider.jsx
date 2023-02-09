import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import Slider from "react-slick";
import LeftArrow from "/src/assests/icons/leftArrow.svg";
import GoLeft from "/src/assests/icons/goLeft.svg";
import RightArrow from "/src/assests/icons/rightCarouselArrow.svg";
import { Container } from "@mui/material";
import Link from "next/link";

export default function InfoSlider({ data, title }) {
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
  //     setSlideIndex(slideIndex - 1);LeftArrow
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
      <div className={styles.titleWrapper}>
        <Link href="javascript:history.back()" passHref>
          <GoLeft className={styles.leftArrow} width="25" height="23" />
        </Link>
        <h2
          className={styles.sectionTitle}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </div>
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

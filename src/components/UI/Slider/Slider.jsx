import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import SlickSlider from "react-slick";
import LeftArrow from "/src/assests/icons/leftArrow.svg";
import GoLeft from "/src/assests/icons/goLeft.svg";
import RightArrow from "/src/assests/icons/rightCarouselArrow.svg";
import { Container } from "@mui/material";
import Link from "next/link";
import classNames from "classnames";

export default function InfoSlider({ data, title, queryFrom }) {
  const settings = {
    dots: true,
    speed: 500,
    height: "800px",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    focus: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  // const sliderRef = useRef(null);

  // useEffect(() => {
  //   const track = sliderRef.current?.innerSlider?.list?.querySelector('.slick-track');
  //   const focusSlider = setTimeout(() => {
  //     const slide = track?.querySelector('.slick-slide');
  //     slide.focus();
  //   }, 0);
  //   return () => clearTimeout(focusSlider);
  // }, []);

  // const [slideIndex, setSlideIndex] = useState(1);

  console.log("slideIndex", data);

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
  return (
    <>
      <div className={styles.titleWrapper}>
        <Link href="javascript:history.back()" passHref>
          <GoLeft className={styles.leftArrow} width="25" height="21" />
        </Link>
        <div
          className={styles.sectionTitle}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </div>
      {data.length > 1 ? (
        <div className={styles.sliderWrapper}>
          <div id="infoSlider">
            <SlickSlider
              {...settings}
              // ref={sliderRef}
              className={classNames({
                [styles.containerSlider]: queryFrom == "events",
              })}
            >
              {data?.map(
                (item) =>
                  item?.file_link &&
                  (item?.file_link?.toLowerCase().includes("mp4") ||
                  item?.file_link?.toLowerCase().includes("mov") ? (
                    <video loop playsInline autoPlay muted controls>
                      <source src={item?.file_link} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.file_link}
                      alt=""
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/images/default.svg";
                      }}
                      height="100%"
                    />
                  ))
              )}
            </SlickSlider>
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
      ) : data.length === 1 ? (
        <div
          className={classNames(styles.singleElement, {
            [styles.singleEventElement]: queryFrom == "events",
          })}
        >
          {data?.type?.toLowerCase() === "mp4" ||
          item?.file_link?.toLowerCase().includes("mov") ? (
            <video
              loop
              playsInline
              autoPlay
              muted
              controls
              height={"100%"}
              className={classNames(styles.singleElement, {
                [styles.singleEventElement]: queryFrom == "events",
              })}
            >
              <source src={data?.[0]?.file_link} type="video/mp4" />
            </video>
          ) : (
            <img
              src={data?.[0]?.file_link}
              className={classNames(styles.singleElement, {
                [styles.singleEventElement]: queryFrom == "events",
              })}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/images/default.svg";
              }}
            />
          )}
        </div>
      ) : (
        ""
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

import { Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from "/src/assests/icons/goLeft.svg";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import Play from "assests/icons/videoPlay.svg";
import { useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.next} onClick={onClick}>
      <ArrowRightIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.prev} onClick={onClick}>
      <ArrowRightIcon />
    </div>
  );
}

export default function RelatedStories({ data }) {
  const { lang } = useTranslation();
  const [guId, setGuId] = useState();
  // console.log("guIdguIdguId", guId);
  return (
    <Container>
      <Slider
        {...{
          dots: false,
          arrows: true,
          infinite: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          speed: 500,
          slidesToShow: data?.response.length < 3 ? 1 : 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}
        className={styles.slider}
      >
        {data?.response.map((item, index) => (
          <div className={styles.item} key={index}>
            <video
              className={styles.storyFile}
              src={item?.[`${lang}_story_file`]}
              style={{ width: "395px", height: "100%" }}
              // controls
            />
            <p
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: item[`${lang}_header`],
              }}
            ></p>
            <span className={styles.icon} onClick={() => setGuId(item.guid)}>
              <Play />
            </span>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

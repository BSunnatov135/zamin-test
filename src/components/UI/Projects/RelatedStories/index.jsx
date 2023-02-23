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
import StoriesModal from "./StoriesModal";

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
  const { t } = useTranslation("common");
  const [guId, setGuId] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(data?.respose?.uz_story_file.type);

  const filteredData = data?.response?.filter(
    (v, i, a) => a.findIndex((t) => t.guid === guId) === i
  );
  return (
    <Container>
      <h2 className={styles.title}>{t("stories")}</h2>
      <Slider
        {...{
          dots: false,
          arrows: true,
          infinite: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          speed: 500,
          slidesToShow: 3,
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
          <div key={index} className={styles.slide}>
            <div
              className={styles.item}
              onClick={() => {
                setGuId(item.guid);
                handleOpen();
              }}
            >
              <video src={item?.[`${lang}_story_file`]} />
              <p
                className={styles.name}
                dangerouslySetInnerHTML={{
                  __html: item[`${lang}_header`],
                }}
              ></p>
              <span className={styles.icon}>
                <Play />
              </span>
            </div>
          </div>
        ))}
      </Slider>
      <StoriesModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        data={filteredData}
      />
    </Container>
  );
}

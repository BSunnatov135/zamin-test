import { Container } from "@mui/material";
import styles from "./style.module.scss";
import { Box } from "@mui/system";
import useAchievements from "services/achievements";
import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from "/public/icons/icons";

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

export default function Achievements() {
  const { lang } = useTranslation();

  const { achievements } = useAchievements({
    achieveParams: {
      on_main: true,
    },
  });

  console.log("achievements", achievements);
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        background: "#09999a",
      }}
    >
      <Container className={styles.main}>
        <h2 className={styles.head}>{t("achievement_title")}</h2>
        <Slider
          {...{
            dots: false,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
            ],
          }}
          className={styles.slider}
        >
          {achievements?.data?.response?.map((element) => {
            return (
              <div key={element.guid} className={styles.item}>
                <p
                  className={styles.title}
                  dangerouslySetInnerHTML={{
                    __html: element?.[`${lang}_title`],
                  }}
                />
                <p
                  className={styles.desc}
                  dangerouslySetInnerHTML={{
                    __html: element?.[`${lang}_description`],
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
}

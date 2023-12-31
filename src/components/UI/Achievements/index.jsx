import { Container } from "@mui/material";
import styles from "./style.module.scss";
import { Box } from "@mui/system";
import useAchievements from "services/achievements";
import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from "/public/icons/icons";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const { achievements } = useAchievements({
    achieveParams: {
      on_main: true,
    },
  });
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        background: "#09999a",
      }}
    >
      <Container className={styles.main}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.head}>{t("achievement_title")}</h2>
          <p
            style={{ cursor: "pointer", display: "flex" }}
            onClick={() => {
              router.push("/achievements");
            }}
          >
            {t("more")}{" "}
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </p>
        </div>
        <Slider
          {...{
            dots: false,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3,
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
        <div className={styles.sliderNon}>
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
        </div>
      </Container>
    </Box>
  );
}

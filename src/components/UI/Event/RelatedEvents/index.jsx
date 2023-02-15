import { Container } from "@mui/material";
import useEvents from "services/events";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from "/src/assests/icons/goLeft.svg";
import styles from "./style.module.scss";
import EventItem from "../EventItem";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

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

export default function RelatedEvents(data) {
  const { lang } = useTranslation();
  const { t } = useTranslation("common");
  return (
    <Container>
      <h2 className={styles.title}>{t("event_title_related")}</h2>
      <Slider
        {...{
          dots: false,
          arrows: true,
          infinite: false,
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
        {data?.data?.$website_events_ids_data?.map((item, index) => {
          return (
            <Link key={index} href={`/events-info/${item.guid}?from=events`}>
              <a>
                <div className={styles.item} key={item.img}>
                  <div className={styles.img}>
                    <img
                      src={item[`${lang}_poster`]}
                      alt={item[`${lang}_header`]}
                    />
                  </div>
                  <div className={styles.body}>
                    <p
                      className={styles.body__title}
                      dangerouslySetInnerHTML={{
                        __html: item?.[`${lang}_header`],
                      }}
                    />
                    <p
                      className={styles.body__text}
                      dangerouslySetInnerHTML={{
                        __html: item?.[`${lang}_description`],
                      }}
                    />
                  </div>
                  {/* <span className={styles.more}>
                    <Link
                      href={`/events-info/${item.guid}?from=events`}
                      styles={styles.body__link}
                    >
                      <a>
                        {t("more")} <ArrowRight />
                      </a>
                    </Link>
                  </span> */}
                </div>
              </a>
            </Link>
          );
        })}
      </Slider>
    </Container>
  );
}

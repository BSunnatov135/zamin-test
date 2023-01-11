import { Container } from "@mui/material";
import Link from "next/link";
import BlogTitle from "../BlogTitle";
import styles from "./style.module.scss";
import ArrowRight from "assests/icons/narrowRight.svg";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
import ArrowRightIcon from "assests/icons/arrowRight.svg";
import { useDispatch, useSelector } from "react-redux";
import { setScrollRefAdverts } from "store/scrollFunctionSlice/scrollFunctionSlice";

export default function Advert() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const { adverts } = useAdverts({
    advertParams: {
      offset: 0,
      limit: 6,
    },
  });
  const adversContainerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (adversContainerRef?.current?.offsetTop) {
      setTimeout(() => {
        dispatch(setScrollRefAdverts(adversContainerRef.current.offsetTop));
      }, 0);
    }
  }, [adversContainerRef?.current?.offsetTop]);

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.leftElement}>
            <p className={styles.title}>{t("advert_title")}</p>
          </div>

          <Link href="/news">
            <a className={styles.link}>
              {t("all")} <ArrowRightIcon />
            </a>
          </Link>
        </div>
        <div className={styles.list} ref={adversContainerRef}>
          {adverts?.data?.response?.map((item) => (
            <div key={item.guid} className={styles.item}>
              <div className={styles.header}>
                <Link href={`/info/${item.guid}?from=news`}>
                  <a>
                    <p>{item?.[`${lang}_header`]}</p>
                  </a>
                </Link>
              </div>
              <div className={styles.body}>
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: item?.[`${lang}_description`],
                  }}
                ></p>
              </div>
              <Link href={`/info/${item.guid}?from=news`}>
                <a className={styles.link}>
                  {t("more")}
                  <ArrowRight />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

import { Container } from "@mui/material";
import Link from "next/link";
import BlogTitle from "../BlogTitle";
import styles from "./style.module.scss";
import ArrowRight from "assests/icons/narrowRight.svg";
import useTransition from "next-translate/useTranslation";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
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
        <BlogTitle title={t("advert_title")} />
        <div className={styles.list} ref={adversContainerRef}>
          {adverts?.data?.response?.map((item) => (
            <div key={item.guid} className={styles.item}>
              <div className={styles.header}>
                <p>{item?.[`${lang}_header`]}</p>
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
                <a>
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

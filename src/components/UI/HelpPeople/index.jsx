import { Container } from "@mui/material";
import useTransition from "next-translate/useTranslation";
import styles from "./style.module.scss";
import ArrowRight from "assests/icons/narrowRight.svg";
import Link from "next/link";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";
import SphereItem from "./SphereItem";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMemo } from "react";

export default function HelpPeople() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [index, setIndex] = useState(0);
  const [dataSphere, setDataSphere] = useState([0]);
  const { spheres, sphere } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 5,
    },
    dataSphere: {
      limit: 5,
      offset: 0,
      spheres_id: dataSphere,
    },
  });

  const data = useMemo(() => {
    return sphere?.data?.response[0];
  }, [sphere]);
  console.log(data);
  const hanldeClick = (e) => {
    setDataSphere([e.guid]);
  };

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.element}>
          <div className={styles.leftElement}>
            <h2>{t("helppeople_title")}</h2>
            <div className={styles.box}>
              <div className={styles.header}>
                {spheres?.data?.response?.map((item, i) => (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      hanldeClick(item);
                    }}
                  >
                    <SphereItem
                      key={item.guid}
                      item={item}
                      className={
                        dataSphere?.includes(item.guid) ? styles.active : ""
                      }
                    />
                  </div>
                ))}
              </div>
              <div className={styles.body}>
                <h3>{data?.[`${lang}_name`]}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data?.[`${lang}_description`],
                  }}
                ></p>
                <Link href="/">
                  <a>
                    Подробнее <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.rightElement}>
            <img src="/images/people.png" alt="people" />
          </div>
        </div>
      </div>
    </Container>
  );
}

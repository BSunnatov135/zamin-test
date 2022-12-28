import { Container } from "@mui/material";
import styles from "./style.module.scss";
import ArrowRight from "assests/icons/narrowRight.svg";
import Link from "next/link";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";
import SphereItem from "./SphereItem";

import { useMemo } from "react";
import { useEffect } from "react";

export default function HelpPeople() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
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

  const hanldeClick = (e) => {
    setDataSphere([e.guid]);
  };

  useEffect(() => {
    if (spheres?.data?.response) {
      setDataSphere(spheres?.data?.response[0]?.guid);
    }
  }, [spheres]);
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
                    className={styles.wrapper}
                  >
                    <SphereItem
                      key={item.guid}
                      item={item}
                      className={
                        dataSphere?.includes(item.guid)
                          ? `${styles.active} ${styles.item}`
                          : styles.item
                      }
                    />
                  </div>
                ))}
              </div>
              <div className={styles.body}>
                <h3>{data?.[`${lang}_name`]}</h3>
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: data?.[`${lang}_description`],
                  }}
                ></p>
                <Link href={`/info/${data?.guid}`}>
                  <a>
                    {t("more")} <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.rightElement}>
            <img src={data?.photo} />
          </div>
        </div>
      </div>
    </Container>
  );
}

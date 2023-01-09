import { Container } from "@mui/material";
import styles from "./style.module.scss";
import AdvertItem from "../AdvertItem";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material";

export default function AdvertList() {
  const { t } = useTranslation("common");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const { adverts } = useAdverts({
    advertParams: {
      offset: currentPage * limit,
      limit: limit,
    },
  });

  useEffect(() => {
    if (adverts?.data?.response?.length > 0) {
      if (currentPage == 1) {
        setData(adverts?.data?.response);
      } else {
        setData((prev) => [...prev, ...adverts?.data?.response]);
      }
    }
    if (adverts?.data?.count === data?.length) {
      setHasMore(false);
    }
  }, [adverts, currentPage]);

  return (
    <Container>
      <div className={styles.main}>
        <h2 className={styles.sectionTitle}>{t("advert_title")}</h2>
        <InfiniteScroll
          dataLength={data?.length || 0}
          style={{ overflow: "visible" }}
          hasMore={hasMore}
          next={() => setCurrentPage((pre) => ++pre)}
          // loader={<h2>Loading</h2>}
        >
          <div className={styles.list}>
            {data?.map((item) => (
              <AdvertItem key={item?.guid} item={item} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </Container>
  );
}

import { Container } from "@mui/material";
import styles from "./style.module.scss";
import EventItem from "../EventItem";
import ArrowDownIcon from "assests/icons/arrowDown.svg";
import { Popover } from "@mui/material";
import { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import useEvents from "services/events";
import useTranslation from "next-translate/useTranslation";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@mui/material";
import CRangePicker from "components/UI/CRangePicker/CRangePicker";
import { format } from "date-fns";
import { useRouter } from "next/router";

export default function EventPage() {
  const [datePicker, setDatePicker] = useState([null, null]);
  const [data, setData] = useState([]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { t } = useTranslation("common");

  const params = {
    $gte: datePicker[0] && format(datePicker?.[0] || new Date(), "yyyy-MM-dd"),
    $lt: datePicker[1] && format(datePicker?.[1] || new Date(), "yyyy-MM-dd"),
  };

  const { events } = useEvents({
    eventParams: {
      date: params.$gte && params.$lt ? params : undefined,
      offset: (currentPage - 1) * 6,
      limit: 6,
    },
  });

  const ResponseData = () => {
    if (events?.data?.response.length) {
      if (!events?.data?.response?.length) return setHasMore(false);
      if (currentPage == 1) {
        setData(events?.data?.response);
      } else {
        setData((prev) => [...prev, ...events?.data?.response]);
      }
    } else if (events?.data?.count === 0) {
      setHasMore(false);
      setData([]);
    }
  };

  useEffect(() => {
    if (data?.length === events?.data?.count) {
      setHasMore(false);
    } else {
      ResponseData();
    }
  }, [events?.data?.response, currentPage]);

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2 className={styles.sectionTitle}>{t("event_title")}</h2>
          <CRangePicker
            value={datePicker}
            onChange={(val) => {
              const data = val[1];
              const lastDayOfMonth = new Date(
                data?.getFullYear(),
                data?.getMonth() + 1,
                0
              );
              console.log(val[1]);
              setDatePicker([val[0], val[1] === null ? null : lastDayOfMonth]);
            }}
          />
        </div>

        {data?.length > 0 && (
          <InfiniteScroll
            dataLength={data?.length || 0}
            style={{ overflow: "visible" }}
            hasMore={hasMore}
            next={() => setCurrentPage((pre) => ++pre)}
            loader={
              hasMore && (
                <div className={styles.skeletonWrapper}>
                  <div className={styles.skeletonItem}>
                    <Skeleton variant="rectangle" width="100%" height="50px" />
                    <Skeleton variant="rectangle" width="100%" height="130px" />
                    <Skeleton variant="rectangle" width="212px" height="24px" />
                  </div>
                  <div className={styles.skeletonItem}>
                    <Skeleton variant="rectangle" width="100%" height="50px" />
                    <Skeleton variant="rectangle" width="100%" height="130px" />
                    <Skeleton variant="rectangle" width="212px" height="24px" />
                  </div>
                  <div className={styles.skeletonItem}>
                    <Skeleton variant="rectangle" width="100%" height="50px" />
                    <Skeleton variant="rectangle" width="100%" height="130px" />
                    <Skeleton variant="rectangle" width="212px" height="24px" />
                  </div>
                </div>
              )
            }
          >
            {data.length > 0 && (
              <div className={styles.list}>
                {data?.map((item) => (
                  <EventItem key={item?.guid} item={item} />
                ))}
              </div>
            )}
          </InfiniteScroll>
        )}
      </div>
    </Container>
  );
}

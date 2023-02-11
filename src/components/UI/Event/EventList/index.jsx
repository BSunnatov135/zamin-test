import { Container, Pagination, PaginationItem } from "@mui/material";
import styles from "./style.module.scss";
import EventItem from "../EventItem";
import { useState, useEffect } from "react";
import useEvents from "services/events";
import useTranslation from "next-translate/useTranslation";
import CRangePicker from "components/UI/CRangePicker/CRangePicker";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useStylesPagination } from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function EventPage() {
  const [datePicker, setDatePicker] = useState([null, null]);
  const [data, setData] = useState([]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { t } = useTranslation("common");
  const classPagination = useStylesPagination();
  const [page, setPage] = useState(1);

  const params = {
    $gte: datePicker[0] && format(datePicker?.[0] || new Date(), "yyyy-MM-dd"),
    $lt: datePicker[1] && format(datePicker?.[1] || new Date(), "yyyy-MM-dd"),
  };

  const { events } = useEvents({
    eventParams: {
      date: params.$gte && params.$lt ? params : undefined,
      offset: (page - 1) * 6,
      limit: 6,
    },
  });

  console.log("eventsevents", events?.data?.response);
  const ResponseData = () => {
    if (events?.data?.count) {
      if (currentPage == 1) {
        setData(events?.data?.response);
      } else {
        setData((prev) => [...prev, ...events?.data?.response]);
      }
    }
  };

  const countData = events?.data?.count;
  const responseData = events?.data?.response;

  const handleChange = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    ResponseData();
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
        <div>
          {responseData?.length > 0 && (
            <div className={styles.list}>
              {responseData?.map((item) => (
                <EventItem key={item?.guid} item={item} />
              ))}
            </div>
          )}
          <Pagination
            className={`${styles.pagination} ${classPagination.root}`}
            count={Math.ceil(countData / 6)}
            page={page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      </div>
    </Container>
  );
}

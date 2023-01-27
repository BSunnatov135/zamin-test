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

export default function EventPage() {
  const [datePicker, setDatePicker] = useState([null, null]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggle, setToggle] = useState("w");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const { t } = useTranslation("common");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const params = {
    $gte: datePicker[0] && format(datePicker[0], "yyyy-MM-dd"),
    $lt: datePicker[1] && format(datePicker[1], "yyyy-MM-dd"),
  };

  const { events } = useEvents({
    eventParams: {
      date: params.$gte ? params : undefined,
      offset: (currentPage - 1) * limit,
      limit: limit,
    },
  });

  useEffect(() => {
    if (events?.data?.response?.length > 0) {
      if (currentPage == 1) {
        setData(events?.data?.response);
      } else {
        setData((prev) => [...prev, ...events?.data?.response]);
      }
    }
    if (events?.data?.count < (currentPage - 1) * limit) {
      setHasMore(false);
    }
  }, [events, currentPage]);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2 className={styles.sectionTitle}>{t("event_title")}</h2>
          {/* <div className={styles.chooseDate}> */}
          <CRangePicker value={datePicker} onChange={setDatePicker} />
          {/* </div> */}
          {/* <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
              width: "217px",
            }}
          >
            <ul className={styles.popover}>
              <li
                className={styles.item}
                onClick={(e) => {
                  handleClose(e);
                  setToggle("w");
                }}
              >
                {t("week")}
                {toggle === "w" && <CheckIcon fontSize="small" />}
              </li>
              <li
                className={styles.item}
                onClick={(e) => {
                  handleClose(e);
                  setToggle("m");
                }}
              >
                {t("month")}
                {toggle === "m" && <CheckIcon fontSize="small" />}
              </li>
              <li
                className={styles.item}
                onClick={(e) => {
                  handleClose(e);
                  setToggle("h");
                }}
              >
                {t("half_year")}
                {toggle === "h" && <CheckIcon fontSize="small" />}
              </li>
              <li
                className={styles.item}
                onClick={(e) => {
                  handleClose(e);
                  setToggle("y");
                }}
              >
                {t("year")}
                {toggle === "y" && <CheckIcon fontSize="small" />}
              </li>
            </ul>
          </Popover> */}
        </div>

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
          <div className={styles.list}>
            {data?.map((item) => (
              <EventItem key={item?.guid} item={item} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </Container>
  );
}

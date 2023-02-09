import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { useStylesPagination } from "./styles";
import styles from "./style.module.scss";
import EventItem from "../EventItem";
import useEvents from "services/events";

function MobileEvent({ data, params }) {
  const [page, setPage] = useState(1);
  const classPagination = useStylesPagination();

  const { events } = useEvents({
    eventParams: {
      date: params.$gte && params.$lt ? params : undefined,
      offset: (page - 1) * 6,
      limit: 6,
    },
  });

  const countData = events?.data?.count;
  const responseData = events?.data?.response;

  const handleChange = (_, value) => {
    setPage(value);
  };

  return (
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
          <PaginationItem components={{ next: ArrowForwardIcon }} {...item} />
        )}
      />
    </div>
  );
}

export default MobileEvent;

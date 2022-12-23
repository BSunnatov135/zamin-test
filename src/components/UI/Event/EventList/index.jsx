import { Container } from "@mui/material";
import styles from "./style.module.scss";
import EventItem from "../EventItem";
import ArrowDownIcon from "assests/icons/arrowDown.svg";
import { Popover } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import useEvents from "services/events";
import useTranslation from "next-translate/useTranslation";

export default function EventPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggle, setToggle] = useState("w");
  const { t } = useTranslation("common");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { events } = useEvents({
    eventParams: {
      offset: 0,
      limit: 100,
    },
  });
  console.log("event_data=", events?.data);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2 className={styles.sectionTitle}>{t("event_title")}</h2>
          <div className={styles.chooseDate} onClick={handleClick}>
            <p>{t("by_date")}</p>
            <ArrowDownIcon />
          </div>
          <Popover
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
          </Popover>
        </div>

        <div className={styles.list}>
          {events?.data?.response?.map((item) => (
            <EventItem key={item.guid} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}

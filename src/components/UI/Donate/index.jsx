import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import classNames from "classnames";
import ArrowDownIcon from "assests/icons/arrowDown.svg";
import { Popover } from "@mui/material";
import useProjects from "services/projects";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Donate() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [isActive, setIsActive] = useState("50");
  const types = ["all", "project"];
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const [type, setType] = useState(types[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const { projects } = useProjects({
    projectParams: {
      offset: (currentPage - 1) * limit,
      limit: limit,
    },
  });

  useEffect(() => {
    if (projects?.data?.response?.length > 0) {
      if (currentPage == 1) {
        setData(projects?.data?.response);
      } else {
        setData((prev) => [...prev, ...projects?.data?.response]);
      }
    }
    if (projects?.data?.count < (currentPage - 1) * limit) {
      setHasMore(false);
    }
  }, [projects, currentPage]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log("data", data);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("donate_title")}</h2>
      <div className={styles.formWrapper}>
        <div className={styles.typeWrapper}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setType(types[0]);
            }}
            className={classNames(styles.item, {
              [styles.chosen]: type == "all",
            })}
          >
            {t("donate_to_general_fund")}
          </p>
          <p
            onClick={(e) => {
              e.preventDefault();
              setType(types[1]);
            }}
            className={classNames(styles.item, {
              [styles.chosen]: type == "project",
            })}
          >
            {t("donate_to_project")}
          </p>
        </div>
        <div style={{ width: "100%" }}>
          {type === "project" && (
            <div
              className={styles.chooseAmount}
              style={{ display: "grid", gridTemplateColumns: "100%" }}
            >
              <p>{t("choose_project")}</p>
              <p onClick={handleClick} className={styles.chooseProject}>
                <span>{t("project")}</span>
                <ArrowDownIcon />
              </p>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                className={styles.popoverWrapper}
                transformOrigin={{ horizontal: "center", vertical: "top" }}
              >
                <InfiniteScroll
                  dataLength={data?.length || 0}
                  style={{ overflow: "visible" }}
                  hasMore={hasMore}
                  next={() => setCurrentPage((pre) => ++pre)}
                  loader="loading"
                  className={styles.scroll}
                >
                  <ul className={styles.popover}>
                    {data?.map((item) => (
                      <li onClick={handleClose}>{item[`${lang}_name`]}</li>
                    ))}
                  </ul>
                </InfiniteScroll>
              </Popover>
            </div>
          )}
        </div>
        <>
          <div className={styles.chooseAmount}>
            <p>{t("select_amount")}</p>
            <div className={styles.amountButtons}>
              <div
                onClick={() => {
                  setIsActive("50");
                }}
                className={classNames(styles.amountItem, {
                  [styles.active]: isActive === "50",
                })}
              >
                <p>50 000 {t("sum")}</p>
              </div>
              <div
                onClick={() => {
                  setIsActive("200");
                }}
                className={classNames(styles.amountItem, {
                  [styles.active]: isActive === "200",
                })}
              >
                <p>200 000 {t("sum")}</p>
              </div>
              <div
                onClick={() => {
                  setIsActive("300");
                }}
                className={classNames(styles.amountItem, {
                  [styles.active]: isActive === "300",
                })}
              >
                <p>300 000 {t("sum")}</p>
              </div>
              <div
                onClick={() => {
                  setIsActive("500");
                }}
                className={classNames(styles.amountItem, {
                  [styles.active]: isActive === "500",
                })}
              >
                <p>500 000 {t("sum")}</p>
              </div>
              <div
                onClick={() => {
                  setIsActive("other");
                }}
                className={classNames(styles.amountItem, {
                  [styles.active]: isActive === "other",
                })}
              >
                <p>{t("other_amount")}</p>
              </div>
            </div>
          </div>
          <div className={styles.comments}>
            <p>{t("comments")}</p>
            <form>
              <textarea placeholder={t("comments")} width={"100%"}></textarea>
            </form>
          </div>
        </>
      </div>
      <div className={styles.formWrapper}>
        <h3 className={styles.formTitle}>{t("your_info")}</h3>
        <form className={styles.form}>
          <div className={styles.formInput}>
            <label htmlFor="name">{t("name")}</label>
            <input type="text" height={"48px"} width={"100%"} />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="name">{t("surname")}</label>
            <input type="text" height={"48px"} width={"100%"} />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="name">{t("middle_name")}</label>
            <input type="text" height={"48px"} width={"100%"} />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="name">{t("phone")}</label>
            <input type="text" height={"48px"} width={"100%"} />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="name">{t("email")}</label>
            <input type="text" height={"48px"} width={"100%"} />
          </div>
        </form>
      </div>
    </div>
  );
}

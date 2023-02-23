import { Container } from "@mui/material";
import styles from "./style.module.scss";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import useEvents from "services/events";
import useProjects from "services/projects";
import Link from "next/link";

export default function SearchBody({ data }) {
  const [value, setValue] = useState("1");
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { events } = useEvents(
    data?.length >= 1
      ? {
          eventParams: {
            [lang + "_description"]: data,
          },
        }
      : {
          eventParams: { offset: 0, limit: 5 },
        }
  );
  // Constant below: is using for sending and getting request by NAME from "Projects"
  const { projects } = useProjects(
    data?.length >= 1
      ? {
          projectParams: {
            [lang + "_description"]: data,
          },
        }
      : {
          projectParams: { offset: 0, limit: 5 },
        }
  );
  /////
  // const { searchEvents } = useEvents({
  //   searchParams: {
  //     [lang + "_description"]: data,
  //   },
  //   inputParams: data,
  // });
  // const { searchProjects } = useProjects({
  //   searchParams: {
  //     [lang + "_description"]: data,
  //   },
  //   inputParams: data,
  // });

  const corEndingns = (count) => {
    if (lang == "ru" && count) {
      if (count == "11" || count == "12" || count == "13" || count == "14") {
        return t("find_results") + "ов";
      } else if (
        count.slice(-1) == "2" ||
        count.slice(-1) == "3" ||
        count.slice(-1) == "4"
      ) {
        return t("find_results") + "а";
      } else if (count.slice(-1) == "1") {
        return t("find_results");
      } else {
        return t("find_results") + "ов";
      }
    } else {
      return t("find_results");
    }
  };

  return (
    <Container className={styles.container}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiButtonBase-root.Mui-selected ": { color: "#09999A" },
              "& .MuiTabs-indicator": { backgroundColor: "#09999A" },
            }}
            textColorPrimary="#09999A"
          >
            <Tab className={styles.tabName} label={t("all")} value="1" />
            <Tab
              className={styles.tabName}
              label={t("find_projects")}
              value="2"
            />
            <Tab
              className={styles.tabName}
              label={t("event_title")}
              value="3"
            />
          </TabList>
        </Box>
        {data?.length >= 1 ? (
          <div className={styles.byRequestBox}>
            {lang !== "uz" ? (
              <h2 className={styles.byRequestTitle}>
                {t("by_request")} «{data}»
              </h2>
            ) : (
              <h2 className={styles.byRequestTitle}>
                «{data}» {t("by_request")}
              </h2>
            )}
            <p className={styles.byRequestOption}>
              {t("find_projects")}: {projects?.data?.count}
              {corEndingns(projects?.data?.count.toString())}
            </p>
            <p className={styles.byRequestOption}>
              {t("event_title")}: {events?.data?.count}
              {corEndingns(events?.data?.count.toString())}
            </p>
          </div>
        ) : null}
        <TabPanel value="1" className={styles.cards}>
          {projects?.data?.response.map((event) => (
            <Link
              key={event.guid}
              className={styles.card}
              href={`/project-info/${event.guid}?from=events`}
              passHref
            >
              <a className={styles.card}>
                <div className={styles.textWrapper}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_name`],
                    }}
                    className={styles.title}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_description`],
                    }}
                    className={styles.description}
                  ></p>
                </div>
                <img
                  className={styles.image}
                  src={event?.[`${lang}_photo`]}
                  alt={event.guid}
                  width="170"
                />
              </a>
            </Link>
          ))}
          {events?.data?.response.map((event) => (
            <Link
              key={event.guid}
              href={`/events-info/${event.guid}?from=events`}
              passHref
            >
              <a className={styles.card}>
                <div className={styles.textWrapper}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_header`],
                    }}
                    className={styles.title}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_description`],
                    }}
                    className={styles.description}
                  ></p>
                </div>
                <img
                  className={styles.image}
                  src={event?.[`${lang}_poster`]}
                  alt={event.guid}
                  width="170"
                />
              </a>
            </Link>
          ))}
        </TabPanel>
        <TabPanel value="2" className={styles.cards}>
          {projects?.data?.response.map((event) => (
            <Link
              key={event.guid}
              className={styles.card}
              href={`/project-info/${event.guid}?from=events`}
              passHref
            >
              <a className={styles.card}>
                <div className={styles.textWrapper}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_name`],
                    }}
                    className={styles.title}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_description`],
                    }}
                    className={styles.description}
                  ></p>
                </div>
                <img
                  className={styles.image}
                  src={event?.[`${lang}_photo`]}
                  alt={event.guid}
                  width="170"
                />
              </a>
            </Link>
          ))}
        </TabPanel>
        <TabPanel value="3" className={styles.cards}>
          {events?.data?.response.map((event) => (
            <Link
              key={event.guid}
              href={`/events-info/${event.guid}?from=events`}
              passHref
            >
              <a className={styles.card}>
                <div className={styles.textWrapper}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_header`],
                    }}
                    className={styles.title}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event?.[`${lang}_description`],
                    }}
                    className={styles.description}
                  ></p>
                </div>
                <img
                  className={styles.image}
                  src={event?.[`${lang}_poster`]}
                  alt={event.guid}
                  width="170"
                />
              </a>
            </Link>
          ))}
        </TabPanel>
      </TabContext>
    </Container>
  );
}

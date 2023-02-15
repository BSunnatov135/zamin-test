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

export default function SearchBody({ data }) {
  const [value, setValue] = useState("1");
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { events } = useEvents({
    eventParams: {
      [lang + "_header"]: data,
    },
  });
  const { projects } = useProjects({
    projectParams: {
      [lang + "_name"]: data,
    },
  });

  console.log(events);
  return (
    <Container>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={t("projects")} value="1" />
            <Tab label={t("event_title")} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className={styles.cards}>
          {projects?.data?.response.map((event) => (
            <div key={event.guid} className={styles.card}>
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
          ))}
        </TabPanel>
        <TabPanel value="2" className={styles.cards}>
          {events?.data?.response.map((event) => (
            <div key={event.guid} className={styles.card}>
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
          ))}
        </TabPanel>
      </TabContext>
    </Container>
  );
}

import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";
import AllProjects from "../AllProjects/AllProjects";
import { getSphere } from "services/spheres";
import { useState } from "react";
import { Popover } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useStyles } from "./styles";

export default function ProjectsPage() {
  const { t, lang } = useTranslation("common");
  const [spheres, setSpheres] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function getAllData(values) {
    return Promise.all(
      values.map((value) => {
        return getSphere(value.data)
          .then((res) => res.data.response)
          .catch((err) => console.log("err", err));
      })
    );
  }

  const {} = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
    onSuccess: (res) => {
      const values = res.data.response?.map((item) => ({
        data: {
          spheres_id: item.guid,
          offset: 0,
          limit: 99,
        },
      }));
      getAllData(values).then((result) => {
        setSpheres(result);
      });
    },
  });

  const windowScrollTo = (selector, yOffset = -70) => {
    if (typeof window !== "undefined") {
      const el = document.querySelector("#" + selector);
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y });
    }
  };

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.mainHead}>
          <div className={styles.options}>
            <div className={styles.select} onClick={handleClick}>
              {t("all_projects")}{" "}
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              classes={classes}
              className={styles.popover}
            >
              {spheres.map((item, index) => (
                <p
                  key={index}
                  className={styles.option}
                  onClick={() => {
                    handleClose();
                    windowScrollTo("project-" + index);
                  }}
                >
                  {item[0]?.spheres_id_data?.[`${lang}_name`]}
                </p>
              ))}
            </Popover>
          </div>
        </div>

        <AllProjects spheres={spheres} />
      </div>
    </Container>
  );
}

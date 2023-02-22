import { Container } from "@mui/material";
import styles from "./style.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function StoriesModal({ open, data, handleClose }) {
  console.log(data[0]);
  const { lang } = useTranslation();
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className={styles.Modal}
      >
        <Box className={styles.Box}>
          <div className={styles.item} key={data[0]?.guid}>
            <video
              className={styles.storyFile}
              src={data[0]?.[`${lang}_story_file`]}
              autoPlay
              controls
            />
            <div className={styles.fileDescription}>
              <h3
                className={styles.name}
                dangerouslySetInnerHTML={{
                  __html: data[0]?.[`${lang}_header`],
                }}
              ></h3>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{
                  __html: data[0]?.[`${lang}_description`],
                }}
              ></p>
              <Button
                onClick={() =>
                  router.push({
                    pathname: `/stories`,
                    query: { stories: data?.[0]?.guid },
                  })
                }
                className={styles.button}
              >
                {t("more") + " ⇾"}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

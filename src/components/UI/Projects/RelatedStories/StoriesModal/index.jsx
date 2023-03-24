import { Container } from "@mui/material";
import styles from "./style.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";

export default function StoriesModal({ open, data, handleClose }) {
  const { lang } = useTranslation();
  const { t } = useTranslation("common");
  const router = useRouter();
  //data?.response?.[`${lang}_story_file`]
  let string = "asdbs.jpeg";
  const types = [" mp4", "mov", "avi", "flv", "mkv", "webm", "mpeg-4"];
  const fileTypes = (data) => {
    if (
      data?.includes("mkv") ||
      data?.includes("mp4") ||
      data?.includes("mov") ||
      data?.includes("webm") ||
      data?.includes("mpeg-4")
    ) {
      return true;
    } else {
      return false;
    }
  };
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
            {fileTypes(data?.[0]?.[`${lang}_story_file`]) === true ? (
              <ReactPlayer
                className={styles.storyFile}
                url={data[0]?.[`${lang}_story_file`]}
                controls
              />
            ) : (
              <img
                src={data[0]?.[`${lang}_story_file`]}
                alt={data[0]?.guid}
                className={styles.storyFile}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              />
            )}
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

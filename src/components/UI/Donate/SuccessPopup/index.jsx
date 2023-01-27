import Dialog from "@mui/material/Dialog";
import styles from "./style.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import useTranslation from "next-translate/useTranslation";

export default function SuccessPopup({ open, handleClose }) {
  const { t } = useTranslation("common");
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={styles.box}>
        <div
          className={styles.closeIcon}
          onClick={(e) => {
            handleClose(e);
          }}
        >
          <CloseIcon />
        </div>
        <div className={styles.successLogo}>
          <img src="logos/Solidarity.png" />
        </div>
        <div className={styles.textContent}>
          <h2>{t("success")}</h2>
          <p>{t("success_th")}</p>
        </div>
        <a href="/">
          <button>{t("to_home")}</button>
        </a>
      </div>
    </Dialog>
  );
}

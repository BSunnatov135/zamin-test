import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import classNames from "classnames";

export default function Donate() {
  const { t } = useTranslation("common");
  const types = ["all", "project"];
  const [type, setType] = useState(types[0]);
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
        {type === "all" && (
          <div className={styles.chooseAmount}>
            <p>{t("select_amount")}</p>
            <div className={styles.amountButtons}></div>
          </div>
        )}
        {type === "project" && (
          <div className={styles.chooseAmount}>
            <p>{t("select_amount")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

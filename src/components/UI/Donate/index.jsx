import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import classNames from "classnames";
import useProjects from "services/projects";
import { useSelector } from "react-redux";
import UncontrolledSelect from "./SelectSum";
import InputMask from "react-input-mask";
import SuccessPopup from "./SuccessPopup";

export default function Donate() {
  const { t } = useTranslation("common");
  const [input, setInput] = useState(false);
  const { lang } = useTranslation();
  const [isActive, setIsActive] = useState("50");
  const [method, setMethod] = useState("payme");
  const types = ["all", "project"];
  // const [type, setType] = useState(types[0]);
  const userInfos = useSelector((state) => state.auth.user);
  const [value, setValue] = useState(null);
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const addSpace = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
  const handleChange = (event) =>
    setValue(addSpace(removeNonNumeric(event.target.value)));
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 100,
    },
  });
  const handleSuccessPopup = (event) => {
    event && event.preventDefault();
    setOpenSuccessPopup((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("donate_title")}</h2>
        <div className={styles.formWrapper}>
          <p className={styles.item}>{t("donate_to_general_fund")}</p>
          {/* <div className={styles.typeWrapper}>
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
                setType(types[0]);
              }}
              className={classNames(styles.resItem, {
                [styles.chosen]: type == "all",
              })}
            >
              {t("res_general_fund")}
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                setType(types[1]);
              }}
              className={classNames(styles.resItem, {
                [styles.chosen]: type == "project",
              })}
            >
              {t("res_project")}
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
          </div> */}
          {/* <div style={{ width: "100%" }}>
            {type === "project" && (
              <div
                className={styles.chooseAmount}
                style={{ display: "grid", gridTemplateColumns: "100%" }}
              >
                <p>{t("choose_project")}</p>
                <UncontrolledSelect
                  placeholder={t("project")}
                  options={projects?.data?.response?.map((item) => {
                    return {
                      value: item[`${lang}_name`],
                      label: item[`${lang}_name`],
                    };
                  })}
                  onMenuScrollToBottom
                />
              </div>
            )}
          </div> */}
          <>
            <div className={styles.chooseAmount}>
              <p>{t("select_amount")}</p>
              <div className={styles.amountButtons}>
                <div
                  onClick={() => {
                    setIsActive("50");
                    setInput(false);
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
                    setInput(false);
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
                    setInput(false);
                  }}
                  className={classNames(styles.amountItem, {
                    [styles.active]: isActive === "300",
                  })}
                >
                  <p>300 000 {t("sum")}</p>
                </div>{" "}
                <div
                  onClick={() => {
                    setIsActive("500");
                    setInput(false);
                  }}
                  className={classNames(styles.amountItem, {
                    [styles.active]: isActive === "500",
                  })}
                >
                  <p>500 000 {t("sum")}</p>
                </div>
                <>
                  {input ? (
                    <input
                      onChange={handleChange}
                      type="text"
                      className={styles.sumInput}
                      placeholder={t("enter_amount")}
                      autoFocus
                      value={value}
                    />
                  ) : (
                    <div
                      onClick={() => {
                        setIsActive("other");
                        setInput(true);
                      }}
                      className={classNames(styles.amountItem, {
                        [styles.active]: isActive === "other",
                      })}
                    >
                      <p>{t("other_amount")}</p>
                    </div>
                  )}
                </>
              </div>
            </div>
            <div className={styles.chooseAmount}>
              <p>{t("payment_method")}</p>
              <div className={styles.methodInputWrapper}>
                <div
                  className={classNames(styles.methodInput, {
                    [styles.methodChosen]: method === "payme",
                  })}
                  onClick={() => {
                    setMethod("payme");
                  }}
                >
                  <div className={styles.methodName}>
                    <img src="/logos/payme.png" />
                    <p>Payme</p>
                  </div>
                  <span
                    className={classNames(styles.radio, {
                      [styles.activeRadio]: method === "payme",
                    })}
                  />
                </div>
                <div
                  className={classNames(styles.methodInput, {
                    [styles.methodChosen]: method === "click",
                  })}
                  onClick={() => {
                    setMethod("click");
                  }}
                >
                  <div className={styles.methodName}>
                    <img src="/logos/click.png" />
                    <p>Click</p>
                  </div>
                  <span
                    className={classNames(styles.radio, {
                      [styles.activeRadio]: method === "click",
                    })}
                  />
                </div>
              </div>
            </div>
            {/* <div className={styles.comments}>
              <p>{t("comments")}</p>
              <form>
                <textarea placeholder={t("comments")} width={"100%"}></textarea>
              </form>
            </div> */}
          </>
        </div>
        {/* <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>{t("your_info")}</h3>
          <form className={styles.form} id="form">
            <div className={styles.formInput}>
              <label htmlFor="name">{t("name")}</label>
              <input
                type="text"
                width={"100%"}
                value={userInfos?.name}
                disabled
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="name">{t("surname")}</label>
              <input
                type="text"
                width={"100%"}
                value={userInfos?.surname}
                disabled
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="name">{t("middle_name")}</label>
              <input
                type="text"
                width={"100%"}
                value={userInfos?.second_name}
                disabled
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="name">{t("phone_card")}</label>
              <input
                type="text"
                width={"100%"}
                required
                placeholder={t("enter_number")}
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="name">{t("card_number")}</label>
              <InputMask
                mask="9999 9999 9999 9999"
                type="text"
                width={"100%"}
                required
                placeholder={t("enter_cardnumber")}
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="name">{t("expiry")}</label>
              <InputMask
                mask="99/99"
                type="text"
                width={"100%"}
                required
                placeholder={t("YY/MM")}
              />
            </div>
          </form>
        </div> */}
        <div className={styles.submitButton}>
          <button type="submit" form="form">
            {t("make_donation")}
          </button>
        </div>
        {/* <button
          style={{ padding: "2px" }}
          onClick={(e) => {
            handleSuccessPopup(e);
          }}
        ></button> */}
      </div>
      <SuccessPopup open={openSuccessPopup} handleClose={handleSuccessPopup} />
    </>
  );
}

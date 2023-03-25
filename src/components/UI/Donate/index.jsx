import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import classNames from "classnames";
import useProjects from "services/projects";
import { useSelector } from "react-redux";
// import UncontrolledSelect from "./SelectSum";
// import InputMask from "react-input-mask";
import SuccessPopup from "./SuccessPopup";
import useDonation from "services/donation";
import useDebounce2 from "hooks/useDebounce2";

export default function Donate() {
  const { t } = useTranslation("common");
  const [input, setInput] = useState(false);
  const { lang } = useTranslation();
  const [amount, setAmount] = useState("50000");
  const [method, setMethod] = useState("payme");
  const types = ["all", "project"];
  // const [type, setType] = useState(types[0]);
  const userInfos = useSelector((state) => state.auth.user);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [value, setValue] = useState(null);
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const addSpace = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
  const handleChange = (event) => {
    setValue(addSpace(removeNonNumeric(event.target.value)));
  };
  const handleAnotherSum = useDebounce2((value) => {
    setAmount(value.replace(/\s/g, ""));
  }, 500);
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 100,
    },
  });
  const currentDate = new Date();

  const { donate } = useDonation({
    donationProps: {
      onSuccess: (value) => {
        setRedirectUrl(value?.data?.data);
        
      },
    },
  });

  function hanldePostMethod() {
    donate.mutate({
      amount: +amount,
      date: currentDate.toISOString(),
      platform: method,
    });
  }

  useEffect(() => {
    
    if (amount) hanldePostMethod();
  }, [method, amount]);
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
                    setAmount("50000");
                    setValue("");
                    setInput(false);
                  }}
                  className={classNames(styles.amountItem, {
                    [styles.active]: amount === "50000",
                  })}
                >
                  <p>50 000 {t("sum")}</p>
                </div>
                <div
                  onClick={() => {
                    setAmount("200000");
                    setValue("");
                    setInput(false);
                  }}
                  className={classNames(styles.amountItem, {
                    [styles.active]: amount === "200000",
                  })}
                >
                  <p>200 000 {t("sum")}</p>
                </div>
                <div
                  onClick={() => {
                    setAmount("300000");
                    setValue("");
                    setInput(false);
                  }}
                  className={classNames(styles.amountItem, {
                    [styles.active]: amount === "300000",
                  })}
                >
                  <p>300 000 {t("sum")}</p>
                </div>{" "}
                <div
                  onClick={() => {
                    setAmount("500000");
                    setValue("");
                    setInput(false);
                  }}
                  className={classNames(styles.amountItem, {
                    [styles.active]: amount === "500000",
                  })}
                >
                  <p>500 000 {t("sum")}</p>
                </div>
                <>
                  {input ? (
                    <input
                      onChange={(e) => {
                        handleChange(e);
                        handleAnotherSum(e.target.value);
                      }}
                      type="text"
                      className={styles.sumInput}
                      placeholder={t("enter_amount")}
                      autoFocus
                      value={value}
                    />
                  ) : (
                    <div
                      onClick={() => {
                        setInput(true);
                      }}
                      className={classNames(styles.amountItem, {
                        [styles.active]: method === "other",
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
          <a href={redirectUrl} target="_blank">
            {t("make_donation")}
          </a>
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

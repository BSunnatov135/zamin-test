import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import cls from "./style.module.scss";
import ZInput from "components/UI/FormElements/ZInput";
import RegisterForm from "../Register";
import { useState } from "react";
import CountDown from "../RegCountdown/countDown";
import InputMaskCustom from "components/UI/FormElements/InputMask";
import { useForm } from "react-hook-form";
import useAuth from "services/auth";
import { otpCredentials } from "utils/authCredentials";
import { setUser } from "store/authSlice/authSlice";
import { useDispatch } from "react-redux";
import useTranslation from "next-translate/useTranslation";

export default function LoginForm({ open, handleClose }) {
  const [state, setState] = useState({
    smsId: "",
  });
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const statuses = ["initial", "code"];
  const [openRegister, setOpenRegister] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(statuses[0]);

  const handleRegister = (event) => {
    event && event.preventDefault();
    setOpenRegister((prev) => !prev);
    handleClose();
  };

  const handleCloseRegister = () => {
    setOpenRegister((prev) => !prev);
  };
  const { sendCode, verifyUser, signIn } = useAuth({
    sendCodeQueryProps: {
      onSuccess: (value) => {
        setState((prev) => ({
          ...prev,
          smsId: value.data.sms_id,
        }));
        setStatus(statuses[1]);
        reset();
      },
    },
    singInQueryProps: {
      onSuccess: (value) => {
        console.log("value1", value);
        dispatch(setUser(value.data.data));
      },
    },
    verifyUserQueryProps: {
      onSuccess: (value) => {
        handleGetUserInfo(value.data.user_id);
        setStatus(statuses[0]);
        reset();
        handleClose();
      },
    },
    verifyParams: {
      otp: watch("otp"),
      smsId: state.smsId,
    },
  });

  const resendCode = () => {
    sendCode.mutate({
      client_type: "SITE_USER",
      recipient: `${watch("recipient").replace(/[- )(]/g, "")}`,
      text: "Код подтверждения",
    });
  };
  const handleGetUserInfo = (value) => {
    signIn.mutate(value);
  };
  const onSubmit = (data) => {
    if (status === "initial") {
      sendCode.mutate({
        client_type: "SITE_USER",
        recipient: `${data.recipient.replace(/[- )(]/g, "")}`,
        text: "Код подтверждения",
      });
      return;
    }
    if (status === "code") {
      verifyUser.mutate(otpCredentials);

      return;
    }
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "0" }}>
        <div className={cls.box}>
          <div
            className={cls.closeIcon}
            onClick={(e) => {
              handleClose(e);
              reset();
              setStatus(statuses[0]);
            }}
          >
            <CloseIcon />
          </div>
          <div className={cls.title}>
            <h2>{t("enter_site")}</h2>
          </div>
          <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
            {status === "initial" && (
              <InputMaskCustom
                control={control}
                name="recipient"
                label={t("phone")}
                mask="+\9\9\8 99 999 99 99"
                maskchar={null}
                alwaysShowMask={false}
                placeholder={t("enter_number")}
                className={sendCode.status == "error" ? cls.borderRed : " "}
              />
            )}
            {status === "code" && (
              <>
                <InputMaskCustom
                  name="recipient"
                  control={control}
                  label={t("phone")}
                  mask="+\9\9\8 99 999 99"
                  maskchar={null}
                  alwaysShowMask={false}
                  placeholder={t("enter_number")}
                  className={sendCode.status == "error" ? cls.borderRed : " "}
                />
                <ZInput
                  register={register}
                  name="otp"
                  fullWidth
                  type="text"
                  maxlength="4"
                  label={t("confirm_code")}
                  placeholder={t("enter_code")}
                  style={{
                    borderColor: sendCode.status == "error" ? "red" : "",
                  }}
                />
                {verifyUser.status == "error" && (
                  <p className={cls.codeError}>{t("code_error")}</p>
                )}
                <CountDown seconds={59} resendCode={resendCode} />
              </>
            )}
            <Button type="submit" className={cls.button}>
              {t("login")}
            </Button>
          </form>

          <div className={cls.register}>
            <p>
              {t("not_with_us")}{" "}
              <a href="#" onClick={handleRegister}>
                {t("register")}
              </a>
            </p>
          </div>
        </div>
      </Dialog>
      <RegisterForm
        open={openRegister}
        handleClose={handleCloseRegister}
        openLogin={handleClose}
      />
    </>
  );
}

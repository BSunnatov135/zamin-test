import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import cls from "./style.module.scss";
import ZInput from "components/UI/FormElements/ZInput";
import RegisterForm from "../Register";
import { useRef, useState } from "react";
import CountDown from "../RegCountdown/countDown";
import InputMaskCustom from "components/UI/FormElements/InputMask";
import { useForm } from "react-hook-form";
import useAuth from "services/auth";
import { otpCredentials } from "utils/authCredentials";
import { setUser } from "store/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { userDataInstallments } from "store/authSlice/userData";
import classNames from "classnames";

export default function LoginForm({ open, handleClose }) {
  const [state, setState] = useState({
    smsId: "",
  });
  const dispatch = useDispatch();
  const userLoginData = useSelector((state) => state.userAuthData.data);
  const { t } = useTranslation("common");
  const statuses = ["initial", "code", "register"];
  const [openRegister, setOpenRegister] = useState(false);
  const ref = useRef();
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
  const { sendCode, verifyUser, signIn, registerUser } = useAuth({
    sendCodeQueryProps: {
      onSuccess: (value) => {
        dispatch(userDataInstallments(value?.data));
        setState((prev) => ({
          ...prev,
          smsId: value.data.sms_id,
          user_found: value.data?.data?.user_found,
        }));
        setStatus(statuses[1]);
        reset();
      },
    },
    singInQueryProps: {
      onSuccess: (value) => {
        dispatch(setUser(value.data.response));
        handleClose();
      },
    },

    verifyUserQueryProps: {
      onSuccess: (value) => {
        console.log("data==>", value);
        state.user_found ? handleClose() : setStatus(statuses[2]);
        reset();
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
      verifyUser.mutate(userLoginData);

      return;
    }

    if (status === "register") {
      let pn = "(" + data.recipient.substring(5);
      let pn2 = pn.split("");
      let pn3 = pn2.splice(3, 0, ")");
      let pn4 = pn2.join("");
      console.log("phone==>", pn4);
      registerUser.mutate({
        data: {
          birth_date: data.birth_date,
          email: data.email,
          name: data.name,
          phone: pn4,
          second_name: data.second_name,
          surname: data.surname,
          user_types_id: "8bc9ec1b-e619-4b49-a592-8a0d2379995d",
        },
      });

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
                  mask="+\9\9\8 99 999 99 99"
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
            {status === "register" && (
              <div className={cls.inputWrapper}>
                <InputMaskCustom
                  name="recipient"
                  control={control}
                  label={t("phone")}
                  mask="+\9\9\8 99 999 99 99"
                  maskchar={null}
                  alwaysShowMask={false}
                  placeholder={t("enter_number")}
                  className={sendCode.status == "error" ? cls.borderRed : " "}
                />
                <ZInput
                  register={register}
                  {...register("name", {
                    required: true,
                  })}
                  name="name"
                  fullWidth
                  type="text"
                  label={t("name")}
                  placeholder={t("enter_name")}
                  className={classNames(cls.name, {
                    [cls.borderRed]: errors.hasOwnProperty("name"),
                  })}
                />
                <ZInput
                  register={register}
                  {...register("surname", {
                    required: true,
                  })}
                  name="surname"
                  fullWidth
                  type="text"
                  label={t("surname")}
                  placeholder={t("enter_surname")}
                  className={
                    errors.hasOwnProperty("surname") ? cls.borderRed : " "
                  }
                />
                <ZInput
                  register={register}
                  {...register("second_name", {
                    required: true,
                  })}
                  name="second_name"
                  fullWidth
                  type="text"
                  label={t("middle_name")}
                  placeholder={t("enter_middlename")}
                  className={
                    errors.hasOwnProperty("second_name") ? cls.borderRed : " "
                  }
                />
                <ZInput
                  register={register}
                  {...register("email", {
                    required: true,
                  })}
                  name="email"
                  fullWidth
                  type="email"
                  label="E-mail"
                  placeholder="E-mail"
                  className={
                    errors.hasOwnProperty("email") ? cls.borderRed : " "
                  }
                />

                <ZInput
                  register={register}
                  {...register("birth_date", {
                    required: true,
                  })}
                  ref={ref}
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  name="birth_date"
                  fullWidth
                  label={t("birthdate")}
                  placeholder={t("choose_date")}
                  className={
                    errors.hasOwnProperty("birth_date") ? cls.borderRed : " "
                  }
                />
              </div>
            )}
            <Button type="submit" className={cls.button}>
              {t("login")}
            </Button>
          </form>

          {/* <div className={cls.register}>
            <p>
              {t("not_with_us")}{" "}
              <a href="#" onClick={handleRegister}>
                {t("register")}
              </a>
            </p>
          </div> */}
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

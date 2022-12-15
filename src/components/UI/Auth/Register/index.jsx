import { Dialog } from "@mui/material";
import cls from "./style.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ZInput from "components/UI/FormElements/ZInput";
import { useRef, useState } from "react";
import CheckIcon from "/src/assests/icons/checkIcon.svg";
import CountDown from "../RegCountdown/countDown";
import InputMaskCustom from "components/UI/FormElements/InputMask";
import { useForm } from "react-hook-form";
import useAuth from "services/auth";
import { otpCredentials } from "utils/authCredentials";
import { setUser } from "store/authSlice/authSlice";
import { useDispatch } from "react-redux";
import { display } from "@mui/system";

const statuses = ["initial", "code", "gender"];

export default function RegisterForm({ open, handleClose, openLogin }) {
  const [state, setState] = useState({
    smsId: "",
  });
  const ref = useRef();
  const {
    control,
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [toggle, setToggle] = useState("male");
  const [status, setStatus] = useState(statuses[0]);
  const dispatch = useDispatch();
  const { signUp, sendCode, verifyUser } = useAuth({
    signupQueryProps: {
      onSuccess: () => {
        setStatus(statuses[0]);
        handleClose();
        reset();
      },
    },
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
    verifyUserQueryProps: {
      onSuccess: (value) => {
        dispatch(setUser(value.data.client_platform));
        setStatus(statuses[2]);
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
      recipient: `+998${watch("phone").replace(/[- )(]/g, "")}`,
      text: "Код подтверждения",
    });
  };
  const onSubmit = (data) => {
    if (status === "initial") {
      sendCode.mutate({
        client_type: "SITE_USER",
        recipient: `+998${data.phone.replace(/[- )(]/g, "")}`,
        text: "Код подтверждения",
      });
      return;
    }
    if (status === "code") {
      console.log("data===>", data);
      verifyUser.mutate(otpCredentials);
      return;
    }
    signUp.mutate({
  
      data: {
        ...data,
        gender: [toggle],
        user_types_id: "8bc9ec1b-e619-4b49-a592-8a0d2379995d",
        birth_date: new Date(data.birth_date),
      },
      
    });
    console.log('nomer:', data)
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
            <h2>Регистрация</h2>
          </div>
          <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          {status === "initial" && (
              <InputMaskCustom
                control={control}
                name="phone"
                label="Номер телефона"
                mask="(99) 999-99-99"
                maskchar={null}
                alwaysShowMask={false}
                placeholder="Введите номер"
                className={sendCode.status == "error" ? cls.borderRed : " "}
              />
              )}
            {status === "code" && (
              <>
                <InputMaskCustom
                  name="phone"
                  control={control}
                  label="Номер телефона"
                  mask="(99) 999-99-99"
                  maskchar={null}
                  alwaysShowMask={false}
                  placeholder="Введите номер"
                 
                />
                <ZInput
                  register={register}
                  {...register("otp", {
                    required: true,
                  })}
                  name="otp"
                  fullWidth
                  type="password"
                  label="Код подтверждения"
                  placeholder="Введите код подтверждения"
                  className={errors.hasOwnProperty("otp") ? cls.borderRed : " "}
                />
                {verifyUser.status == 'error' && <p className={cls.codeError}>Код введён не правильно</p>}
                <CountDown seconds={59} resendCode={resendCode} />
              </>
            )}
            {status === "gender" && (
              <div className={cls.inputWrapper}>
                <ZInput
                  register={register}
                  {...register("name", {
                    required: true,
                  })}
                  name="name"
                  fullWidth
                  type="text"
                  label="Имя"
                  placeholder="Введите ваше имя"
                  className={
                    errors.hasOwnProperty("name") ? cls.borderRed : " "
                  }
                />
                <ZInput
                  register={register}
                  {...register("surname", {
                    required: true,
                  })}
                  name="surname"
                  fullWidth
                  type="text"
                  label="Фамилия"
                  placeholder="Введите фамилию"
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
                  label="Отчество"
                  placeholder="Введите отчество"
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
                  label="Дата рождения "
                  placeholder="Выберите дату"
                  className={
                  errors.hasOwnProperty("birth_date") ? cls.borderRed : " "
                  }
                />
                <div className={cls.genderChooseLabel}>
                  <label>Выберите пол</label>
                  <div
                    className={cls.genderChoose}
                    register={register}
                    name="gender"
                  >
                    <div
                      className={cls.gender}
                      onClick={() => setToggle("male")}
                    >
                      Мужчина {toggle === "male" && <CheckIcon />}
                    </div>
                    <div
                      className={cls.gender}
                      onClick={() => setToggle("female")}
                    >
                      Женщина {toggle === "female" && <CheckIcon />}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Button type="submit" className={cls.button}>
              Подтвердить
            </Button>
          </form>
          <div className={cls.register}>
            <p>
              Уже с нами?{" "}
              <a
                href="#"
                onClick={(e) => {
                  openLogin(e);
                  handleClose(e);
                }}
              >
                Войдите
              </a>
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
}

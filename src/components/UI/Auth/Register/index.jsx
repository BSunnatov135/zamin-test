import { Dialog } from "@mui/material";
import cls from "./style.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ZInput from "components/UI/FormElements/ZInput";
import { useState } from "react";
import CheckIcon from "/src/assests/icons/checkIcon.svg";
import CountDown from "../RegCountdown/countDown";
import InputMaskCustom from "components/UI/FormElements/InputMask";
import { useForm } from "react-hook-form";
import useAuth from "services/auth";
import { otpCredentials } from "utils/authCredentials";
import { setUser } from "store/authSlice/authSlice";
import { useDispatch } from "react-redux";

const statuses = ["initial", "code", "gender"];

export default function RegisterForm({ open, handleClose, openLogin }) {
  const [state, setState] = useState({
    smsId: ''
  })
  const { control, register, handleSubmit, watch, reset, formState: {errors} } = useForm();
  const [toggle, setToggle] = useState("male");
  const [status, setStatus] = useState(statuses[0]);
  const dispatch = useDispatch()
  const { signUp, sendCode, verifyUser } = useAuth({
    signupQueryProps: {
      onSuccess: () => {
        handleClose()
        reset();
        setStatus(statuses[0])
      }
    },
    sendCodeQueryProps: {
      onSuccess: (value) => {
        setState(prev=>({
          ...prev,
          smsId: value.data.sms_id
        }))
        setStatus(statuses[1])
      }
    },
    verifyUserQueryProps: {
      onSuccess: (value) => {
        dispatch(setUser(value.data.client_platform))
        setStatus(statuses[2])
      }
    },
    verifyParams: {
      otp: watch('otp'), smsId: state.smsId  }
  })

  const onSubmit = (data) => {
    if (status === 'initial') {
      sendCode.mutate({
        "client_type": "SITE_USER",
        "recipient": `+998${data.phone.replace(/[- )(]/g, '')}`,
        "text" : "Код подтверждения"
      })
      return
    }
    if (status === 'code') {
      console.log('data===>', data)
      verifyUser.mutate(otpCredentials)
      return
    }
    signUp.mutate
      ({
        data: {
          ...data, gender: [toggle],
          user_types_id: "8bc9ec1b-e619-4b49-a592-8a0d2379995d", birth_date: new Date(data.birth_date)
        }
      })
  }
    
  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "0" }}>
        <div className={cls.box}>
          <div className={cls.closeIcon} onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className={cls.title}>
            <h2>Регистрация</h2>
          </div>
          <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
            <InputMaskCustom
              name="phone"
              control={control}
              label="Номер телефона"
              mask="(99) 999-99-99"
              maskchar={null}
              alwaysShowMask={false}
              placeholder="Введите номер"
            />
            {status === "code" && (
              <>
                <ZInput
                  register={register}
                  name="otp"
                  fullWidth
                  type="password"
                  label="Смс код"
                  placeholder="Введите Смс код"
                />
                <CountDown seconds={59} />
              </>
            )}
            {status === "gender" && (
              <div className={cls.inputWrapper}>
                <ZInput
                  register={register}
                  name="name"
                  fullWidth
                  type="text"
                  label="Имя"
                  placeholder="Введите ваше имя"
                />
                 <ZInput
                  register={register}
                  name="surname"
                  fullWidth
                  type="text"
                  label="Фамилия"
                  placeholder="Введите фамилию"
                />
                <ZInput
                  register={register}
                  name="second_name"
                  fullWidth
                  type="text"
                  label="Отчество"
                  placeholder="Введите отчество"
                />
                <ZInput
                  register={register}
                  name="email"
                  fullWidth
                  type="email"
                  label="E-mail"
                  placeholder="E-mail"
                />
                  <ZInput
                  register={register}
                  name="birth_date"
                  fullWidth
                  type="date"
                  label="Дата рождение"
                  placeholder="Выберите дату"
                />
                <div className={cls.genderChooseLabel}>
                  <label>Выберите пол</label>
                  <div className={cls.genderChoose} register={register}
                  name="gender">
                    <div className={cls.gender} onClick={() => setToggle("male")}>
                      Мужчина {toggle === "male" && <CheckIcon />}
                    </div>
                    <div className={cls.gender} onClick={() => setToggle("female")}>
                      Женщина {toggle === "female" && <CheckIcon />}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Button type="submit" className={cls.button}>Подвердить</Button>

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
